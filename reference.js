// App.jsx
/*
import React, { useEffect, useState } from "react";
import "./App.scss";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Apply theme to <body> and update localStorage
  useEffect(() => {
    document.body.classList.toggle("darkmode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className="app">
      <h1>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}
  */
