import Link from "next/link";

export const ContactButton = () => (
  <Link
    className="hidden md:block py-2 px-4 text-sm uppercase bg-buttonBlue text-softWhite font-medium rounded-md shadow-sm transition duration-200 hover:bg-hoverButtonBlue hover:shadow focus:outline-none focus:ring-1 focus:ring-sageGreen/50"
    aria-label="Contact Us"
    href="/contact-us"
  >
    Contact
  </Link>
);