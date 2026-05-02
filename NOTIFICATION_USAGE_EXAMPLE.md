/**
 * NOTIFICATION SYSTEM - USAGE GUIDE
 * 
 * This file demonstrates how to use the notification system in your project.
 * You can delete this file after reading it.
 */

/**
 * EXAMPLE 1: Using the useNotification hook in a component
 */
import { useNotification } from "@/hooks/useNotification";

export function ExampleComponent() {
  const notify = useNotification();

  const handleSuccess = () => {
    notify.success("Success!", "Operation completed successfully");
  };

  const handleError = () => {
    notify.error("Error!", "Something went wrong");
  };

  const handleInfo = () => {
    notify.info("Info", "Here's some important information");
  };

  const handleWarning = () => {
    notify.warning("Warning!", "Please be careful with this action");
  };

  return (
    <div>
      <button onClick={handleSuccess}>Show Success</button>
      <button onClick={handleError}>Show Error</button>
      <button onClick={handleInfo}>Show Info</button>
      <button onClick={handleWarning}>Show Warning</button>
    </div>
  );
}

/**
 * EXAMPLE 2: Using directly in API calls or forms
 */
import { useNotification } from "@/hooks/useNotification";

export function FormComponent() {
  const notify = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ /* your data */ }),
      });

      if (response.ok) {
        notify.success(
          "Form Submitted",
          "Your form has been submitted successfully"
        );
      } else {
        notify.error(
          "Submission Failed",
          "Please check your input and try again"
        );
      }
    } catch (error) {
      notify.error("Error", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* your form fields */}
      <button type="submit">Submit</button>
    </form>
  );
}

/**
 * EXAMPLE 3: In API route handlers (server-side)
 */
// app/api/example/route.js
// Note: Notifications on the client must be triggered from the client.
// Use the response from your API and trigger notifications on the client.

export async function POST(request) {
  try {
    // Your server logic here
    return Response.json({
      success: true,
      message: "Operation successful",
    });
  } catch (error) {
    return Response.json({
      success: false,
      message: error.message,
    }, { status: 500 });
  }
}

// Client component that calls the API
import { useNotification } from "@/hooks/useNotification";

export function ClientComponent() {
  const notify = useNotification();

  const handleClick = async () => {
    try {
      const res = await fetch("/api/example", { method: "POST" });
      const data = await res.json();

      if (data.success) {
        notify.success("Success", data.message);
      } else {
        notify.error("Error", data.message);
      }
    } catch (error) {
      notify.error("Error", error.message);
    }
  };

  return <button onClick={handleClick}>Call API</button>;
}

/**
 * NOTIFICATION TYPES AND OPTIONS
 * 
 * notify.success(title, message, autoClose)
 * notify.error(title, message, autoClose)
 * notify.info(title, message, autoClose)
 * notify.warning(title, message, autoClose)
 * 
 * Parameters:
 * - title (string): The main notification title
 * - message (string, optional): Additional details
 * - autoClose (boolean, optional): Auto-close after 5 seconds. Default: true
 * 
 * Examples with autoClose disabled (for persistent notifications):
 * 
 * notify.success("Important!", "This stays visible", false);
 * notify.error("Critical Error", "Please fix this", false);
 */

/**
 * LOCATION
 * 
 * The notification bell icon will appear in the dashboard header,
 * next to the dark/light mode toggle button.
 * 
 * Click the bell to see all notifications.
 * Unread notifications show a red badge with the count.
 */
