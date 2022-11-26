import { useState } from "react";
import React from "react";

function Navigation() {
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
    <header
      className={
        navbar
          ? "navbar-fixed bg-transparent top-0 left-0 w-full flex items-center z-10"
          : "absolute bg-transparent top-0 left-0 w-full flex items-center z-10"
      }
    >
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-primary block py-6 "
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
                  ? "block absolute right-4 hamburger-active"
                  : "block absolute right-4"
              }
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left "></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className={
                isActivated
                  ? "block absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full"
                  : "hidden"
              }
            >
              <ul className="block">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    About Me
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navigation;
