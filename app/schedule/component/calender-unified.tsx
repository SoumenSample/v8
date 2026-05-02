"use client"

// import { useEffect, useState } from "react"
// import { 
//   ChevronLeft, 
//   ChevronRight, 
//   Calendar as CalendarIcon,
//   Clock,
//   MapPin,
//   Users,
//   Search,
//   Grid3X3,
//   List,
//   ChevronDown,
//   Menu,
//   Plus
// } from "lucide-react"
// import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay, startOfWeek, addDays } from "date-fns"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Badge } from "@/components/ui/badge"
// import { useNotification } from "@/hooks/useNotification"
// import { Calendar } from "@/components/ui/calendar"
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
// import { 
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger 
// } from "@/components/ui/dropdown-menu"
// import { 
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle
// } from "@/components/ui/dialog"
// import { cn } from "@/lib/utils"
// import { type CalendarEvent } from "../types"
// import { CalendarSidebar } from "./calender-sidebar"

// interface CalendarMainProps {
//   events?: CalendarEvent[]
//   eventDates?: Array<{ date: Date; count: number }>
//   onDeleteEvent?: (eventId: number) => void
//   currentUserEmail?: string
// }

// function getEventStartDate(event: CalendarEvent) {
//   const eventStart = new Date(event.date)
//   const timeMatch = String(event.time || "").trim().match(/^(\d{1,2}):(\d{2})\s*([AP]M)$/i)

//   if (timeMatch) {
//     let hours = Number(timeMatch[1]) % 12
//     if (timeMatch[3].toUpperCase() === "PM") hours += 12
//     if (timeMatch[3].toUpperCase() === "AM" && Number(timeMatch[1]) === 12) hours = 0
//     eventStart.setHours(hours, Number(timeMatch[2]), 0, 0)
//   }

//   return eventStart
// }

// function getEventReminderKey(event: CalendarEvent) {
//   return `${event.title}|${event.date instanceof Date ? event.date.toISOString() : String(event.date)}|${event.time}`
// }

// export function CalendarMain({ events, eventDates = [], onDeleteEvent, currentUserEmail }: CalendarMainProps) {
//   const notify = useNotification()
//   const [selectedDate, setSelectedDate] = useState<Date>(new Date())
//   const [currentDate, setCurrentDate] = useState(new Date())
//   const [viewMode, setViewMode] = useState<"month" | "week" | "day" | "list">("month")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [showEventDialog, setShowEventDialog] = useState(false)
//   const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false)
//   const [showCalendarSheet, setShowCalendarSheet] = useState(false)
//   const [eventsData, setEventsData] = useState<CalendarEvent[]>([])
//   const [editEvent, setEditEvent] = useState<CalendarEvent | null>(null)
//   const [showEditDialog, setShowEditDialog] = useState(false)
//   const [attendeesText, setAttendeesText] = useState("")
//   const [assignedEmails, setAssignedEmails] = useState<string[]>([])
//   const [emailInput, setEmailInput] = useState("")

//   useEffect(() => {
//     if (!editEvent) {
//       setAttendeesText("")
//       setAssignedEmails([])
//       setEmailInput("")
//       return
//     }

//     setAttendeesText(editEvent.attendees?.join(", ") || "")
//     setAssignedEmails(editEvent.assignedToEmails || [])
//   }, [editEvent])

//   const formatDateInput = (date: Date | string) => {
//     const parsedDate = date instanceof Date ? date : new Date(date)
//     if (Number.isNaN(parsedDate.getTime())) return ""
//     return format(parsedDate, "yyyy-MM-dd")
//   }

//   const parseEventDate = (value: any) => {
//     const date = value instanceof Date ? value : new Date(value)
//     return Number.isNaN(date.getTime()) ? null : date
//   }

//   const parseCommaSeparated = (value: string) =>
//     value
//       .split(",")
//       .map((item) => item.trim().toLowerCase())
//       .filter(Boolean)

//   const isValidEmail = (email: string) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
//   }

//   const addAssignedEmail = (value: string) => {
//     const email = value.trim().replace(/,+$/, "")
//     if (!email) return
//     if (!isValidEmail(email)) return

//     const normalized = email.toLowerCase()
//     const updated = Array.from(new Set([...assignedEmails, normalized]))
//     setAssignedEmails(updated)
//     setEditEvent((prev) => prev ? { ...prev, assignedToEmails: updated } : prev)
//     setEmailInput("")
//   }

//   const commitEmailInput = () => {
//     if (!emailInput) return
//     addAssignedEmail(emailInput)
//   }

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await fetch("/api/events")
//         const data = await res.json()

//         const eventArray = Array.isArray(data)
//           ? data
//           : data.events || data.data || []

//         const formatted = eventArray
//           .map((e: any) => ({
//             ...e,
//             id: e._id ?? e.id,
//             date: parseEventDate(e.date),
//             attendees: Array.isArray(e.attendees) ? e.attendees : [],
//             assignedToEmails: Array.isArray(e.assignedToEmails) ? e.assignedToEmails : [],
//           }))
//           .filter((event: any) => event.date !== null)

//         setEventsData(formatted)
//       } catch (err) {
//         console.error("Fetch error:", err)
//       }
//     }

//     fetchEvents()
//   }, [])

//   // ─── EMAIL-BASED VISIBILITY FILTER ───────────────────────────────────────────
//   // Rule:
//   //   • If an event has assignedToEmails with at least one entry,
//   //     only show it if the logged-in user's email is in that list.
//   //   • If assignedToEmails is empty / missing, hide it from everyone
//   //     UNLESS the event was created by the logged-in user (no restriction needed).
//   //   Adjust the logic below to match your exact business requirement.
//   // ─────────────────────────────────────────────────────────────────────────────
//   const visibleEvents = eventsData.filter((event) => {
//     const userEmail = currentUserEmail?.trim().toLowerCase()

//     // If there are assigned emails, only show to assigned users
//     if (
//       Array.isArray(event.assignedToEmails) &&
//       event.assignedToEmails.length > 0
//     ) {
//       return event.assignedToEmails.some(
//         (email) => email.trim().toLowerCase() === userEmail
//       )
//     }

//     // If no assignedToEmails, show to everyone (public / unassigned event)
//     return true
//   })

//   // Search filter applied on top of visibility filter
//   const filteredEvents = visibleEvents.filter((event) => {
//     const query = searchQuery.trim().toLowerCase()
//     if (!query) return true

