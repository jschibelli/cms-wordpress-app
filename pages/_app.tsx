import { AppProps } from "next/app";
import "../styles/index.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Implement a function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkModeValue = !darkMode;
    setDarkMode(newDarkModeValue);
    localStorage.setItem("darkMode", JSON.stringify(newDarkModeValue));
  };

  // Apply the dark mode class to the body tag
  useEffect(() => {
    const storedThemePreference = localStorage.getItem("darkMode");
    if (storedThemePreference !== null) {
      setDarkMode(JSON.parse(storedThemePreference));
    }
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
