import React from "react";
import ProgressiveImg from "../../assets/images/progressive_app.jpg"
import Twitter from "./Twitter.js"
import BioHobby from "./BioHobby";
const About = () => {
  return (
    <section className="bg-white border-b-2 border-gray-300  py-8">

    <div className="container max-w-5xl mx-auto m-8">
      
      <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-700">
        About Marvio
      </h1>

      <div className="w-full mb-4"><div className="h-1 mx-auto gradient w-56 opacity-25 my-0 py-0 rounded-t"></div></div>

      <div className="flex flex-wrap">
        <div className="w-5/6 sm:w-1/2 p-3">
            <h1 className="text-3xl font-bold mb-3 text-gray-800">Objective</h1>
        <p className="leading-6 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officia
          eveniet voluptatum, sequi, impedit temporibus inventore vitae dolorem
          quia quisquam qui aut doloremque, error omnis cum
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit officia
          eveniet voluptatum, sequi, impedit temporibus inventore vitae dolorem
          quia quisquam qui aut doloremque, error omnis cum
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, amet!
        </p>
     
        </div>
        <div className="w-full sm:w-1/2 p-6">
            <img src={ProgressiveImg} alt="Progressive App"/>
            { <Twitter /> }
        </div>
      </div>
      { <BioHobby /> }
    </div>
    </section>
  );
};

export default About;
