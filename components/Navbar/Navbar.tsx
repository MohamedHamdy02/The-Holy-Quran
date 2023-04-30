import { useThemeContext } from "@/Context/ThemeContext";
import React from "react";
import DarkLightMode from "../DarkLightMode/DarkLightMode";
import Link from "next/link";

const Navbar = () => {
  const { theme } = useThemeContext();

  return (
    <div
      className={`${
        theme === "light" ? "bg-[#343a40] text-white" : "bg-white text-black"
      } flex justify-between items-center md:px-28 px-8 py-4 fixed top-0 left-0  w-full z-10`}
    >
      <div>
        <Link href="/">
          <h1 className="text-xl">The Holy Quran</h1>
        </Link>
      </div>
      <DarkLightMode />
    </div>
  );
};

export default Navbar;
