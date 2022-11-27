import React from "react";

function Portofolio() {
  return (
    <section id="portfolio" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4">My Project</h2>
            <p className="font-medium text-md text-second">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>
        {/* Ukuran Gambar 600 x 320 */}
        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="#" alt="Project 1" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Project 1
            </h3>
            <p className="font-medium text-base text-second">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mb-12 p-4 md:1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="#" alt="Project 1" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Project 1
            </h3>
            <p className="font-medium text-base text-second">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mb-12 p-4 md:1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="#" alt="Project 1" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Project 1
            </h3>
            <p className="font-medium text-base text-second">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div className="mb-12 p-4 md:1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="#" alt="Project 1" width="w-full" />
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
              Project 1
            </h3>
            <p className="font-medium text-base text-second">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
