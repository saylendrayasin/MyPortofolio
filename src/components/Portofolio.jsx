import React from "react";
import musicplayer from "../images/musicplayer.png";
import plantcondition from "../images/plancondition.png";
import myrantang from "../images/myrantang.png";
import foodaholic from "../images/foodaholic.png";

function Portofolio() {
  return (
    <section
      id="portfolio"
      className="bg-slate-100 pt-36 pb-32 dark:bg-darkMode"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto mb-16 max-w-xl text-center">
            <h4 className="mb-2 text-lg font-semibold text-primary dark:text-white">
              Portfolio
            </h4>
            <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">
              My Project
            </h2>
            <p className="text-lg font-medium text-second dark:text-white">
              This is a project that I made in the past year, I focus on using
              JavaScript and Java in making each project and more specifically
              using the React framework and Java for android studio.
            </p>
          </div>
        </div>
        {/* Ukuran Gambar 600 x 320 */}
        <div className="flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={myrantang} alt="Landing Page" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              MyRantang
            </h3>
            <p className="text-base font-medium text-second dark:text-white">
              This is a project that I made to order and deliver food every
              month, there are various food choices ranging from meat, vegan, or
              diet food menus. There is also a feature to view flat outlets on
              maps. Made with React Native
            </p>
          </div>

          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={plantcondition} alt="Plant Condition" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              Plant Condition
            </h3>
            <p className="font-medium  text-second dark:text-white">
              Plant Condition is a project that I made to check the health of
              the garden and also monitor plant health. There is also a plant
              watering setting feature. Made with Java{" "}
            </p>
          </div>
          <div className="mb-12 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={musicplayer} alt="Music Player" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              Music Player
            </h3>
            <p className="text-base font-medium text-second dark:text-white">
              Music Player is a project to create a music media player by
              reading a list of music stored in local storage. Made with Java
            </p>
          </div>
          <div className="mb-1/2 p-4 md:w-1/2">
            <div className="overflow-hidden rounded-md shadow-md">
              <img src={foodaholic} alt="FoodAHolic" width="w-full" />
            </div>
            <h3 className="mt-5 mb-3 text-xl font-semibold text-dark dark:text-white">
              FoodAHolic
            </h3>
            <p className="text-base font-medium text-second dark:text-white">
              FoodAHolic is a project to be able to see a list of food recipes.
              There is also a chatbot feature for asking questions. Made with
              ReactJS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