//     return (
//       String(event.title || "").toLowerCase().includes(query) ||
//       String(event.location || "").toLowerCase().includes(query) ||
//       String(event.description || "").toLowerCase().includes(query) ||
//       (Array.isArray(event.attendees)
//         ? event.attendees.some((attendee) =>
//             String(attendee || "").toLowerCase().includes(query)
//           )
//         : false)
//     )
//   })

//   useEffect(() => {
//     if (!currentUserEmail || filteredEvents.length === 0) return
//     if (typeof window === "undefined") return

//     const storageKey = `schedule-reminders:${currentUserEmail.toLowerCase()}`

//     const readReminderKeys = () => {
//       try {
//         const stored = window.localStorage.getItem(storageKey)
//         const parsed = stored ? JSON.parse(stored) : []
//         return new Set(Array.isArray(parsed) ? parsed : [])
//       } catch {
//         return new Set<string>()
//       }
//     }

//     const writeReminderKeys = (keys: Set<string>) => {
//       window.localStorage.setItem(storageKey, JSON.stringify(Array.from(keys)))
//     }

//     const checkSoonEvents = () => {
//       const now = new Date()
//       const reminderKeys = readReminderKeys()
//       let hasChanges = false

//       filteredEvents.forEach((event) => {
//         const eventStart = getEventStartDate(event)
//         const diffMinutes = Math.floor((eventStart.getTime() - now.getTime()) / 60000)
//         const reminderKey = getEventReminderKey(event)

//         if (diffMinutes >= 0 && diffMinutes <= 10 && !reminderKeys.has(reminderKey)) {
//           notify.warning(
//             "Event starting soon",
//             `${event.title} starts in ${diffMinutes} minute${diffMinutes === 1 ? "" : "s"}.`,
//             false
//           )
//           reminderKeys.add(reminderKey)
//           hasChanges = true
//         }
//       })

//       if (hasChanges) {
//         writeReminderKeys(reminderKeys)
//       }
//     }

//     checkSoonEvents()
//     const intervalId = window.setInterval(checkSoonEvents, 60000)

//     return () => window.clearInterval(intervalId)
//   }, [currentUserEmail, filteredEvents, notify])

//   const monthStart = startOfMonth(currentDate)
//   const monthEnd = endOfMonth(currentDate)

//   const calendarStart = new Date(monthStart)
//   calendarStart.setDate(calendarStart.getDate() - monthStart.getDay())

//   const calendarEnd = new Date(monthEnd)
//   calendarEnd.setDate(calendarEnd.getDate() + (6 - monthEnd.getDay()))

//   const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

//   const getEventsForDay = (date: Date) => {
//     return filteredEvents.filter((event) => isSameDay(event.date, date))
//   }

//   const getWeekDays = () => {
//     const weekStart = startOfWeek(selectedDate, { weekStartsOn: 0 })
//     return Array.from({ length: 7 }, (_, index) => addDays(weekStart, index))
//   }

//   const getDayEvents = () => {
//     return filteredEvents.filter((event) => isSameDay(event.date, selectedDate))
//   }

//   const getUpcomingEvents = () => {
//     return filteredEvents
//       .filter((event) => event.date >= new Date())
//       .sort((a, b) => a.date.getTime() - b.date.getTime())
//   }

//   const navigateMonth = (direction: "prev" | "next") => {
//     setCurrentDate(direction === "prev" ? subMonths(currentDate, 1) : addMonths(currentDate, 1))
//   }

//   const goToToday = () => {
//     setCurrentDate(new Date())
//   }

//   const handleEventClick = (event: CalendarEvent) => {
//     setSelectedEvent(event)
//     setShowEventDialog(true)
//   }

//   const handleDateSelect = (date: Date) => {
//     setSelectedDate(date)
//   }

//   const renderMonthView = () => {
//     const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

//     return (
//       <div className="flex-1 bg-background text-foreground">
//         <div className="grid grid-cols-7 border-b">
//           {weekDays.map(day => (
//             <div key={day} className="p-4 text-center font-medium text-sm text-muted-foreground border-r last:border-r-0">
//               {day}
//             </div>
//           ))}
//         </div>

//         <div className="grid grid-cols-7 w-full flex-1">
//           {calendarDays.map((day) => {
//             const dayEvents = getEventsForDay(day)
//             const isCurrentMonth = isSameMonth(day, currentDate)
//             const isDayToday = isToday(day)
//             const isSelected = isSameDay(day, selectedDate)

//             return (
//               <div
//                 key={day.toISOString()}
//                 className={cn(
//                   "relative border-r border-b last:border-r-0 p-2 min-h-30 hover:bg-muted/50 cursor-pointer transition-colors bg-background text-foreground",
//                   !isCurrentMonth && "text-muted-foreground bg-muted/20 dark:bg-muted/10",
//                   isDayToday && "bg-blue-50 dark:bg-blue-900/20",
//                   isSelected && "bg-blue-100 dark:bg-blue-800/30"
//                 )}
//                 onClick={() => handleDateSelect(day)}
//               >
//                 <div className={cn(
//                   "text-sm font-medium mb-1 text-foreground",
//                   isDayToday && "text-blue-600 dark:text-blue-400"
//                 )}>
//                   {format(day, 'd')}
//                 </div>

//                 <div className="space-y-1">
//                   {dayEvents.slice(0, 3).map((event, idx) => (
//                     <div
//                       key={event.id ?? `${day.toISOString()}-${idx}`}
//                       className={cn(
//                         "text-xs px-2 py-1 rounded text-white cursor-pointer hover:opacity-80 transition-opacity truncate dark:text-white",
//                         event.color
//                       )}
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         handleEventClick(event)
//                       }}
//                     >
//                       {event.time} {event.title}
//                     </div>
//                   ))}
//                   {dayEvents.length > 3 && (
//                     <div className="text-xs text-muted-foreground px-2">
//                       +{dayEvents.length - 3} more
//                     </div>
//                   )}
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     )
//   }

//   const renderWeekView = () => {
//     const weekDays = getWeekDays()

