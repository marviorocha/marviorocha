import React from "react";
import Background from "../../assets/images/header-bg.jpg";
import ProfileImg from "../../assets/images/oficial-foto.png";

const Top = () => {
  
  return (
    <header
      className="bg-cover bg-center"
      style={{ backgroundImage: "url(" + Background + ")" }}
    >
      <div className="container mx-auto px-4 flex flex-wrap">
        <div className="w-3/4 py-12 md:py-32">
          <h2 className="text-lg md:text-2xl text-gray-700">Hi, my name is,</h2>
          <h1 className="text-2xl md:text-4xl text-gray-700 font-bold">Marvio Rocha</h1>
          <h2 className="text-xs md:text-2xl text-gray-700 font-semibold">
            I'm a Brazilian Ruby On Rails Developer with +3 years of
            experiencie.
          </h2>
        </div>
        <div className="w-1/4 py-24 md:py-32">
          <img className="object-contain md:h-40" src={ProfileImg} alt="Marvio Rocha" />
        </div>
      </div>
    </header>
  );
};

export default Top;
