import React from "react";
import FooterBg from "../../assets/images/footer-bg.jpg";
 

const Lettalk = () => {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: "url(" + FooterBg + ")" }}
    >
      <div className="container mx-auto px-4 py-40">
        <div className="flex flex-col  justify-center items-center">
          <h1 className="my-2 text-4xl text-center font-bold leading-tight  text-blue-800">
          Let's talk
          </h1>
      
      <div className="w-full mb-4"><div className="h-1 mx-auto gradient w-48 opacity-25 my-0 py-0 rounded-t"></div></div>
            <h3 className="my-4 text-2xl leading-tight text-center  text-blue-700">
            See how we can collaborate, how I can help you!
            </h3>
        <a target="_blank" href="https://share.hsforms.com/1PRTecQnCQeuM9Nlj_-rQlA52a0d">
          <button  className="text-white uppercase font-bold px-6 rounded-lg bg-blue-700
           hover:bg-blue-500 transition duration-200 w-40 h-12 focus:outline-none">
            Contact us
          </button>
          </a>
        </div>
      </div>
    </section>
    
  );
};

export default Lettalk;
