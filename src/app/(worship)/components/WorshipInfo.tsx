"use client";
import Image from "next/image";
import Link from "next/link";

function WorshipInfo() {
  return (
    <section className="min-h-screen w-full max-w-5xl mx-auto py-16 px-6">
      <div className="container mx-auto">
        {/* Title */}
        <div className="mb-8 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Worship Services</h1>
          <p className="mt-3 text-lg text-gray-700">Join us for meaningful worship and fellowship.</p>
        </div>

        {/* Worship Services Overview */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* English Worship */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">English Ministry</h2>
            <p className="mt-3 text-lg text-gray-700">
              Gather with us every <strong>Sunday at 11:00 AM</strong> for our English worship service.
            </p>
          </div>

          {/* Korean Worship */}
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">Korean Ministry</h2>
            <p className="mt-3 text-lg text-gray-700">
              Join us every <strong>Sunday at 9:00 AM</strong> for our Korean worship service.
            </p>
          </div>
        </div>

        {/* Joint Worship */}
        <div className="mt-8 p-6 border-l-4 border-gray-300 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-800">
            <strong>Joint Worship Service:</strong> On the first Sunday of every month, we gather as one community at{" "}
            <strong>11:00 AM</strong> for a combined service. <br />
            (No separate Korean worship on these days.)
          </p>

          {/* Button to Announcements */}
          <div className="mt-4">
            <Link
              href="/announcements"
              className="inline-block px-4 py-2 text-lg font-medium text-gray-900 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              See Next Joint Worship
            </Link>
          </div>
        </div>

        {/* Worship Image */}
        <div className="mt-12">
          <Image
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            alt="Worship Gathering"
            width={800}
            height={450}
            className="w-full rounded-lg shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default WorshipInfo;
