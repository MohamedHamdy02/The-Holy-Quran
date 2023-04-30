import { useThemeContext } from "@/Context/ThemeContext";
import React from "react";
import ReactSwitch from "react-switch";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

const DarkLightMode = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div suppressHydrationWarning={true} className="">
      <ReactSwitch
        suppressHydrationWarning={true}
        onChange={toggleTheme}
        checked={theme === "light"}
        onColor="#0000D1"
        className="react-switch"
        uncheckedIcon={
          <div
            suppressHydrationWarning={true}
            className="text-white text-xl flex justify-center items-center h-full"
          >
            {theme === "light" ? (
              <span suppressHydrationWarning={true}>
                <MdOutlineLightMode />
              </span>
            ) : (
              <span suppressHydrationWarning={true}>
                <CiDark />
              </span>
            )}
          </div>
        }
        uncheckedHandleIcon={
          <div
            suppressHydrationWarning={true}
            className="flex justify-center items-center h-full text-xl"
          >
            {theme === "light" ? (
              <span suppressHydrationWarning={true}>
                <CiDark />
              </span>
            ) : (
              <span suppressHydrationWarning={true}>
                <MdOutlineLightMode />
              </span>
            )}
          </div>
        }
        checkedIcon={
          <div
            suppressHydrationWarning={true}
            className="text-white text-xl flex justify-center items-center h-full"
          >
            {theme === "light" ? (
              <span suppressHydrationWarning={true}>
                <MdOutlineLightMode />
              </span>
            ) : (
              <span suppressHydrationWarning={true}>
                <CiDark />
              </span>
            )}
          </div>
        }
        checkedHandleIcon={
          <div
            suppressHydrationWarning={true}
            className="text-xl flex justify-center items-center h-full text-black"
          >
            {theme === "dark" ? (
              <span suppressHydrationWarning={true}>
                <MdOutlineLightMode />
              </span>
            ) : (
              <span suppressHydrationWarning={true}>
                <CiDark />
              </span>
            )}
          </div>
        }
      />
    </div>
  );
};

export default DarkLightMode;
