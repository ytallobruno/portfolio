import React, { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Inicializar com preferência do sistema se não houver localStorage
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) {
        return saved === "true";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  // Aplicar tema
  const applyTheme = useCallback((isDark) => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    applyTheme(darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode, applyTheme]);

  // Escutar mudanças na preferência do sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (localStorage.getItem("darkMode") === null) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);

  return (
    <button
      onClick={toggleDarkMode}
      className="group relative rounded-full p-2 transition-all duration-300 hover:scale-110 hover:bg-[var(--transparency-color)] "
      aria-label={`Mudar para tema ${darkMode ? "claro" : "escuro"}`}
      title={`Mudar para tema ${darkMode ? "claro" : "escuro"}`}
    >
      <div className="relative h-6 w-6">
        <Sun
          className={`absolute h-6 w-6 transition-all duration-300 ${
            darkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"
          } text-[var(--text-color)] group-hover:text-blue-500`}
        />
        <Moon
          className={`absolute h-6 w-6 transition-all duration-300 ${
            darkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"
          } text-[var(--text-color)] group-hover:text-blue-500`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
