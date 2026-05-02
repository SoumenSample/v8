"use client"

import { Plus } from "lucide-react"

import { DatePicker } from "./date-picker"
import { Button } from "@/components/ui/button"
import React from "react"

interface CalendarSidebarProps {
  selectedDate?: Date
  onDateSelect?: (date: Date) => void
  onNewCalendar?: () => void
  onNewEvent?: () => void
  events?: Array<{
    date: Date
    count: number
  }>
  className?: string
}

function formatLocalDateKey(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

function buildEventDates(events: Array<{ date: Date }>) {
  const counts = new Map<string, number>()

  events.forEach((event) => {
    const key = formatLocalDateKey(new Date(event.date))
    counts.set(key, (counts.get(key) || 0) + 1)
  })

  return Array.from(counts.entries()).map(([date, count]) => {
    const [year, month, day] = date.split("-").map(Number)

    return {
      date: new Date(year, month - 1, day),
      count,
    }
  })
}

export function CalendarSidebar({ 
  selectedDate,
  onDateSelect,
  onNewCalendar,
  onNewEvent,
  events = [],
  className 
}: CalendarSidebarProps) {
  const [eventsData, setEventsData] = React.useState<{
    date: Date
    title: string
    time?: string
  }[]>([])
React.useEffect(() => {
  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/events");
      const data = await res.json();

      console.log("API DATA:", data);

      // handle different API formats safely
      const eventArray = Array.isArray(data)
        ? data
        : data.events || data.data || [];

      const formatted = eventArray.map((e: any) => ({
        date: new Date(e.date),
        title: e.title,
        time: e.time,
      }));

      setEventsData(formatted);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  fetchEvents();
}, [])
  const filteredEvents = eventsData.filter((event) => {
  if (!selectedDate) return false

  return (
    new Date(event.date).toDateString() ===
    new Date(selectedDate).toDateString()
  );
})
  const eventDates = buildEventDates(eventsData)
  return (
    <div className={`flex flex-col h-full bg-background text-foreground ${className}`}>
      {/* Add New Event Button */}
      <div className="border-b border-border/60 bg-background p-6 text-foreground dark:border-white/15">
        <Button 
          className="w-full cursor-pointer bg-foreground text-background hover:bg-foreground/90 dark:border-border dark:bg-transparent dark:text-foreground dark:hover:bg-accent"
          onClick={onNewEvent}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add New Event
        </Button>
      </div>

      {/* Date Picker */}
    <DatePicker
  selectedDate={selectedDate}
  onDateSelect={onDateSelect}
  events={eventDates.length > 0 ? eventDates : events}
/>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
  {filteredEvents.length === 0 ? (
    <p className="text-sm text-muted-foreground">
      No meetings scheduled
    </p>
  ) : (
    filteredEvents.map((event, index) => (
      <div
        key={index}
        className="p-3 rounded-lg border border-border bg-muted/40"
      >
        <p className="text-sm font-medium">{event.title}</p>
        {event.time && (
          <p className="text-xs text-muted-foreground">
            {event.time}
          </p>
        )}
      </div>
    ))
  )}
</div>
    </div>
  )
}