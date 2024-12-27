import React, { useEffect, useState } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { CgSun } from "react-icons/cg";
import { TbSunOff } from "react-icons/tb";

const Header = () => {
  const [light, setLight] = useState(true);
  const [dark, setDark] = useState(false);

  const lightMode = () => {
    setDark(false);
    setLight(true);
    localStorage.setItem("theme", "auto");
    document.body.classList.remove("dark");
  };
  const darkMode = () => {
    setLight(false);
    setDark(true);
    localStorage.setItem("theme", "dark");
    document.body.classList.add("dark");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      setLight(false);
      document.body.classList.add("dark");
    } else {
      setDark(false);
      document.body.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="w-screen flex justify-center items-center h-14 bg-slate-300 dark:bg-gray-900 dark:border-b">
      <div className="flex w-[120px] border rounded-md">
        <div
          onClick={darkMode}
          className={`${
            dark ? "bg-amber-500" : ""
          } w-1/2  p-2 rounded-md flex justify-center items-center cursor-pointer`}
        >
          <CgSun className="w-7 h-7 text-slate-900" />
        </div>
        <div
          onClick={lightMode}
          className={`${
            light ? "bg-slate-500" : ""
          } w-1/2 p-2  rounded-md flex justify-center items-center cursor-pointer`}
        >
          <MdDarkMode className="w-7 h-7 text-slate-200" />
        </div>
      </div>
    </div>
  );
};

export default Header;
