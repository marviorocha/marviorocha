import React from "react";

const Projects = () => {
  return (
    <section className="my-8">
      <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-700">
        Recents Projects
      </h1>

      <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>

        <div className="flex flex-wrap justify-center">
          <div className="w-3/4 md:w-3/12 rounded-md shadow-lg p-3 m-5">
            <img
              className="transition ease-in-out duration-500 transform  cursor-pointer opacity-75 hover:opacity-100  hover:-translate-y-3"
              src="https://loremflickr.com/600/600/brazil,rio"
              alt="Project 1"
            />
          </div>
          <div className="w-3/4 md:w-3/12 rounded-md shadow-lg p-3 m-5">
            <img
              className="transition ease-in-out duration-500 transform  cursor-pointer opacity-75 hover:opacity-100  hover:-translate-y-3"
              src="https://loremflickr.com/600/600/brazil,sao-paulo"
              alt="Project 1"
            />
          </div>

          <div className="w-3/4 md:w-3/12 rounded-md shadow-lg p-3 m-5">
            <img
              className="transition ease-in-out duration-200 transform  cursor-pointer opacity-75 hover:opacity-100  hover:-translate-y-3transition ease-in-out duration-500 transform  cursor-pointer opacity-75 hover:opacity-100  hover:-translate-y-1"
              src="https://loremflickr.com/600/600/brazil,curitiba"
              alt="Project 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
