"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

interface DatePickerProps {
  selectedDate?: Date
  onDateSelect?: (date: Date) => void
  events?: Array<{ date: Date; count: number }>
}

export function DatePicker({ selectedDate, onDateSelect, events = [] }: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(selectedDate || new Date())

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate)
      onDateSelect?.(selectedDate)
    }
  }

  return (
    <div className="flex justify-center bg-background text-foreground">
      <Calendar 
        mode="single"
        selected={date}
        onSelect={handleDateSelect}
        eventDates={events}
        className="w-full [&_[role=gridcell]_button]:cursor-pointer [&_button]:cursor-pointer bg-background text-foreground"
      />
    </div>
  )
}