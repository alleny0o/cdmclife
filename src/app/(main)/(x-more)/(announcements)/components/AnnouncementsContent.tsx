import { Container, Section } from '@/components/layouts/Layouts'
import { H2 } from '@/components/text/H2'
import React from 'react'
import { Calendar, Clock } from 'lucide-react'

interface Announcement {
  _id: string
  title: string
  description: string
  date?: string
  time?: string
  priority: number
}

interface WeeklyAnnouncements {
  weekStart: string
  weekEnd: string
  announcements: Announcement[]
}

// Sample data structure - this would come from Sanity CMS
const sampleAnnouncements: WeeklyAnnouncements = {
  weekStart: "2025-02-17",
  weekEnd: "2025-02-23",
  announcements: [
    {
      _id: "1",
      title: "Sunday Service",
      description: "Join us for worship at 10:00 AM in the main sanctuary.",
      date: "2025-02-23",
      time: "10:00 AM",
      priority: 1
    },
    {
      _id: "2",
      title: "Bible Study",
      description: "Wednesday evening Bible study focusing on the Book of Acts. All are welcome!",
      date: "2025-02-19",
      time: "7:00 PM",
      priority: 2
    }
  ]
}

function AnnouncementsContent({ weeklyAnnouncements = sampleAnnouncements }) {
  // Format date range
  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    return `${startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
  }

  return (
    <Section className="min-h-screen w-full bg-stone-50">
      <Container className="pt-14 pb-24">
        <div className="w-full max-w-5xl mx-auto">
          <div className="mb-8">
            <H2>Weekly Announcements</H2>
            <div className="flex items-center gap-2 mt-2 text-stone-600 font-serif">
              <Calendar size={20} />
              <span>{formatDateRange(weeklyAnnouncements.weekStart, weeklyAnnouncements.weekEnd)}</span>
            </div>
          </div>

          <div className="space-y-6">
            {weeklyAnnouncements.announcements.map((announcement) => (
              <div
                key={announcement._id}
                className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:border-stone-300 transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-medium text-stone-800">
                    {announcement.title}
                  </h3>
                  
                  {(announcement.date || announcement.time) && (
                    <div className="flex flex-wrap items-center gap-4 text-stone-600 text-sm md:text-base">
                      {announcement.date && (
                        <span>
                          {new Date(announcement.date).toLocaleDateString('en-US', { 
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      )}
                      {announcement.time && (
                        <div className="flex items-center gap-1.5 text-sm md:text-base">
                          <Clock size={16} className="text-stone-400" />
                          <span>{announcement.time}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <p className="text-stone-700 leading-relaxed text-sm md:text-base">
                    {announcement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default AnnouncementsContent