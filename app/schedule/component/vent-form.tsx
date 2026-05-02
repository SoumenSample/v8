"use client"

import { useState } from "react"
import { CalendarIcon, Clock, MapPin, Users, Type, Tag, Trash2, X, Plus, Bell, AlarmClock } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { useNotification } from "@/hooks/useNotification"
import { type CalendarEvent } from "../types"

interface EventFormProps {
  event?: CalendarEvent | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onSave: (event: Partial<CalendarEvent>) => void
  onDelete?: (eventId: number) => void
  currentUserEmail?: string
  currentUserId?: string
}

const eventTypes = [
  { value: "meeting", label: "Meeting", color: "bg-blue-500", accent: "text-blue-600 bg-blue-50 border-blue-200", dot: "#3b82f6" },
  { value: "event", label: "Event", color: "bg-emerald-500", accent: "text-emerald-600 bg-emerald-50 border-emerald-200", dot: "#10b981" },
  { value: "personal", label: "Personal", color: "bg-pink-500", accent: "text-pink-600 bg-pink-50 border-pink-200", dot: "#ec4899" },
  { value: "task", label: "Task", color: "bg-orange-500", accent: "text-orange-600 bg-orange-50 border-orange-200", dot: "#f97316" },
  { value: "reminder", label: "Reminder", color: "bg-violet-500", accent: "text-violet-600 bg-violet-50 border-violet-200", dot: "#8b5cf6" },
]

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM"
]

const durationOptions = [
  "15 min", "30 min", "45 min", "1 hour", "1.5 hours", "2 hours", "3 hours", "All day"
]

const AVATAR_COLORS = [
  "bg-blue-100 text-blue-700",
  "bg-emerald-100 text-emerald-700",
  "bg-pink-100 text-pink-700",
  "bg-orange-100 text-orange-700",
  "bg-violet-100 text-violet-700",
  "bg-cyan-100 text-cyan-700",
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
      {children}
    </p>
  )
}

function FieldRow({ icon: Icon, label, children }: { icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[140px_1fr] items-start gap-4">
      <div className="flex items-center gap-2 pt-2.5">
        <Icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <div>{children}</div>
    </div>
  )
}

