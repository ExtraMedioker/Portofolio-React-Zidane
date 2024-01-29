import { useEffect } from "react";
import profile from "./profile.jpg";
import Header from "./Components/Header.js";
import Hero from "./Components/Hero.js";
import About from "./Components/About.js";
import Featured from "./Components/Featured.js";
import Work from "./Components/Work.js"
import Contact from "./Components/Contact.js"
import "./styles/modern-normalize.css";
import "./styles/components/footer.css";
import "./styles/components/mobile-nav.css";
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

  const mobileNav = () => {
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
    mobileNav();
  }, []);

  return (
    <>
      <Header darkMode={darkMode} />
      {/* <!-- Mobile Navigation --> */}
      <div class="mobile-nav">
        <nav>
          <ul class="mobile-nav__menu">
            <li>
              <a class="mobile-nav__link" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="mobile-nav__link" href="#featured">
                Work
              </a>
            </li>
            <li>
              <a class="mobile-nav__link" href="#contact">
                Contact
              </a>
            </li>
            <li class="mobile-nav__link-line"></li>
            <li>
              <button
                aria-label="theme-toggle btn"
                id="theme-toggle"
                class="mobile-nav__sun"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                </svg>
              </button>
            </li>
            <li>
              <a class="mobile-nav__btn btn" href="#">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <!-- End of Mobile Navigation --> */}
      <main>
        <Hero img={profile} />
        <About />
        <Featured />
        <Work />
        <Contact />
      </main>
      <footer class="footer container section">
        <h3 class="footer__title">~ Medioker ~</h3>
      </footer>
    </>
  );
}

export default App;
