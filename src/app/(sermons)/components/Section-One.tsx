"use client";
import { useState } from "react";

function SectionOne() {
  const [activeTab, setActiveTab] = useState("english");

  return (
    <section className="min-h-screen w-full max-w-5xl mx-auto text-left py-16 px-6">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-8 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Ministries
          </h1>
          <p className="mt-3 text-base md:text-lg text-deepBlack">
            Select a ministry below to view sermon details.
          </p>
        </div>

        {/* Tab Switching */}
        <div className="flex space-x-4 border-b border-gray-200">
          <button
            className={`pb-2 transition-colors duration-300 text-lg font-medium ${
              activeTab === "english"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("english")}
          >
            English Ministry
          </button>
          <button
            className={`pb-2 transition-colors duration-300 text-lg font-medium ${
              activeTab === "korean"
                ? "text-gray-900 border-b-2 border-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveTab("korean")}
          >
            Korean Ministry
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === "english" ? (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                English Sermons
              </h2>
              <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
                Join us every <strong>Sunday at 11:00 AM</strong> for our English sermons.
              </p>
            </div>
          ) : (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Korean Sermons
              </h2>
              <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
                Join us every <strong>Sunday at 9:00 AM</strong> for our Korean sermons.
              </p>
            </div>
          )}
        </div>

        {/* Joint Sermons Information */}
        <div className="mt-8 p-4 border-l-4 border-gray-300 bg-gray-50">
          <p className="text-base md:text-lg text-gray-800">
            <strong>Joint Sermons:</strong> Every first Sunday of the month, we hold a joint sermon at <strong>11:00 AM</strong>. Please note that on these days, no Korean sermon will be held.
          </p>
        </div>

        {/* Sermon Image */}
        <div className="mt-12">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            alt="Sermon Visual"
            className="w-full rounded-md shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
