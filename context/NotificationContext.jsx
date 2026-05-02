"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const NotificationContext = createContext();
const STORAGE_KEY = "cyberspaceworks.notifications";

function loadStoredNotifications() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [];
    }

    const now = Date.now();

    return parsed.filter((notification) => {
      if (!notification || typeof notification !== "object") {
        return false;
      }

      if (notification.autoClose !== false && notification.expiresAt) {
        return Number(notification.expiresAt) > now;
      }

      return true;
    });
  } catch {
    return [];
  }
}

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState(loadStoredNotifications);
  const timersRef = useRef(new Map());

  const removeNotification = useCallback((id) => {
    const timerId = timersRef.current.get(id);
    if (timerId) {
      clearTimeout(timerId);
      timersRef.current.delete(id);
    }

    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
    } catch {
      // Ignore storage failures and keep notifications in memory.
    }
  }, [notifications]);

  useEffect(() => {
    timersRef.current.forEach((timerId) => clearTimeout(timerId));
    timersRef.current.clear();

    const now = Date.now();

    notifications.forEach((notification) => {
      if (notification.autoClose === false || !notification.expiresAt) {
        return;
      }

      const delay = Number(notification.expiresAt) - now;
      if (delay <= 0) {
        return;
      }

      const timerId = setTimeout(() => {
        removeNotification(notification.id);
      }, delay);

      timersRef.current.set(notification.id, timerId);
    });

    return () => {
      timersRef.current.forEach((timerId) => clearTimeout(timerId));
      timersRef.current.clear();
    };
  }, [notifications, removeNotification]);

  const addNotification = useCallback((notification) => {
    const id = Date.now();
    const autoClose = notification.autoClose !== false;
    const newNotification = {
      id,
      timestamp: new Date(),
      read: false,
      ...notification,
      autoClose,
      expiresAt: autoClose ? Date.now() + 5000 : null,
    };

    setNotifications((prev) => [newNotification, ...prev]);

    return id;
  }, []);

  const markAsRead = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const clearAll = useCallback(() => {
    timersRef.current.forEach((timerId) => clearTimeout(timerId));
    timersRef.current.clear();
    setNotifications([]);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const value = {
    notifications,
    addNotification,
    removeNotification,
    markAsRead,
    markAllAsRead,
    clearAll,
    unreadCount,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotifications must be used within NotificationProvider"
    );
  }
  return context;
}
