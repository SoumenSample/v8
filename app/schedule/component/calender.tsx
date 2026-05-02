"use client"

import { CalendarSidebar } from "./calender-sidebar"
import { CalendarMain } from "./calender-unified"
import { EventForm } from "./vent-form"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { type CalendarEvent } from "../types"
import { useCalendar } from "../use-calendar"

interface CalendarProps {
  events: CalendarEvent[]
  eventDates: Array<{ date: Date; count: number }>
  currentUserEmail?: string
  currentUserId?: string
}

export function Calendar({ events, eventDates, currentUserEmail, currentUserId }: CalendarProps) {
  const calendar = useCalendar(events, currentUserEmail, currentUserId)

  return (
    <>
      <div className="bg-background relative">
        <div className="flex gap-4  z-10" style={{ minHeight: "800px" }}>
          {/* Desktop Sidebar - Hidden on mobile/tablet, shown on extra large screens */}
          <div className="hidden xl:block w-80 rounded-lg rounded-tl-none  overflow-hidden bg-background" style={{ flexShrink: 0 }}>
            <CalendarSidebar
              selectedDate={calendar.selectedDate}
              onDateSelect={calendar.handleDateSelect}
              onNewCalendar={calendar.handleNewCalendar}
              onNewEvent={calendar.handleNewEvent}
              events={eventDates}
              className="h-full"
            />
          </div>
          
          {/* Main Calendar Panel */}
          <div className="flex-1 min-w-0 rounded-lg rounded-tr-none border border-border/70 dark:border-white/15 overflow-hidden bg-background">
            <CalendarMain
              events={events}
              eventDates={eventDates}
              onDeleteEvent={calendar.handleDeleteEvent}
              currentUserEmail={currentUserEmail}
            />
          </div>
        </div>

        {/* Mobile/Tablet Sheet - Positioned relative to calendar container */}
        <Sheet open={calendar.showCalendarSheet} onOpenChange={calendar.setShowCalendarSheet}>
          <SheetContent side="left" className="w-80 p-0" style={{ position: 'absolute' }}>
            <SheetHeader className="p-4 pb-2">
              <SheetTitle className="">Calendar</SheetTitle>
              <SheetDescription className="">
                Browse dates and manage your calendar events
              </SheetDescription>
            </SheetHeader>
            <CalendarSidebar
              selectedDate={calendar.selectedDate}
              onDateSelect={calendar.handleDateSelect}
              onNewCalendar={calendar.handleNewCalendar}
              onNewEvent={calendar.handleNewEvent}
              events={eventDates}
              className="h-full"
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Event Form Dialog */}
      <EventForm
        event={calendar.editingEvent}
        open={calendar.showEventForm}
        onOpenChange={calendar.setShowEventForm}
        onSave={calendar.handleSaveEvent}
        onDelete={calendar.handleDeleteEvent}
        currentUserEmail={currentUserEmail}
        currentUserId={currentUserId}
      />
    </>
  )
}