//     return (
//       <div className="flex-1 bg-background text-foreground">
//         <div className="grid grid-cols-7 border-b">
//           {weekDays.map((day) => (
//             <div key={day.toISOString()} className="p-4 text-center font-medium text-sm text-muted-foreground border-r last:border-r-0">
//               {format(day, 'EEE d')}
//             </div>
//           ))}
//         </div>
//         <div className="grid grid-cols-7 min-h-96">
//           {weekDays.map((day) => {
//             const dayEvents = getEventsForDay(day)
//             return (
//               <div key={day.toISOString()} className="border-r border-b last:border-r-0 p-3 min-h-40">
//                 <div className="space-y-2">
//                   {dayEvents.length === 0 ? (
//                     <p className="text-xs text-muted-foreground">No events</p>
//                   ) : (
//                     dayEvents.map((event) => (
//                       <button
//                         key={event.id}
//                         type="button"
//                         onClick={() => handleEventClick(event)}
//                         className={cn("block w-full rounded-md px-2 py-1 text-left text-xs text-white truncate transition-opacity hover:opacity-80", event.color)}
//                       >
//                         {event.time} {event.title}
//                       </button>
//                     ))
//                   )}
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     )
//   }

//   const renderDayView = () => {
//     const dayEvents = getDayEvents()

//     return (
//       <div className="flex-1 p-4">
//         <div className="mb-4 flex items-center justify-between">
//           <div>
//             <p className="text-xs uppercase tracking-widest text-muted-foreground">Selected day</p>
//             <h3 className="text-lg font-semibold">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</h3>
//           </div>
//           <Button variant="outline" size="sm" onClick={() => setCurrentDate(selectedDate)}>
//             Focus month
//           </Button>
//         </div>
//         <div className="space-y-3">
//           {dayEvents.length === 0 ? (
//             <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
//               No events for this day
//             </div>
//           ) : (
//             dayEvents.map((event) => (
//               <button
//                 key={event.id}
//                 type="button"
//                 onClick={() => handleEventClick(event)}
//                 className={cn("block w-full rounded-lg border p-4 text-left transition-shadow hover:shadow-sm", event.color, "text-white")}
//               >
//                 <div className="flex items-center justify-between gap-3">
//                   <div>
//                     <p className="font-semibold">{event.title}</p>
//                     <p className="text-xs opacity-90">{event.time} • {event.duration}</p>
//                   </div>
//                   <span className="text-xs uppercase tracking-wide opacity-90">{event.type}</span>
//                 </div>
//               </button>
//             ))
//           )}
//         </div>
//       </div>
//     )
//   }

//   const renderListView = () => {
//     const upcomingEvents = getUpcomingEvents()

//     return (
//       <div className="flex-1 p-4">
//         <div className="space-y-3">
//           {upcomingEvents.length === 0 ? (
//             <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
//               No upcoming events
//             </div>
//           ) : (
//             upcomingEvents.map((event) => (
//               <button
//                 key={event.id}
//                 type="button"
//                 onClick={() => handleEventClick(event)}
//                 className="w-full rounded-lg border border-border bg-background p-4 text-left transition-shadow hover:shadow-sm"
//               >
//                 <div className="flex items-start justify-between gap-4">
//                   <div>
//                     <p className="font-medium">{event.title}</p>
//                     <p className="text-xs text-muted-foreground">{format(event.date, 'MMM d, yyyy')} • {event.time}</p>
//                     {event.location && <p className="mt-1 text-xs text-muted-foreground">{event.location}</p>}
//                   </div>
//                   <span className={cn("rounded-full px-2 py-0.5 text-xs text-white", event.color)}>{event.type}</span>
//                 </div>
//               </button>
//             ))
//           )}
//         </div>
//       </div>
//     )
//   }

//   const renderCurrentView = () => {
//     if (viewMode === "week") return renderWeekView()
//     if (viewMode === "day") return renderDayView()
//     if (viewMode === "list") return renderListView()
//     return renderMonthView()
//   }

//   return (
//     <div className="relative w-full overflow-x-hidden bg-background text-foreground dark:border-white/15">
//       <div className="flex min-h-200 w-full">
//         {/* Main Calendar Panel */}
//         <div className="flex-1 min-w-0">
//           {/* Calendar Toolbar */}
//           <div className="border-b border-border/60 bg-background px-4 py-3 text-foreground dark:border-white/15">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//                 {/* Mobile Menu Button */}
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   className="xl:hidden text-foreground"
//                   onClick={() => setShowCalendarSheet(true)}
//                 >
//                   <Menu className="h-4 w-4" />
//                 </Button>

//                 {/* Month Navigation */}
//                 <div className="flex items-center space-x-2">
//                   <Button variant="ghost" size="sm" onClick={() => navigateMonth("prev")}> 
//                     <ChevronLeft className="h-4 w-4 text-foreground" />
//                   </Button>
//                   <h2 className="text-lg font-semibold min-w-35 text-center text-foreground">
//                     {format(currentDate, 'MMMM yyyy')}
//                   </h2>
//                   <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")}> 
//                     <ChevronRight className="h-4 w-4 text-foreground" />
//                   </Button>
//                 </div>

//                 <Button variant="outline" size="sm" onClick={goToToday} className="text-foreground">
//                   Today
//                 </Button>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <div className="hidden sm:flex items-center space-x-2">
//                   <Input
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     placeholder="Search events..."
//                     className="h-9 w-56"
//                   />
//                 </div>

//                 {/* View Mode Toggle */}
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="outline" size="sm" className="text-foreground">
//                       <Grid3X3 className="h-4 w-4 mr-1" />
//                       {viewMode === "month" ? "Month" : viewMode === "week" ? "Week" : viewMode === "day" ? "Day" : "List"}
//                       <ChevronDown className="h-4 w-4 ml-1" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuItem onClick={() => setViewMode("month")}>
//                       <Grid3X3 className="h-4 w-4 mr-2" />
//                       Month
//                     </DropdownMenuItem>
//                     <DropdownMenuItem onClick={() => setViewMode("week")}>
//                       <List className="h-4 w-4 mr-2" />
//                       Week
//                     </DropdownMenuItem>
//                     <DropdownMenuItem onClick={() => setViewMode("day")}>
//                       <CalendarIcon className="h-4 w-4 mr-2" />
//                       Day
//                     </DropdownMenuItem>
//                     <DropdownMenuItem onClick={() => setViewMode("list")}>
//                       <List className="h-4 w-4 mr-2" />
//                       List
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>
//             </div>
//           </div>

//           {/* Calendar Content */}
//           {renderCurrentView()}
//         </div>
//       </div>

//       {/* Mobile/Tablet Sheet */}
//       <Sheet open={showCalendarSheet} onOpenChange={setShowCalendarSheet}>
//         <SheetContent side="left" className="w-80 p-0">
//           <SheetHeader className="p-4 pb-2">
//             <SheetTitle>Calendar</SheetTitle>
//             <SheetDescription>
//               Browse dates and manage your calendar events
//             </SheetDescription>
//           </SheetHeader>
//         </SheetContent>
//       </Sheet>

