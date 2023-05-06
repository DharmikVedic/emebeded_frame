import React, { useEffect, useState } from "react";

export default function DarkModeSwitcher() {
  const [localtheme, setloclatheme] = useState("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const d = localStorage.getItem("theme");
      if (d) {
        setloclatheme(d);
        document.documentElement.classList.add(d);
      }
    }
  }, []);

  const handleTheme = (e) => {
    const { checked } = e.target;
    if (checked) {
      setloclatheme("dark");
      localStorage.theme = "dark";
    } else {
      setloclatheme("light");
      localStorage.theme = "light";
    }
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <div className="">
        <label
          htmlFor="toggle-example"
          className="flex items-center cursor-pointer relative "
        >
          <input
            checked={localtheme === "dark"}
            onChange={handleTheme}
            type="checkbox"
            id="toggle-example"
            className="sr-only switcher "
          />
          <div className="toggle-bg bg-zinc-100 border-2 border-gray-200 h-6 w-11 rounded-full" />
        </label>
      </div>
    </>
  );
}
