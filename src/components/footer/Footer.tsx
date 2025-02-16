"use client";

import Link from "next/link";
import React from "react";
import { BiLogoFacebookCircle, BiLogoYoutube } from "react-icons/bi";

const socialLinks = [
  {
    href: "#",
    Icon: BiLogoFacebookCircle,
  },
  {
    href: "#",
    Icon: BiLogoYoutube,
  },
];

const firstLinks = [
  "Link One",
  "Link Two",
  "Link Three",
  "Link Four",
  "Link Five",
];

const secondLinks = [
  "Link Six",
  "Link Seven",
  "Link Eight",
  "Link Nine",
  "Link Ten",
];

function Footer() {
  return (
    <footer id="relume" className="bg-gray-50 px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-[4vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-20">
          {/* Left Section: Logo, Contact, and Social */}
          <div>
            <div className="mb-6 md:mb-8">
              <Link href="#">
                <h1 className="font-bold text-3xl">CDMC</h1>
              </Link>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-1 text-sm font-semibold">Address:</p>
              <p className="mb-5 text-sm md:mb-6">
              12811 Glen Rd, Gaithersburg, MD 20878
              </p>
              <p className="mb-1 text-sm font-semibold">Contact:</p>
              <Link
                href="tel:18001234567"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                (301) 836-2098
              </Link>
              <Link
                href="mailto:info@relume.io"
                className="block text-sm underline decoration-black underline-offset-1"
              >
                info@cdmc.io
              </Link>
            </div>
            <div className="grid grid-flow-col items-start justify-start gap-x-3">
              {socialLinks.map(({ href, Icon }, index) => (
                <Link key={index} href={href}>
                  <Icon className="text-2xl" />
                </Link>
              ))}
            </div>
          </div>
          {/* Right Section: Navigation Links */}
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 md:grid-cols-2 md:gap-x-8 md:gap-y-4">
            <ul>
              {firstLinks.map((linkText, index) => (
                <li key={index} className="py-2 text-sm font-semibold">
                  <Link href="#">{linkText}</Link>
                </li>
              ))}
            </ul>
            <ul>
              {secondLinks.map((linkText, index) => (
                <li key={index} className="py-2 text-sm font-semibold">
                  <Link href="#">{linkText}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8">
        <p className="mt-8 md:mt-0">© {new Date().getFullYear()} CDMC. All rights reserved.</p>
        <ul className="hidden md:grid md:grid-flow-col md:gap-x-6" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