//       {/* Event Details Dialog */}
//       <Dialog open={showEventDialog} onOpenChange={setShowEventDialog}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>{selectedEvent?.title}</DialogTitle>
//             <DialogDescription>
//               Event details and information
//             </DialogDescription>
//           </DialogHeader>
//           {selectedEvent && (
//             <div className="space-y-4 pt-4">
//               <div className="space-y-1 rounded-lg border bg-muted/20 p-3">
//                 <div className="flex items-center justify-between gap-3">
//                   <p className="text-sm font-medium">{format(selectedEvent.date, 'EEEE, MMM d, yyyy')}</p>
//                   <Badge variant="secondary" className={cn("text-white dark:text-white", selectedEvent.color)}>
//                     {selectedEvent.type}
//                   </Badge>
//                 </div>
//                 <p className="text-xs text-muted-foreground">{selectedEvent.time} • {selectedEvent.duration}</p>
//               </div>

//               <div className="flex items-center space-x-2 text-sm">
//                 <Clock className="h-4 w-4 text-muted-foreground" />
//                 <span>{selectedEvent.time} • {selectedEvent.duration}</span>
//               </div>

//               {selectedEvent.location && (
//                 <div className="flex items-center space-x-2 text-sm">
//                   <MapPin className="h-4 w-4 text-muted-foreground" />
//                   <span>{selectedEvent.location}</span>
//                 </div>
//               )}

//               {selectedEvent.attendees.length > 0 && (
//                 <div className="space-y-2 text-sm">
//                   <div className="flex items-center gap-2">
//                     <Users className="h-4 w-4 text-muted-foreground" />
//                     <span className="text-muted-foreground">Attendees</span>
//                   </div>
//                   <div className="flex flex-wrap gap-2 pl-6">
//                     {selectedEvent.attendees.map((attendee, index) => (
//                       <Badge key={`${attendee}-${index}`} variant="secondary" className="rounded-full bg-muted text-foreground">
//                         {attendee}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {selectedEvent.description && (
//                 <div className="text-sm text-muted-foreground">
//                   {selectedEvent.description}
//                 </div>
//               )}

//               {!selectedEvent.description && !selectedEvent.location && selectedEvent.attendees.length === 0 && (!selectedEvent.assignedToEmails || selectedEvent.assignedToEmails.length === 0) && (
//                 <div className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
//                   No additional details were added for this event.
//                 </div>
//               )}

//               <div className="flex items-center justify-end gap-2 pt-2">
//                 <Button
//                   variant="outline"
//                   onClick={() => {
//                     setEditEvent(selectedEvent)
//                     setShowEditDialog(true)
//                   }}
//                 >
//                   Edit
//                 </Button>
//                 <Button
//                   type="button"
//                   variant="destructive"
//                   onClick={async () => {
//                     if (!selectedEvent?.id) return
//                     try {
//                       await fetch("/api/events", {
//                         method: "DELETE",
//                         headers: { "Content-Type": "application/json" },
//                         body: JSON.stringify({ id: selectedEvent.id }),
//                       })
//                       setEventsData(prev => prev.filter(e => e.id !== selectedEvent.id))
//                       setShowDeleteDialog(false)
//                       setShowEventDialog(false)
//                     } catch (err) {
//                       console.error("Delete failed:", err)
//                     }
//                   }}
//                 >
//                   Delete
//                 </Button>
//               </div>

//               {(selectedEvent.assignedToEmails?.length ?? 0) > 0 && (
//                 <div className="space-y-2">
//                   <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Shared with</p>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedEvent.assignedToEmails?.map((email) => (
//                       <Badge key={email} variant="outline" className="rounded-full">
//                         {email}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>

//       <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
//         <DialogContent className="sm:max-w-sm">
//           <DialogHeader>
//             <DialogTitle>Delete event?</DialogTitle>
//             <DialogDescription>
//               This will permanently remove the event from the calendar.
//             </DialogDescription>
//           </DialogHeader>
//           <div className="flex items-center justify-end gap-2 pt-4">
//             <Button type="button" variant="outline" onClick={() => setShowDeleteDialog(false)}>
//               Cancel
//             </Button>
//             <Button
//               type="button"
//               variant="destructive"
//               onClick={() => {
//                 if (selectedEvent?.id != null && onDeleteEvent) {
//                   onDeleteEvent(selectedEvent.id)
//                   setShowDeleteDialog(false)
//                   setShowEventDialog(false)
//                 }
//               }}
//             >
//               Delete
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>

//       {/* Edit Event Dialog */}
//       <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Edit Event</DialogTitle>
//           </DialogHeader>

