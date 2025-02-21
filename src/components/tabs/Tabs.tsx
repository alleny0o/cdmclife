"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Container, Section } from "../layouts/Layouts"; // Import Container

type Tab = {
  title: string;
  content: React.ReactNode;
};

type TabProps = {
  tabs: Tab[];
  defaultTab?: number;
  maxWidth?: "max-w-5xl" | "max-w-7xl"; // Allow dynamic width selection
};

function Tabs({ tabs, defaultTab = 0, maxWidth = "max-w-7xl" }: TabProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Container className={maxWidth}>
        <div className="w-full flex flex-col items-center">
          {/* Mobile Tabs Dropdown */}
          <div className="w-full md:hidden" ref={dropdownRef}>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between bg-white px-4 py-3 text-base font-medium text-gray-900 border-b-2 border-gray-200 focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <span>Current Tab:</span>
                  <span className="font-semibold">{tabs[activeTab].title}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`
                absolute left-0 right-0 z-50 bg-white shadow-lg rounded-b-lg
                transition-all duration-200 ease-in-out overflow-hidden
                ${isDropdownOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
              `}
              >
                <div className="py-1">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveTab(index);
                        setIsDropdownOpen(false);
                      }}
                      className={`
                      w-full px-4 py-3 text-left transition-colors duration-150
                      ${activeTab === index ? "bg-gray-50 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-50"}
                      ${index !== tabs.length - 1 ? "border-b border-gray-100" : ""}
                    `}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden md:inline-flex items-center justify-center border-b border-gray-200">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`
                px-6 py-3 text-lg font-medium transition-all duration-200 ease-in-out relative
                ${activeTab === index ? "text-gray-900" : "text-gray-500 hover:text-gray-700"}
              `}
              >
                {tab.title}
                {/* Active Tab Indicator */}
                <div
                  className={`
                  absolute bottom-0 left-0 w-full h-0.5 transition-all duration-200 ease-in-out
                  ${activeTab === index ? "bg-gray-900" : "bg-transparent"}
                `}
                />
              </button>
            ))}
          </div>
        </div>
      </Container>

      {/* Tab Content */}
      <Section>
        <Container>
      <div className="w-full">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`
                transition-opacity duration-200 ease-in-out
                ${activeTab === index ? "opacity-100" : "opacity-0 hidden"}
              `}
          >
            {tab.content}
          </div>
        ))}
      </div>
      </Container>
      </Section>
    </>
  );
}

export default Tabs;
