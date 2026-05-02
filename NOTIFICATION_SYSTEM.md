# Notification System Documentation

## Overview

The notification system provides a global way to display notifications throughout your application. Users can see notifications via a bell icon in the dashboard header with a dropdown panel showing all notifications.

## Components

### 1. **NotificationContext** (`context/NotificationContext.jsx`)
Central state management for notifications using React Context API.

**Exports:**
- `NotificationProvider` - Wraps your app to provide notification functionality
- `useNotifications()` - Hook to access notification methods

**Available Methods:**
```javascript
const {
  notifications,      // Array of all notifications
  addNotification,    // Add a new notification
  removeNotification, // Remove a notification by ID
  markAsRead,         // Mark a notification as read
  markAllAsRead,      // Mark all notifications as read
  clearAll,           // Clear all notifications
  unreadCount,        // Count of unread notifications
} = useNotifications();
```

### 2. **NotificationCenter** (`components/NotificationCenter.jsx`)
UI component displaying a bell icon and dropdown notification panel.

**Features:**
- Bell icon with unread count badge
- Dropdown panel with scrollable notification list
- Notification details (title, message, timestamp, type)
- Mark as read, dismiss, and clear all buttons
- Color-coded notifications based on type

### 3. **useNotification Hook** (`hooks/useNotification.js`)
Convenience hook for easily triggering notifications.

**Usage:**
```javascript
const notify = useNotification();

notify.success(title, message, autoClose);
notify.error(title, message, autoClose);
notify.info(title, message, autoClose);
notify.warning(title, message, autoClose);
```

## Features

### Notification Types
- **success** (green) - For successful operations
- **error** (red) - For errors
- **info** (blue) - For informational messages
- **warning** (yellow) - For warnings

### Auto-Close
- Notifications auto-close after 5 seconds by default
- Set `autoClose: false` to keep them visible indefinitely
- Notifications are stored in `localStorage`, so read/unread state and persistent notifications survive refreshes

### Unread Tracking
- New notifications are marked as unread
- Bell icon shows badge with unread count
- Click on notification to mark as read
- "Mark all read" button available

### Timestamps
- Each notification shows when it was created
- Relative time format (e.g., "2 minutes ago", "now")

## Setup

### 1. Already Integrated (Done)
- ✅ Added `NotificationProvider` to `app/layout.js`
- ✅ Added `NotificationCenter` to `components/site-header.jsx`

### 2. Usage in Components

```javascript
"use client";

import { useNotification } from "@/hooks/useNotification";

export function MyComponent() {
  const notify = useNotification();

  const handleAction = async () => {
    try {
      // Your logic here
      notify.success("Success!", "Action completed successfully");
    } catch (error) {
      notify.error("Error", error.message);
    }
  };

  return (
    <button onClick={handleAction}>
      Perform Action
    </button>
  );
}
```

## API Examples

### Form Submission
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  const notify = useNotification();

  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      notify.success("Form Submitted", "Thank you!");
    } else {
      notify.error("Submission Failed", "Please try again");
    }
  } catch (error) {
    notify.error("Error", error.message);
  }
};
```

### Data Loading
```javascript
useEffect(() => {
  const notify = useNotification();

  async function fetchData() {
    try {
      const response = await fetch("/api/data");
      const data = await response.json();
      
      if (response.ok) {
        notify.info("Data Loaded", "Your data is ready");
      }
    } catch (error) {
      notify.error("Failed to Load", "Please refresh the page");
    }
  }

  fetchData();
}, []);
```

## Styling

The notification system uses your app's existing theme:
- Dark mode support built-in
- Uses Tailwind CSS classes from your project
- Color-coded for different notification types
- Responsive design (fits mobile and desktop)

## File Structure

```
components/
  ├── NotificationCenter.jsx          # Bell icon & dropdown UI
  ├── site-header.jsx                 # Updated to include bell
  └── ui/
      ├── dropdown-menu.tsx           # Used by NotificationCenter
      ├── scroll-area.tsx             # Used by NotificationCenter
      └── button.tsx                  # Used by NotificationCenter

context/
  └── NotificationContext.jsx         # State management

hooks/
  └── useNotification.js              # Convenience hook

app/
  └── layout.js                       # Wrapped with NotificationProvider
```

## Best Practices

1. **Always use try-catch** - Wrap API calls to show error notifications
2. **Be specific** - Use clear, concise notification titles and messages
3. **Choose right type** - Use appropriate notification types (success/error/info/warning)
4. **Auto-close wisely** - Use `autoClose: false` for important notifications
5. **Don't spam** - Avoid showing too many notifications at once

## Troubleshooting

### Notifications not showing?
1. Check that `NotificationProvider` is in `app/layout.js`
2. Ensure component is marked with `"use client"` directive
3. Verify `useNotification()` hook is imported correctly

### Hook not found error?
- Make sure component has `"use client"` at the top
- Verify import path is correct: `@/hooks/useNotification`

### Bell icon not visible?
- Check that `NotificationCenter` is imported in `site-header.jsx`
- Clear browser cache and restart dev server
- Verify Tailwind CSS is working (check other icons)

## Future Enhancements

Potential additions:
- Sound notifications
- Desktop notifications
- Notification history/archive
- Notification categories/filtering
- Custom notification templates
