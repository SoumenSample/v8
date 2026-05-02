import { useNotifications } from "@/context/NotificationContext";

/**
 * Hook to easily show notifications
 * Usage:
 * const notify = useNotification();
 * notify.success("Success!", "Operation completed");
 * notify.error("Error!", "Something went wrong");
 * notify.info("Info", "Here's some information");
 * notify.warning("Warning!", "Please be careful");
 */
export function useNotification() {
  const { addNotification } = useNotifications();

  return {
    success: (title, message = "", autoClose = true) => {
      addNotification({
        type: "success",
        title,
        message,
        autoClose,
      });
    },
    error: (title, message = "", autoClose = true) => {
      addNotification({
        type: "error",
        title,
        message,
        autoClose,
      });
    },
    info: (title, message = "", autoClose = true) => {
      addNotification({
        type: "info",
        title,
        message,
        autoClose,
      });
    },
    warning: (title, message = "", autoClose = true) => {
      addNotification({
        type: "warning",
        title,
        message,
        autoClose,
      });
    },
  };
}
