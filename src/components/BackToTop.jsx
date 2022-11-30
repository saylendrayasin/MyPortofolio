import React from "react";
import { useState } from "react";

function BackToTop() {
  const [scroll, setScroll] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <a
      href="#home"
      className={`fixed bottom-4 right-4 z-[9999] h-14 w-14 items-center justify-center rounded-full bg-primary p-4 hover:animate-pulse ${
        scroll ? "flex" : "hidden"
      }`}
      id="to-top"
    >
      <span className="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2" />
    </a>
  );
}

export default BackToTop;
