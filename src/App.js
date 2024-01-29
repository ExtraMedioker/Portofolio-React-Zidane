import { useEffect } from "react";
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
  useEffect(() => {
    // Retrieve theme from localStorage
    const theme = localStorage.getItem("theme");

    // Apply theme
    if (theme) {
      document.body.classList.add(theme);
    }
  }, []); // Run this effect only once on mount

  const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll("#theme-toggle");

    // Handlers
    const handleThemeToggle = () => {
      document.body.classList.toggle("light-mode");
      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light-mode");
      } else {
        localStorage.removeItem("theme");
        document.body.removeAttribute("class");
      }
    };

    // Events
    themeToggleBtns.forEach((btn) =>
      btn.addEventListener("click", handleThemeToggle)
    );
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
      <Header darkMode={darkMode} />
      <MobileNav darkMode={darkMode} />
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
