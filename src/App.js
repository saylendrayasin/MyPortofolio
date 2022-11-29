import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Portofolio from "./components/Portofolio";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isActivated, setIsActivated] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={`dark:text-white ${darkMode ? "dark" : ""}`}>
      <header
        className={
          navbar
            ? "navbar-fixed top-0 left-0 z-10 flex w-full items-center bg-transparent dark:bg-darkMode dark:text-white"
            : "absolute top-0 left-0 z-10 flex w-full items-center bg-transparent dark:bg-darkMode dark:text-white"
        }
      >
        <div className="container">
          <div className="relative flex items-center justify-between">
            <div className="px-4 dark:text-white">
              <a
                href="#home"
                className="block py-6 text-lg font-bold text-primary  "
              >
                saylendrayasin
              </a>
            </div>
            <div className="flex items-center px-4 ">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                onClick={() => setIsActivated(!isActivated)}
                className={
                  isActivated
                    ? "hamburger-active absolute right-4 block lg:hidden"
                    : "absolute right-4 block lg:hidden"
                }
              >
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out "></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
              </button>
              <nav
                id="nav-menu"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:bg-darkMode lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none 
              ${isActivated ? "block" : "hidden"}`}
              >
                <ul className="block  lg:flex">
                  <li className="group">
                    <a
                      href="#home"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Home
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      About Me
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="mx-8 flex py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="mt-3 flex items-center pl-8 lg:mt-0">
                    {darkMode ? (
                      <BsSun
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer text-2xl hover:text-primary"
                      />
                    ) : (
                      <BsFillMoonStarsFill
                        onClick={() => setDarkMode(!darkMode)}
                        className="cursor-pointer text-2xl hover:text-primary"
                      />
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {darkMode ? <Hero dark={true} /> : <Hero dark={false} />}

      <About />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
