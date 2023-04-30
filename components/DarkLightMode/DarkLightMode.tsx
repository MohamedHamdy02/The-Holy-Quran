import { useThemeContext } from "@/Context/ThemeContext";
import React from "react";
import ReactSwitch from "react-switch";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";

const DarkLightMode = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div>
      <ReactSwitch
        onChange={toggleTheme}
        checked={theme === "light"}
        onColor="#0000D1"
        className="react-switch"
        uncheckedIcon={
          <div className="text-white text-xl flex justify-center items-center h-full">
            {theme === "light" ? <MdOutlineLightMode /> : <CiDark />}
          </div>
        }
        uncheckedHandleIcon={
          <div className="flex justify-center items-center h-full text-xl">
            {theme === "light" ? <CiDark /> : <MdOutlineLightMode />}
          </div>
        }
        checkedIcon={
          <div className="text-white text-xl flex justify-center items-center h-full">
            {theme === "light" ? <MdOutlineLightMode /> : <CiDark />}
          </div>
        }
        checkedHandleIcon={
          <div className="text-xl flex justify-center items-center h-full text-black">
            {theme === "dark" ? <MdOutlineLightMode /> : <CiDark />}
          </div>
        }
      />
    </div>
  );
};

export default DarkLightMode;
