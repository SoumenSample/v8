import { Calendar } from "./component/calender"

import { requireAuth } from "@/lib/auth"
import { connectToDatabase } from "@/lib/mongodb"
import Event from "@/lib/models/Event"
import User from "@/lib/models/User"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarProvider } from "@/components/ui/sidebar"

export const dynamic = "force-dynamic"

function normalizeValue(value: unknown) {
  return String(value || "").trim().toLowerCase()
}

function buildVisibleEventDates(filteredEvents: Array<{ date: Date }>) {
  const counts = new Map<string, number>()

  filteredEvents.forEach((event) => {
    const key = event.date.toISOString().split("T")[0]
    counts.set(key, (counts.get(key) || 0) + 1)
  })

  return Array.from(counts.entries()).map(([date, count]) => ({
    date: new Date(date),
    count,
  }))
}

export default async function CalendarPage() {
  const session = await requireAuth()
  const userEmail = normalizeValue(session.user.email)

  await connectToDatabase()
  const currentUserEmail = session.user.email
  const userModel = User as any
  const currentUser = await userModel.findOne({ email: session.user.email }).select("role").lean()

  const rawEvents = await Event.find().sort({ date: 1 }).lean()

  const events = rawEvents.map((event, index) => ({
    id: index + 1,
    title: event.title,
    date: new Date(event.date),
    time: event.time,
    duration: event.duration || "1 hour",
    type: event.type,
    attendees: Array.isArray(event.attendees) ? event.attendees : [],
    location: event.location || "",
    color: event.color || "bg-blue-500",
    description: event.description || "",
    assignedRoles: Array.isArray(event.assignedRoles) ? event.assignedRoles : [],
    assignedToEmails: Array.isArray(event.assignedToEmails) ? event.assignedToEmails : [],
  }))

  const visibleEvents = events.filter((event) => {
    const assignedEmails = (event.assignedToEmails || []).map(normalizeValue)
    const isVisible = assignedEmails.includes(userEmail)
    return isVisible
  })

  const visibleEventDates = buildVisibleEventDates(visibleEvents)

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-[#181818] p-2 text-foreground">
    <SidebarProvider className="rounded-2xl h-full">
      <div className="flex  w-full  rounded-3xl text-foreground">
        <AppSidebar
          role={currentUser?.role || "client"}
          user={{
            name: session.user.name || "User",
            email: session.user.email || "",
            avatar: "/logo2.png",
          }}
        />
        <div className="flex min-w-0 flex-1 flex-col">
          
          <main className="flex-1 w-full overflow-x-hidden overflow-y-auto no-scrollbar  rounded-b-2xl ">
            <SiteHeader
            title="Schedule"
            subtitle="Calendar"
            className="rounded-t-2xl bg-transparent"
            contentClassName="pl-0 pr-4 lg:pr-6 "
          />
          <div className="px-0 lg:px-0 py-0 lg:py-0 h-full flex flex-col ">
              <Calendar
                events={visibleEvents}
                eventDates={visibleEventDates}
                currentUserEmail={currentUserEmail}
              />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
    </div>
  )
}

// import { CalendarMain } from "./component/calender-unified"

// export default function CalendarPage() {
//   return (
//     <div className="px-4 lg:px-6">
//       <CalendarMain />
//     </div>
//   )
// }