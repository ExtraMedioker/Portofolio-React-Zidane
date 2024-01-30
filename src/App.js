import React, { useEffect, useState } from "react";
import profile from "./profile.jpg";
import Header from "./Components/Header.js";
import MobileNav from "./Components/MobileNav.js";
import Hero from "./Components/Hero.js";
import About from "./Components/About.js";
import Featured from "./Components/Featured.js";
import Work from "./Components/Work.js"
import Contact from "./Components/Contact.js"
import Footer from "./Components/Footer.js";
import "./styles/modern-normalize.css";
import "./styles/utils.css";

function App() {
  // State for theme
  const [theme, setTheme] = useState("dark-mode"); // Set the default theme

  useEffect(() => {
    // Retrieve theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Apply theme
    document.body.className = ""; // Clear existing classes
    document.body.classList.add(theme);
  }, [theme]);


  const toggleTheme = () => {
    // Toggle theme and update state
    const newTheme = theme === "dark-mode" ? "light-mode" : "dark-mode";
    setTheme(newTheme);

    // Save theme to localStorage
    localStorage.setItem("theme", newTheme);
  };

  const mobileNavi = () => {
    const headerBtn = document.querySelector(".header__bars");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileLinks = document.querySelectorAll(".mobile-nav__link");

    // State
    let isMobileNavOpen = false;

    headerBtn.addEventListener("click", () => {
      isMobileNavOpen = !isMobileNavOpen;
      if (isMobileNavOpen) {
        mobileNav.style.display = "flex";
        document.body.style.overflowY = "hidden";
      } else {
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
      }
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        isMobileNavOpen = false;
        mobileNav.style.display = "none";
        document.body.style.overflowY = "auto";
      });
    });
  };

  useEffect(() => {
    mobileNavi();
  }, []);

  return (
    <>
      <Header darkMode={toggleTheme} />
      <MobileNav darkMode={toggleTheme} />
      <main>
        <Hero img={profile} />
        <About />
        <Featured />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
