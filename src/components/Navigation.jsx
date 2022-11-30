//This component move to App.js

// import { useState } from "react";
// import React from "react";

// function Navigation() {
//   const [navbar, setNavbar] = useState(false);
//   const [isActivated, setIsActivated] = useState(false);

//   const changeBackground = () => {
//     if (window.scrollY >= 1) {
//       setNavbar(true);
//     } else {
//       setNavbar(false);
//     }
//   };

//   window.addEventListener("scroll", changeBackground);

//   return (
//     <header
//       className={
//         navbar
//           ? "navbar-fixed top-0 left-0 z-10 flex w-full items-center bg-transparent"
//           : "absolute top-0 left-0 z-10 flex w-full items-center bg-transparent"
//       }
//     >
//       <div className="container">
//         <div className="relative flex items-center justify-between">
//           <div className="px-4">
//             <a
//               href="#home"
//               className="block py-6 text-lg font-bold text-primary "
//             >
//               saylendrayasin
//             </a>
//           </div>
//           <div className="flex items-center px-4 ">
//             <button
//               id="hamburger"
//               name="hamburger"
//               type="button"
//               onClick={() => setIsActivated(!isActivated)}
//               className={
//                 isActivated
//                   ? "hamburger-active absolute right-4 block lg:hidden"
//                   : "absolute right-4 block lg:hidden"
//               }
//             >
//               <span className="hamburger-line origin-top-left transition duration-300 ease-in-out "></span>
//               <span className="hamburger-line transition duration-300 ease-in-out"></span>
//               <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
//             </button>
//             <nav
//               id="nav-menu"
//               className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none
//               ${isActivated ? "block" : "hidden"}`}
//             >
//               <ul className="block lg:flex">
//                 <li className="group">
//                   <a
//                     href="#home"
//                     className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li className="group">
//                   <a
//                     href="#about"
//                     className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
//                   >
//                     About Me
//                   </a>
//                 </li>
//                 <li className="group">
//                   <a
//                     href="#portfolio"
//                     className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
//                   >
//                     Portfolio
//                   </a>
//                 </li>
//                 <li className="group">
//                   <a
//                     href="#contact"
//                     className="mx-8 flex py-2 text-base text-dark group-hover:text-primary"
//                   >
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
// export default Navigation;
