import { Container, Section } from "@/components/layouts/Layouts";
import { H2 } from "@/components/text/H2";
import React from "react";
import { Calendar, Clock } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { Announcements, Event } from "@/sanity/lib/interface";

async function getData() {
  const query = `*[_type == "announcements"] {
    _id,
    weekStart,
    weekEnd,
    events[] {
      _key,
      title,
      description,
      date,
      startTime,
      endTime,
    }
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

// Sample data for fallback
const sampleAnnouncements = {
  _id: "sample",
  weekStart: "2025-03-10",
  weekEnd: "2025-03-16",
  events: [
    {
      _key: "sample1",
      title: "Sample Event",
      description: "This is a sample event description",
      date: "2025-03-15",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
    },
  ],
};

async function AnnouncementsContent() {
  // Format date range with smart year display
  const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(`${start}T12:00:00Z`);
    const endDate = new Date(`${end}T12:00:00Z`);

    // Check if years are different
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();

    if (startYear !== endYear) {
      return `${startDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} - ${endDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
    } else {
      return `${startDate.toLocaleDateString("en-US", { month: "long", day: "numeric" })} - ${endDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`;
    }
  };

  // Format time range
  const formatTimeRange = (start: string | undefined, end: string | undefined) => {
    if (start && end) {
      return `${start} - ${end}`;
    } else if (start) {
      return start;
    } else if (end) {
      return end;
    }
    return null;
  };

  // Get data from Sanity
  const weeklyAnnouncements: Announcements = (await getData()) || sampleAnnouncements;

  return (
    <Section className="sm:px-6 min-h-screen">
      <Container className="py-20">
        <div className="w-full max-w-7xl mx-auto">
          <div className="mb-8 max-w-xl relative">
            <div className="h-px w-16 bg-dustyBlue absolute -top-4 left-0"></div>
            <H2 className="font-light tracking-tight">
              Weekly <span className="font-medium">Announcements</span>
            </H2>
            <div className="flex items-center gap-2 mt-2 text-stone-600">
              <Calendar size={20} />
              <span>{formatDateRange(weeklyAnnouncements.weekStart, weeklyAnnouncements.weekEnd)}</span>
            </div>
          </div>

          <div className="space-y-6">
            {weeklyAnnouncements.events.map((event: Event) => {
              console.log("Raw event date:", event.date);
              const fixedDate = new Date(`${event.date}T12:00:00Z`); // Ensures the correct date is displayed

              return (
                <div
                  key={event._key}
                  className="bg-white p-6 rounded-lg shadow-sm border border-stone-200 hover:border-stone-300 transition-colors"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg md:text-xl font-medium text-stone-800">{event.title}</h3>

                    {(event.date || event.startTime || event.endTime) && (
                      <div className="flex flex-wrap items-center gap-4 text-stone-600 text-sm md:text-base">
                        {event.date && (
                          <span>
                            {fixedDate.toLocaleDateString("en-US", {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        )}

                        {(event.startTime || event.endTime) && (
                          <div className="flex items-center gap-1.5 text-sm md:text-base">
                            <Clock size={16} className="text-stone-400" />
                            <span>{formatTimeRange(event.startTime, event.endTime)}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {event.description && (
                      <p className="text-stone-700 leading-relaxed text-sm md:text-base">{event.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AnnouncementsContent;