export function EventForm({ event, open, onOpenChange, onSave, onDelete, currentUserEmail, currentUserId }: EventFormProps) {
  const notify = useNotification()
  const [formData, setFormData] = useState({
    title: event?.title || "",
    date: event?.date || new Date(),
    time: event?.time || "9:00 AM",
    duration: event?.duration || "1 hour",
    type: event?.type || "meeting",
    location: event?.location || "",
    description: event?.description || "",
    attendees: event?.attendees || [] as string[],
    assignedEmails: event?.assignedToEmails?.join(", ") || (currentUserEmail ? currentUserEmail : ""),
    allDay: false,
    reminder: true,
  })

  const [showCalendar, setShowCalendar] = useState(false)
  const [newAttendee, setNewAttendee] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [saveError, setSaveError] = useState("")

  const selectedType = eventTypes.find(t => t.value === formData.type) ?? eventTypes[0]

  const handleSave = async () => {
    if (!formData.title.trim()) {
      setSaveError("Event title is required")
      notify.error("Event not saved", "Event title is required")
      return
    }

    setIsSaving(true)
    setSaveError("")
    try {
      // Ensure current user is included in assignedToEmails
      let emails = formData.assignedEmails
        .split(",")
        .map(email => email.trim().toLowerCase())
        .filter(Boolean)
      
      // Auto-add current user's email if not already included
      if (currentUserEmail && !emails.includes(currentUserEmail.toLowerCase())) {
        emails = [currentUserEmail.toLowerCase(), ...emails]
      }

      const eventData: any = {
        title: formData.title,
        date: formData.date instanceof Date ? formData.date.toISOString() : new Date(formData.date).toISOString(),
        time: formData.time,
        duration: formData.duration,
        type: formData.type,
        location: formData.location,
        description: formData.description,
        attendees: formData.attendees,
        allDay: formData.allDay,
        reminder: formData.reminder,
        color: selectedType.color,
        assignedToEmails: emails,
        actorUserId: currentUserId,
      }

      // Only add id for updates
      if (event?.id) {
        eventData.id = event.id
      }

      console.log("🚀 Sending to API:", JSON.stringify(eventData, null, 2))

      const response = await fetch("/api/events", {
        method: event ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      })

      const responseData = await response.json()

      if (!response.ok) {
        throw new Error(responseData.error || "Failed to save event")
      }

      notify.success(
        event ? "Event updated" : "Event created",
        `${formData.title} was saved successfully.`
      )
      setShowSuccessModal(true)
    } catch (err: any) {
      setSaveError(err.message || "Failed to save event")
      notify.error("Event not saved", err.message || "Failed to save event")
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = () => {
    if (event?.id && onDelete) {
      onDelete(event.id)
      onOpenChange(false)
    }
  }

  const addAttendee = () => {
    const trimmed = newAttendee.trim()
    if (trimmed && !formData.attendees.includes(trimmed)) {
      setFormData(prev => ({ ...prev, attendees: [...prev.attendees, trimmed] }))
      setNewAttendee("")
    }
  }

  const removeAttendee = (name: string) =>
    setFormData(prev => ({ ...prev, attendees: prev.attendees.filter(a => a !== name) }))

  return (
    <>
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="w-[min(95vw,780px)] max-h-[90vh] flex flex-col overflow-hidden rounded-2xl border-0 bg-background p-0 shadow-2xl"
      >
        {/* Colored top bar keyed to event type */}
        <div
          className="h-1 w-full rounded-t-2xl transition-colors duration-300"
          style={{ backgroundColor: selectedType.dot }}
        />

        {/* Header */}
        <div className="flex items-start justify-between border-b px-6 py-5">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2 w-2 rounded-full transition-colors duration-300"
                style={{ backgroundColor: selectedType.dot }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                Calendar
              </span>
            </div>
            <DialogTitle className="mt-1 text-xl font-semibold tracking-tight">
              {event ? "Edit Event" : "New Event"}
            </DialogTitle>
            <DialogDescription className="mt-0.5 text-sm text-muted-foreground/70">
              {event
                ? "Update details and notify attendees."
                : "Fill in the details to add to your calendar."}
            </DialogDescription>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div className="space-y-5">

            {/* Title */}
            <Input
              placeholder="Event title…"
              value={formData.title}
              onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="h-11 border-0 border-b rounded-none bg-transparent px-0 text-lg font-medium placeholder:text-muted-foreground/40 focus-visible:ring-0 focus-visible:border-b-foreground/30"
            />

            {/* Type pills */}
            <div>
              <SectionLabel>Type</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {eventTypes.map(type => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, type: type.value as CalendarEvent["type"] }))}
                    className={cn(
                      "flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-all",
                      formData.type === type.value
                        ? type.accent + " shadow-sm"
                        : "border-border text-muted-foreground hover:border-muted-foreground/30 hover:text-foreground"
                    )}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: type.dot }}
                    />
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div>
              <SectionLabel>Schedule</SectionLabel>
              <div className="space-y-3">
                <FieldRow icon={CalendarIcon} label="Date">
                  <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="h-9 w-full justify-start text-left text-sm font-normal"
                      >
                        {format(formData.date, "EEE, MMM d, yyyy")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={formData.date}
                        onSelect={date => {
                          if (date) {
                            setFormData(prev => ({ ...prev, date }))
                            setShowCalendar(false)
                          }
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </FieldRow>

                <FieldRow icon={Clock} label="Time">
                  <div className="flex gap-2">
                    <Select
                      value={formData.time}
                      onValueChange={value => setFormData(prev => ({ ...prev, time: value }))}
                    >
                      <SelectTrigger className="h-9 flex-1 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map(t => (
                          <SelectItem key={t} value={t} className="text-sm">{t}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Select
                      value={formData.duration}
                      onValueChange={value => setFormData(prev => ({ ...prev, duration: value }))}
                    >
                      <SelectTrigger className="h-9 flex-1 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {durationOptions.map(d => (
                          <SelectItem key={d} value={d} className="text-sm">{d}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </FieldRow>
              </div>
            </div>

            {/* Options */}
            <div className="flex gap-6 rounded-xl border bg-muted/20 px-4 py-3">
              <label className="flex cursor-pointer items-center gap-2.5">
                <Switch
                  checked={formData.allDay}
                  onCheckedChange={checked => setFormData(prev => ({ ...prev, allDay: checked }))}
                />
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <AlarmClock className="h-3.5 w-3.5" />
                  All day
                </span>
              </label>
              <label className="flex cursor-pointer items-center gap-2.5">
                <Switch
                  checked={formData.reminder}
                  onCheckedChange={checked => setFormData(prev => ({ ...prev, reminder: checked }))}
                />
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Bell className="h-3.5 w-3.5" />
                  Reminder
                </span>
              </label>
            </div>

            {/* Location */}
            <FieldRow icon={MapPin} label="Location">
              <Input
                placeholder="Add location…"
                value={formData.location}
                onChange={e => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="h-9 text-sm"
              />
            </FieldRow>

            {/* Attendees - Meeting participants (optional, for reference) */}
            <div>
              <SectionLabel>Attendees (Optional)</SectionLabel>
              <p className="text-xs text-muted-foreground mb-3">List names of people attending this event. This is for reference only—use &quot;Share With&quot; above to control who can see this event.</p>
              {formData.attendees.length > 0 && (
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {formData.attendees.map((name, i) => (
                    <span
                      key={name}
                      className="flex items-center gap-1.5 rounded-full border bg-background px-2 py-0.5 text-xs font-medium shadow-sm"
                    >
                      <Avatar className="h-4 w-4">
                        <AvatarFallback className={cn("text-[9px] font-semibold", AVATAR_COLORS[i % AVATAR_COLORS.length])}>
                          {name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      {name}
                      <button
                        type="button"
                        onClick={() => removeAttendee(name)}
                        className="ml-0.5 text-muted-foreground/50 hover:text-foreground"
                      >
                        <X className="h-2.5 w-2.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                <Input
                  placeholder="Enter attendee name…"
                  value={newAttendee}
                  onChange={e => setNewAttendee(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && addAttendee()}
                  className="h-9 text-sm"
                />
                <Button
                  type="button"
                  onClick={addAttendee}
                  variant="outline"
                  size="sm"
                  className="h-9 gap-1 px-3 text-xs"
                >
                  <Plus className="h-3 w-3" />
                  Add
                </Button>
              </div>
            </div>

            {/* Assigned Users - Who can see this event */}
            <FieldRow icon={Users} label="Share With">
              <Input
                placeholder="Enter emails to share this event (auto-includes you)"
                value={formData.assignedEmails}
                onChange={e => setFormData(prev => ({ ...prev, assignedEmails: e.target.value }))}
                className="h-9 text-sm"
              />
              <p className="text-xs text-muted-foreground mt-1">Comma-separated email addresses. You are automatically included.</p>
            </FieldRow>

            {/* Description */}
            <div>
              <SectionLabel>Description</SectionLabel>
              <Textarea
                placeholder="Add notes or agenda…"
                value={formData.description}
                onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                className="resize-none text-sm"
              />
            </div>

              {saveError && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {saveError}
                </div>
              )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t bg-muted/10 px-6 py-4">
          <div>
            {event && onDelete && (
              <Button
                type="button"
                onClick={handleDelete}
                variant="ghost"
                size="sm"
                className="h-8 gap-1.5 px-3 text-xs text-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Delete
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button
              type="button"
              onClick={() => onOpenChange(false)}
              variant="outline"
              size="sm"
              className="h-8 px-4 text-xs"
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSave}
              size="sm"
              disabled={isSaving || !formData.title.trim()}
              className="h-8 min-w-25 border border-border bg-foreground px-4 text-xs font-semibold text-background hover:opacity-90 dark:border-white dark:bg-white dark:text-black dark:hover:bg-white/90"
            >
              {isSaving ? "Saving…" : event ? "Update" : "Create Event"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>

    <Dialog open={showSuccessModal} onOpenChange={(open) => {
      setShowSuccessModal(open)
      if (!open) {
        window.location.reload()
      }
    }}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Event created</DialogTitle>
          <DialogDescription>
            Your event has been saved successfully.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end pt-4">
          <Button
            type="button"
            onClick={() => {
              setShowSuccessModal(false)
              window.location.reload()
            }}
          >
            OK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}