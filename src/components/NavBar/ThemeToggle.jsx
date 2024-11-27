import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.setAttribute(
      "data-theme",
      newDarkMode ? "dark" : "light"
    );
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark rounded-full p-2 transition-colors duration-300 hover:text-blue-600"
    >
      {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </button>
  );
};

export default ThemeToggle;
