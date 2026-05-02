"use client";

import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import { MdClose, MdCheckCircle, MdInfo, MdWarning, MdError } from "react-icons/md";
import { useSession } from "next-auth/react";
import { io } from "socket.io-client";
import { useNotifications } from "@/context/NotificationContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const NotificationCenter = () => {
  const { data: session } = useSession();
  const {
    notifications,
    addNotification,
    removeNotification,
    markAsRead,
    markAllAsRead,
    clearAll,
    unreadCount,
  } = useNotifications();
  const [isOpen, setIsOpen] = useState(false);

  const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || (typeof window !== "undefined" ? window.location.origin : "");

  useEffect(() => {
    const userId = session?.user?.id;
    if (!userId) return undefined;

    const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || (typeof window !== "undefined" ? window.location.origin : "");

    const socket = io(socketUrl, {
      transports: ["websocket", "polling"],
      auth: {
        userId,
        // token can be added here if using JWT
      },
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    socket.emit("join", { userId }, (response) => {
      if (response?.ok) {
        console.debug("[socket] Joined notification center successfully");
      } else {
        console.error("[socket] Join failed:", response?.error);
      }
    });

    socket.on("connect", () => {
      console.debug("[socket] connected", socket.id, "userId=", userId);
      // Rejoin on reconnect
      socket.emit("join", { userId });
    });

    socket.on("connect_error", (err) => {
      console.error("[socket] connect_error", err);
    });

    socket.on("disconnect", (reason) => {
      console.warn("[socket] disconnected", reason);
    });

    socket.on("notification", (payload) => {
      console.debug("[socket] notification received", payload);
      const type = payload?.type || "info";
      const titleByType = {
        chat: "New chat message",
        ticket: "Ticket update",
        project: "Project update",
        lead: "New lead",
        user: "User activity",
        request: "New request",
        payment: "Payment update",
      };

      addNotification({
        type,
        title: payload?.title || titleByType[type] || "Notification",
        message: payload?.text || payload?.message || "You have a new update.",
        autoClose: false,
      });
    });

    return () => {
      socket.off("notification");
      socket.off("connect");
      socket.off("connect_error");
      socket.off("disconnect");
      socket.disconnect();
    };
  }, [addNotification, session?.user?.id, socketUrl]);

  const getNotificationIcon = (type) => {
    switch (type) {
      case "success":
        return <MdCheckCircle className="w-5 h-5 text-green-500" />;
      case "error":
        return <MdError className="w-5 h-5 text-red-500" />;
      case "warning":
        return <MdWarning className="w-5 h-5 text-yellow-500" />;
      case "info":
      default:
        return <MdInfo className="w-5 h-5 text-blue-500" />;
    }
  };

  const getNotificationBgColor = (type, read) => {
    if (read) return "bg-gray-50 dark:bg-gray-800";
    switch (type) {
      case "success":
        return "bg-green-50 dark:bg-green-900/10";
      case "error":
        return "bg-red-50 dark:bg-red-900/10";
      case "warning":
        return "bg-yellow-50 dark:bg-yellow-900/10";
      case "info":
      default:
        return "bg-blue-50 dark:bg-blue-900/10";
    }
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const diff = now - new Date(timestamp);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return "now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;

    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="relative p-2 text-foreground hover:bg-accent rounded-lg transition-colors">
          <FaBell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-80">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-sm font-semibold text-foreground">
            Notifications
          </h2>
          {notifications.length > 0 && (
            <div className="flex gap-2">
              {unreadCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto py-1 px-2 text-xs"
                  onClick={() => {
                    markAllAsRead();
                  }}
                >
                  Mark all read
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Notifications List */}
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <FaBell className="w-12 h-12 text-muted-foreground/30 mb-3" />
            <p className="text-sm text-muted-foreground">No notifications yet</p>
            <p className="text-xs text-muted-foreground mt-1">
              We'll let you know when something arrives
            </p>
          </div>
        ) : (
          <ScrollArea className="h-96">
            <div className="space-y-0">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b last:border-b-0 cursor-pointer transition-colors hover:bg-accent/50 ${getNotificationBgColor(
                    notification.type,
                    notification.read
                  )}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 pt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p
                          className={`text-sm font-medium ${
                            notification.read
                              ? "text-muted-foreground"
                              : "text-foreground font-semibold"
                          }`}
                        >
                          {notification.title}
                        </p>
                        <button
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeNotification(notification.id);
                          }}
                        >
                          <MdClose className="w-4 h-4" />
                        </button>
                      </div>
                      {notification.message && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {notification.message}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        {formatTime(notification.timestamp)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="p-4 border-t">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => clearAll()}
            >
              Clear all notifications
            </Button>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationCenter;
