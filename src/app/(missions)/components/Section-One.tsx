"use client";
import React from 'react';

function SectionOne() {
  return (
    <section className="h-full w-full max-w-5xl mx-auto text-left py-16 px-6">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-8 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Missions
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-600">
            Discover our mission work and the impact we’re making around the world.
          </p>
        </div>

        {/* Missions Information with subtle accent panels */}
        <div className="mb-12 space-y-6">
          <div className="p-6 border-l-4 border-gray-300 bg-gray-50">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our missions team is dedicated to making a meaningful impact both locally and globally. One of our most impactful initiatives is our yearly mission trip to Guatemala. During these trips, we partner with local communities to build essential infrastructure—such as homes and chicken pens—that provide shelter and support sustainable living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
