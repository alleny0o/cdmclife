import Link from "next/link";
import { BiDonateHeart } from "react-icons/bi";

export const GivingButton = () => (
  <Link
    className="hidden md:flex items-center gap-2 py-2 px-4 text-xs lg:text-sm uppercase bg-buttonBlue text-softWhite font-medium rounded-md shadow-sm transition duration-200 hover:bg-hoverButtonBlue hover:shadow focus:outline-none focus:ring-1 focus:ring-sageGreen/50"
    aria-label="Giving"
    href="/giving"
  >
    <BiDonateHeart className="text-lg lg:text-xl" />
    Giving
  </Link>
);