//           {editEvent && (
//             <div className="space-y-4 overflow-y-auto h-100">
//               <div>
//                 <label className="mb-1 block text-sm font-medium text-muted-foreground">Title</label>
//                 <Input
//                   value={editEvent.title}
//                   onChange={(e) =>
//                     setEditEvent({ ...editEvent, title: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="grid gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-muted-foreground">Date</label>
//                   <Input
//                     type="date"
//                     value={formatDateInput(editEvent.date)}
//                     onChange={(e) =>
//                       setEditEvent({ ...editEvent, date: new Date(e.target.value) })
//                     }
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-muted-foreground">Time</label>
//                   <Input
//                     value={editEvent.time}
//                     onChange={(e) =>
//                       setEditEvent({ ...editEvent, time: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               <div className="grid gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-muted-foreground">Type</label>
//                   <select
//                     value={editEvent.type}
//                     onChange={(e) =>
//                       setEditEvent({ ...editEvent, type: e.target.value as CalendarEvent["type"] })
//                     }
//                     className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//                   >
//                     <option value="meeting">Meeting</option>
//                     <option value="event">Event</option>
//                     <option value="personal">Personal</option>
//                     <option value="task">Task</option>
//                     <option value="reminder">Reminder</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-muted-foreground">Duration</label>
//                   <select
//                     value={editEvent.duration}
//                     onChange={(e) =>
//                       setEditEvent({ ...editEvent, duration: e.target.value })
//                     }
//                     className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//                   >
//                     <option value="15 min">15 min</option>
//                     <option value="30 min">30 min</option>
//                     <option value="45 min">45 min</option>
//                     <option value="1 hour">1 hour</option>
//                     <option value="1.5 hours">1.5 hours</option>
//                     <option value="2 hours">2 hours</option>
//                     <option value="3 hours">3 hours</option>
//                     <option value="All day">All day</option>
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1 block text-sm font-medium text-muted-foreground">Location</label>
//                 <Input
//                   value={editEvent.location}
//                   onChange={(e) =>
//                     setEditEvent({ ...editEvent, location: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="mb-1 block text-sm font-medium text-muted-foreground">Attendees</label>
//                 <Input
//                   value={attendeesText}
//                   onChange={(e) => {
//                     const value = e.target.value
//                     setAttendeesText(value)
//                     setEditEvent({ ...editEvent, attendees: parseCommaSeparated(value) })
//                   }}
//                   placeholder="Enter comma-separated attendees"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1 block text-sm font-medium text-muted-foreground">Assigned emails</label>
//                 <div className="border rounded-lg p-2 flex flex-wrap gap-2">
//                   {assignedEmails.map((email, index) => (
//                     <div
//                       key={index}
//                       className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded flex items-center gap-1"
//                     >
//                       {email}
//                       <button
//                         type="button"
//                         onClick={() => {
//                           const updated = assignedEmails.filter((_, i) => i !== index)
//                           setAssignedEmails(updated)
//                           setEditEvent((prev) => prev ? { ...prev, assignedToEmails: updated } : prev)
//                         }}
//                         className="text-red-400 ml-1"
//                       >
//                         ×
//                       </button>
//                     </div>
//                   ))}
//                   <input
//                     type="email"
//                     value={emailInput}
//                     onChange={(e) => setEmailInput(e.target.value)}
//                     onBlur={commitEmailInput}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter" || e.key === ",") {
//                         e.preventDefault()
//                         addAssignedEmail(emailInput)
//                       }
//                     }}
//                     placeholder="Type email and press Enter"
//                     className="flex-1 min-w-[180px] outline-none bg-transparent text-sm"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1 block text-sm font-medium text-muted-foreground">Description</label>
//                 <Textarea
//                   value={editEvent.description || ""}
//                   onChange={(e) =>
//                     setEditEvent({ ...editEvent, description: e.target.value })
//                   }
//                   className="min-h-[120px]"
//                   placeholder="Add event details"
//                 />
//               </div>

//               <div className="flex items-center justify-end gap-2 pt-2">
//                 <Button type="button" variant="outline" onClick={() => setShowEditDialog(false)}>
//                   Cancel
//                 </Button>
//                 <Button
//                   onClick={async () => {
//                     try {
//                       const pendingEmail = emailInput.trim()
//                       const finalAssignedEmails = pendingEmail && isValidEmail(pendingEmail)
//                         ? Array.from(new Set([...assignedEmails, pendingEmail.toLowerCase()]))
//                         : assignedEmails

//                       const payload = editEvent
//                         ? { ...editEvent, assignedToEmails: finalAssignedEmails }
//                         : editEvent

//                       setAssignedEmails(finalAssignedEmails)
//                       setEmailInput("")

//                       const res = await fetch("/api/events", {
//                         method: "PUT",
//                         headers: { "Content-Type": "application/json" },
//                         body: JSON.stringify(payload),
//                       })

//                       const data = await res.json()

//                       setEventsData(prev =>
//                         prev.map(e =>
//                           e.id === editEvent.id ? data.event : e
//                         )
//                       )

//                       setShowEditDialog(false)
//                       setShowEventDialog(false)
//                     } catch (err) {
//                       console.error("Update failed:", err)
//                     }
//                   }}
//                 >
//                   Save
//                 </Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Users,
  Search,
  Grid3X3,
  List,
  ChevronDown,
  Menu,
  Plus
} from "lucide-react"
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay, startOfWeek, addDays } from "date-fns"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useNotification } from "@/hooks/useNotification"
import { Calendar } from "@/components/ui/calendar"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { type CalendarEvent } from "../types"
import { CalendarSidebar } from "./calender-sidebar"

interface CalendarMainProps {
  events?: CalendarEvent[]
  eventDates?: Array<{ date: Date; count: number }>
  onDeleteEvent?: (eventId: number) => void
  currentUserEmail?: string
}

function getEventStartDate(event: CalendarEvent) {
  const eventStart = new Date(event.date)
  const timeMatch = String(event.time || "").trim().match(/^(\d{1,2}):(\d{2})\s*([AP]M)$/i)

  if (timeMatch) {
    let hours = Number(timeMatch[1]) % 12
    if (timeMatch[3].toUpperCase() === "PM") hours += 12
    if (timeMatch[3].toUpperCase() === "AM" && Number(timeMatch[1]) === 12) hours = 0
    eventStart.setHours(hours, Number(timeMatch[2]), 0, 0)
  }

  return eventStart
}

function getEventReminderKey(event: CalendarEvent) {
  return `${event.title}|${event.date instanceof Date ? event.date.toISOString() : String(event.date)}|${event.time}`
}

