import React from "react";

const People = () => {
  return (
    <section className="my-8">
      <div className="container wx-2 mx-auto m-8">
        <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-700">
          Whats People Say
        </h1>

        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="flex  flex-wrap justify-center">
          
          <div className="w-10/12 md:w-1/4 shadow-lg rounded-lg mt-3 m-4 px-6 py-4 flex flex-col items-center">
            <img
              className="rounded-full transform scale-75"
              src="https://randomuser.me/api/portraits/men/46.jpg"
              alt=""
            />
            <p className="text-gray-700 leading-tight text-center my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex
              iure corporis voluptatibus at soluta.
            </p>
            <p className="font-bold text-blue-700">
                 Enrique Beck
            </p>
          </div>

          <div className="w-10/12 md:w-1/4  shadow-lg rounded-lg mt-3 m-4 px-6 py-4 flex flex-col items-center">
            <img
              className="rounded-full  transform scale-75"
              src="https://randomuser.me/api/portraits/men/48.jpg"
              alt=""
            />
            <p className="text-gray-700 leading-tight text-center my-2" >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex
              iure corporis voluptatibus at soluta.
            </p>
            <p className="font-bold text-blue-700">
                 Raymond Bishop
            </p>
          </div>
          <div className="w-10/12 md:w-1/4  shadow-lg rounded-lg mt-3 m-4 px-6 py-4 flex flex-col items-center">
            <img
              className="rounded-full   transform scale-75"
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt=""
            />
            <p className="text-gray-700 leading-tight text-center my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ex
              iure corporis voluptatibus at soluta.

            </p>
            <p className="font-bold text-blue-700">
            Lucille Jordan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