export function CalendarMain({ events, eventDates = [], onDeleteEvent, currentUserEmail }: CalendarMainProps) {
  const notify = useNotification()
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [currentDate, setCurrentDate] = useState(new Date())
  const [viewMode, setViewMode] = useState<"month" | "week" | "day" | "list">("month")
  const [searchQuery, setSearchQuery] = useState("")
  const [showEventDialog, setShowEventDialog] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [showCalendarSheet, setShowCalendarSheet] = useState(false)
  const [eventsData, setEventsData] = useState<CalendarEvent[]>([])
  const [editEvent, setEditEvent] = useState<CalendarEvent | null>(null)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [attendeesText, setAttendeesText] = useState("")
const [assignedEmails, setAssignedEmails] = useState<string[]>([])
const [emailInput, setEmailInput] = useState("")

  useEffect(() => {
    if (!editEvent) {
      setAttendeesText("")
      setAssignedEmails([])
      setEmailInput("")
      return
    }

    setAttendeesText(editEvent.attendees?.join(", ") || "")
    setAssignedEmails(editEvent.assignedToEmails || [])
  }, [editEvent])

  const formatDateInput = (date: Date | string) => {
    const parsedDate = date instanceof Date ? date : new Date(date)
    if (Number.isNaN(parsedDate.getTime())) return ""
    return format(parsedDate, "yyyy-MM-dd")
  }

  const parseEventDate = (value: any) => {
    const date = value instanceof Date ? value : new Date(value)
    return Number.isNaN(date.getTime()) ? null : date
  }

  const parseCommaSeparated = (value: string) =>
    value
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean)

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  }

  const addAssignedEmail = (value: string) => {
    const email = value.trim().replace(/,+$/, "")
    if (!email) return
    if (!isValidEmail(email)) return

    const normalized = email.toLowerCase()
    const updated = Array.from(new Set([...assignedEmails, normalized]))
    setAssignedEmails(updated)
    setEditEvent((prev) => prev ? { ...prev, assignedToEmails: updated } : prev)
    setEmailInput("")
  }

  const commitEmailInput = () => {
    if (!emailInput) return
    addAssignedEmail(emailInput)
  }

  useEffect(() => {
  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/events")
      const data = await res.json()

      const eventArray = Array.isArray(data)
        ? data
        : data.events || data.data || []

      const formatted = eventArray
        .map((e: any) => ({
          ...e,
          id: e._id ?? e.id,
          date: parseEventDate(e.date),
          attendees: Array.isArray(e.attendees) ? e.attendees : [],
          assignedToEmails: Array.isArray(e.assignedToEmails) ? e.assignedToEmails : [],
        }))
        .filter((event: any) => event.date !== null)

      setEventsData(formatted)
    } catch (err) {
      console.error("Fetch error:", err)
    }
  }

  fetchEvents()
}, [])

  const filteredEvents = eventsData.filter((event) => {
    const query = searchQuery.trim().toLowerCase()
    if (!query) return true

    return (
      String(event.title || "").toLowerCase().includes(query) ||
      String(event.location || "").toLowerCase().includes(query) ||
      String(event.description || "").toLowerCase().includes(query) ||
      (Array.isArray(event.attendees)
        ? event.attendees.some((attendee) => String(attendee || "").toLowerCase().includes(query))
        : false)
    )
  })

  useEffect(() => {
    if (!currentUserEmail || filteredEvents.length === 0) return
    if (typeof window === "undefined") return

    const storageKey = `schedule-reminders:${currentUserEmail.toLowerCase()}`

    const readReminderKeys = () => {
      try {
        const stored = window.localStorage.getItem(storageKey)
        const parsed = stored ? JSON.parse(stored) : []
        return new Set(Array.isArray(parsed) ? parsed : [])
      } catch {
        return new Set<string>()
      }
    }

    const writeReminderKeys = (keys: Set<string>) => {
      window.localStorage.setItem(storageKey, JSON.stringify(Array.from(keys)))
    }

    const checkSoonEvents = () => {
      const now = new Date()
      const reminderKeys = readReminderKeys()
      let hasChanges = false

      filteredEvents.forEach((event) => {
        const eventStart = getEventStartDate(event)
        const diffMinutes = Math.floor((eventStart.getTime() - now.getTime()) / 60000)
        const reminderKey = getEventReminderKey(event)

        if (diffMinutes >= 0 && diffMinutes <= 10 && !reminderKeys.has(reminderKey)) {
          notify.warning(
            "Event starting soon",
            `${event.title} starts in ${diffMinutes} minute${diffMinutes === 1 ? "" : "s"}.`,
            false
          )
          reminderKeys.add(reminderKey)
          hasChanges = true
        }
      })

      if (hasChanges) {
        writeReminderKeys(reminderKeys)
      }
    }

    checkSoonEvents()
    const intervalId = window.setInterval(checkSoonEvents, 60000)

    return () => window.clearInterval(intervalId)
  }, [currentUserEmail, filteredEvents, notify])

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(currentDate)

  // Extend to show full weeks (including previous/next month days)
  const calendarStart = new Date(monthStart)
  calendarStart.setDate(calendarStart.getDate() - monthStart.getDay())
  
  const calendarEnd = new Date(monthEnd)
  calendarEnd.setDate(calendarEnd.getDate() + (6 - monthEnd.getDay()))
  
  const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd })

  const getEventsForDay = (date: Date) => {
    return filteredEvents.filter((event) => isSameDay(event.date, date))
  }

  const getWeekDays = () => {
    const weekStart = startOfWeek(selectedDate, { weekStartsOn: 0 })
    return Array.from({ length: 7 }, (_, index) => addDays(weekStart, index))
  }

  const getDayEvents = () => {
    return filteredEvents.filter((event) => isSameDay(event.date, selectedDate))
  }

  const getUpcomingEvents = () => {
    return filteredEvents
      .filter((event) => event.date >= new Date())
      .sort((a, b) => a.date.getTime() - b.date.getTime())
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate(direction === "prev" ? subMonths(currentDate, 1) : addMonths(currentDate, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event)
    setShowEventDialog(true)
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
  }

  const handleNewCalendar = () => {
    // In a real app, this would open a new calendar form
  }

  const handleNewEvent = () => {
    // In a real app, this would open event form
  }
 

  const renderMonthView = () => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return (
      <div className="flex-1 bg-background text-foreground">
        <div className="grid grid-cols-7 border-b">
          {weekDays.map(day => (
            <div key={day} className="p-4 text-center font-medium text-sm text-muted-foreground border-r last:border-r-0">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 w-full flex-1">
          {calendarDays.map((day) => {
            const dayEvents = getEventsForDay(day)
            const isCurrentMonth = isSameMonth(day, currentDate)
            const isDayToday = isToday(day)
            const isSelected = isSameDay(day, selectedDate)

            return (
              <div
                key={day.toISOString()}
                className={cn(
                  "relative border-r border-b last:border-r-0 p-2 min-h-30 hover:bg-muted/50 cursor-pointer transition-colors bg-background text-foreground",
                  !isCurrentMonth && "text-muted-foreground bg-muted/20 dark:bg-muted/10",
                  isDayToday && "bg-blue-50 dark:bg-blue-900/20",
                  isSelected && "bg-blue-100 dark:bg-blue-800/30"
                )}
                onClick={() => handleDateSelect(day)}
              >
                <div className={cn(
                  "text-sm font-medium mb-1 text-foreground",
                  isDayToday && "text-blue-600 dark:text-blue-400"
                )}>
                  {format(day, 'd')}
                </div>

                <div className="space-y-1">
                  {dayEvents.slice(0, 3).map((event, idx) => (
                    <div
                      key={event.id ?? `${day.toISOString()}-${idx}`}
                      className={cn(
                        "text-xs px-2 py-1 rounded text-white cursor-pointer hover:opacity-80 transition-opacity truncate dark:text-white",
                        event.color
                      )}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleEventClick(event)
                      }}
                    >
                      {event.time} {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 3 && (
                    <div className="text-xs text-muted-foreground px-2">
                      +{dayEvents.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderWeekView = () => {
    const weekDays = getWeekDays()

    return (
      <div className="flex-1 bg-background text-foreground">
        <div className="grid grid-cols-7 border-b">
          {weekDays.map((day) => (
            <div key={day.toISOString()} className="p-4 text-center font-medium text-sm text-muted-foreground border-r last:border-r-0">
              {format(day, 'EEE d')}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 min-h-96">
          {weekDays.map((day) => {
            const dayEvents = getEventsForDay(day)
            return (
              <div key={day.toISOString()} className="border-r border-b last:border-r-0 p-3 min-h-40">
                <div className="space-y-2">
                  {dayEvents.length === 0 ? (
                    <p className="text-xs text-muted-foreground">No events</p>
                  ) : (
                    dayEvents.map((event) => (
                      <button
                        key={event.id}
                        type="button"
                        onClick={() => handleEventClick(event)}
                        className={cn("block w-full rounded-md px-2 py-1 text-left text-xs text-white truncate transition-opacity hover:opacity-80", event.color)}
                      >
                        {event.time} {event.title}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const renderDayView = () => {
    const dayEvents = getDayEvents()

    return (
      <div className="flex-1 p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Selected day</p>
            <h3 className="text-lg font-semibold">{format(selectedDate, 'EEEE, MMMM d, yyyy')}</h3>
          </div>
          <Button variant="outline" size="sm" onClick={() => setCurrentDate(selectedDate)}>
            Focus month
          </Button>
        </div>
        <div className="space-y-3">
          {dayEvents.length === 0 ? (
            <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
              No events for this day
            </div>
          ) : (
            dayEvents.map((event) => (
              <button
                key={event.id}
                type="button"
                onClick={() => handleEventClick(event)}
                className={cn("block w-full rounded-lg border p-4 text-left transition-shadow hover:shadow-sm", event.color, "text-white")}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold">{event.title}</p>
                    <p className="text-xs opacity-90">{event.time} • {event.duration}</p>
                  </div>
                  <span className="text-xs uppercase tracking-wide opacity-90">{event.type}</span>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    )
  }

  const renderListView = () => {
    const upcomingEvents = getUpcomingEvents()

    return (
      <div className="flex-1 p-4">
        <div className="space-y-3">
          {upcomingEvents.length === 0 ? (
            <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
              No upcoming events
            </div>
          ) : (
            upcomingEvents.map((event) => (
              <button
                key={event.id}
                type="button"
                onClick={() => handleEventClick(event)}
                className="w-full rounded-lg border border-border bg-background p-4 text-left transition-shadow hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{format(event.date, 'MMM d, yyyy')} • {event.time}</p>
                    {event.location && <p className="mt-1 text-xs text-muted-foreground">{event.location}</p>}
                  </div>
                  <span className={cn("rounded-full px-2 py-0.5 text-xs text-white", event.color)}>{event.type}</span>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    )
  }

  const renderCurrentView = () => {
    if (viewMode === "week") return renderWeekView()
    if (viewMode === "day") return renderDayView()
    if (viewMode === "list") return renderListView()
    return renderMonthView()
  }

  return (
    <div className="relative w-full overflow-x-hidden   bg-background text-foreground dark:border-white/15">
      <div className="flex min-h-200 w-full">
        {/* Desktop Sidebar */}
        {/* <div className="hidden xl:block w-80 flex-shrink-0">
          {renderSidebar()}
        </div> */}
        
        {/* Main Calendar Panel */}
        <div className="flex-1 min-w-0">
          {/* Calendar Toolbar */}
          <div className="border-b border-border/60 bg-background px-4 py-3 text-foreground dark:border-white/15">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Mobile Menu Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="xl:hidden text-foreground"
                  onClick={() => setShowCalendarSheet(true)}
                >
                  <Menu className="h-4 w-4" />
                </Button>

                {/* Month Navigation */}
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={() => navigateMonth("prev")}> 
                    <ChevronLeft className="h-4 w-4 text-foreground" />
                  </Button>
                  <h2 className="text-lg font-semibold min-w-35 text-center text-foreground">
                    {format(currentDate, 'MMMM yyyy')}
                  </h2>
                  <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")}> 
                    <ChevronRight className="h-4 w-4 text-foreground" />
                  </Button>
                </div>

                <Button variant="outline" size="sm" onClick={goToToday} className="text-foreground">
                  Today
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <div className="hidden sm:flex items-center space-x-2">
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search events..."
                    className="h-9 w-56"
                  />
                </div>

                {/* View Mode Toggle */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="text-foreground">
                      <Grid3X3 className="h-4 w-4 mr-1" />
                      {viewMode === "month" ? "Month" : viewMode === "week" ? "Week" : viewMode === "day" ? "Day" : "List"}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setViewMode("month")}>
                      <Grid3X3 className="h-4 w-4 mr-2" />
                      Month
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setViewMode("week")}>
                      <List className="h-4 w-4 mr-2" />
                      Week
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setViewMode("day")}>
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Day
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setViewMode("list")}>
                      <List className="h-4 w-4 mr-2" />
                      List
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Calendar Content */}
          {renderCurrentView()}
        </div>
      </div>

      {/* Mobile/Tablet Sheet */}
      <Sheet open={showCalendarSheet} onOpenChange={setShowCalendarSheet}>
        <SheetContent side="left" className="w-80 p-0">
          <SheetHeader className="p-4 pb-2">
            <SheetTitle>Calendar</SheetTitle>
            <SheetDescription>
              Browse dates and manage your calendar events
            </SheetDescription>
          </SheetHeader>
          {/* {renderSidebar()} */}
        </SheetContent>
      </Sheet>

      {/* Event Details Dialog */}
      <Dialog open={showEventDialog} onOpenChange={setShowEventDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedEvent?.title}</DialogTitle>
            <DialogDescription>
              Event details and information
            </DialogDescription>
          </DialogHeader>
          {selectedEvent && (
            <div className="space-y-4 pt-4">
              <div className="space-y-1 rounded-lg border bg-muted/20 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium">{format(selectedEvent.date, 'EEEE, MMM d, yyyy')}</p>
                  <Badge variant="secondary" className={cn("text-white dark:text-white", selectedEvent.color)}>
                    {selectedEvent.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{selectedEvent.time} • {selectedEvent.duration}</p>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{selectedEvent.time} • {selectedEvent.duration}</span>
              </div>
              
              {selectedEvent.location && (
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedEvent.location}</span>
                </div>
              )}
              
              {selectedEvent.attendees.length > 0 && (
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Attendees</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-6">
                    {selectedEvent.attendees.map((attendee, index) => (
                      <Badge key={`${attendee}-${index}`} variant="secondary" className="rounded-full bg-muted text-foreground">
                        {attendee}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {selectedEvent.description && (
                <div className="text-sm text-muted-foreground">
                  {selectedEvent.description}
                </div>
              )}

              {!selectedEvent.description && !selectedEvent.location && selectedEvent.attendees.length === 0 && (!selectedEvent.assignedToEmails || selectedEvent.assignedToEmails.length === 0) && (
                <div className="rounded-lg border border-dashed p-4 text-sm text-muted-foreground">
                  No additional details were added for this event.
                </div>
              )}

              <div className="flex items-center justify-end gap-2 pt-2">
              <Button
  variant="outline"
  onClick={() => {
    setEditEvent(selectedEvent)
    setShowEditDialog(true)
  }}
>
  Edit
</Button>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={async () => {
                    console.log("hi");
                    console.log("selectedEvent:", selectedEvent);
                    console.log("selectedEvent.id:", selectedEvent?.id);
                    console.log(selectedEvent.description);
                    if (!selectedEvent?.id) {
                      console.log("No id, returning");
                      return;
                    }
                    console.log("hello");
                    try {
                      await fetch("/api/events", {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          id: selectedEvent.id
                        }),
                      });

                      // remove from UI instantly
                      setEventsData(prev =>
                        prev.filter(e => e.id !== selectedEvent.id)
                      );

                      setShowDeleteDialog(false);
                      setShowEventDialog(false);
                    } catch (err) {
                      console.error("Delete failed:", err);
                    }
                  }}
                >
                  Delete
                </Button>
              </div>

              {(selectedEvent.assignedToEmails?.length ?? 0) > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Shared with</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.assignedToEmails?.map((email) => (
                      <Badge key={email} variant="outline" className="rounded-full">
                        {email}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete event?</DialogTitle>
            <DialogDescription>
              This will permanently remove the event from the calendar.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setShowDeleteDialog(false)}>
              Cancel
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={() => {
                if (selectedEvent?.id != null && onDeleteEvent) {
                  onDeleteEvent(selectedEvent.id)
                  setShowDeleteDialog(false)
                  setShowEventDialog(false)
                }
              }}
            >
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
          </DialogHeader>

          {editEvent && (
            <div className="space-y-4 overflow-y-auto h-100">
              <div>
                <label className="mb-1 block text-sm font-medium text-muted-foreground">Title</label>
                <Input
                  value={editEvent.title}
                  onChange={(e) =>
                    setEditEvent({ ...editEvent, title: e.target.value })
                  }
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-muted-foreground">Date</label>
                  <Input
                    type="date"
                    value={formatDateInput(editEvent.date)}
                    onChange={(e) =>
                      setEditEvent({ ...editEvent, date: new Date(e.target.value) })
                    }
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-muted-foreground">Time</label>
                  <Input
                    value={editEvent.time}
                    onChange={(e) =>
                      setEditEvent({ ...editEvent, time: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-muted-foreground">Type</label>
                  <select
                    value={editEvent.type}
                    onChange={(e) =>
                      setEditEvent({ ...editEvent, type: e.target.value as CalendarEvent["type"] })
                    }
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="meeting">Meeting</option>
                    <option value="event">Event</option>
                    <option value="personal">Personal</option>
                    <option value="task">Task</option>
                    <option value="reminder">Reminder</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-muted-foreground">Duration</label>
                  <select
                    value={editEvent.duration}
                    onChange={(e) =>
                      setEditEvent({ ...editEvent, duration: e.target.value })
                    }
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="15 min">15 min</option>
                    <option value="30 min">30 min</option>
                    <option value="45 min">45 min</option>
                    <option value="1 hour">1 hour</option>
                    <option value="1.5 hours">1.5 hours</option>
                    <option value="2 hours">2 hours</option>
                    <option value="3 hours">3 hours</option>
                    <option value="All day">All day</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-muted-foreground">Location</label>
                <Input
                  value={editEvent.location}
                  onChange={(e) =>
                    setEditEvent({ ...editEvent, location: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-muted-foreground">Attendees</label>
                <Input
                  value={attendeesText}
                  onChange={(e) => {
                    const value = e.target.value
                    setAttendeesText(value)
                    setEditEvent({ ...editEvent, attendees: parseCommaSeparated(value) })
                  }}
                  placeholder="Enter comma-separated attendees"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-muted-foreground">Assigned emails</label>
                <div className="border rounded-lg p-2 flex flex-wrap gap-2">
                  {assignedEmails.map((email, index) => (
                    <div
                      key={index}
                      className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded flex items-center gap-1"
                    >
                      {email}
                      <button
                        type="button"
                        onClick={() => {
                          const updated = assignedEmails.filter((_, i) => i !== index)
                          setAssignedEmails(updated)
                          setEditEvent((prev) => prev ? { ...prev, assignedToEmails: updated } : prev)
                        }}
                        className="text-red-400 ml-1"
                      >
                        ×
                      </button>
                    </div>
                  ))}

                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    onBlur={commitEmailInput}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === ",") {
                        e.preventDefault()
                        addAssignedEmail(emailInput)
                      }
                    }}
                    placeholder="Type email and press Enter"
                    className="flex-1 min-w-[180px] outline-none bg-transparent text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-muted-foreground">Description</label>
                <Textarea
                  value={editEvent.description || ""}
                  onChange={(e) =>
                    setEditEvent({ ...editEvent, description: e.target.value })
                  }
                  className="min-h-[120px]"
                  placeholder="Add event details"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <Button type="button" variant="outline" onClick={() => setShowEditDialog(false)}>
                  Cancel
                </Button>
                <Button
                  onClick={async () => {
                    try {
                      const pendingEmail = emailInput.trim()
                      const finalAssignedEmails = pendingEmail && isValidEmail(pendingEmail)
                        ? Array.from(new Set([...assignedEmails, pendingEmail.toLowerCase()]))
                        : assignedEmails

                      const payload = editEvent
                        ? { ...editEvent, assignedToEmails: finalAssignedEmails }
                        : editEvent

                      setAssignedEmails(finalAssignedEmails)
                      setEmailInput("")

                      const res = await fetch("/api/events", {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload),
                      });

                      const data = await res.json();

                      setEventsData(prev =>
                        prev.map(e =>
                          e.id === editEvent.id ? data.event : e
                        )
                      );

                      setShowEditDialog(false);
                      setShowEventDialog(false);
                    } catch (err) {
                      console.error("Update failed:", err);
                    }
                  }}
                >
                  Save
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}