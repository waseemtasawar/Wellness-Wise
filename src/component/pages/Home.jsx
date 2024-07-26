import React from "react";
import healthCare from "../../assets/healthcare.jpg";
import Data from "../../Data.js";
import Testimonial from "./Testimonial.jsx";
import AboutUs from "./AboutUs.jsx";
const Home = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center bg-blue-400">
        <div className="text-center md:text-left md:mr-12 mb-6 md:mb-0 ">
          <h1 className="text-4xl md:text-5xl mt-5 antialiased font-sans font-bold text-white pb-5 ">
            Your Health, Our Priority
          </h1>
          <p className="text-base md:text-xl font-sans text-white">
            provide world-class heathcare solution with compassion and
            excellence
          </p>
          <button className="font-sans text-white bg-blue-700 p-2 mt-3 rounded-lg border-none hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600">
            Explore Services
          </button>
        </div>
        <div className=" justify-between items-center ">
          <img
            className="h-52 md:h-80 w-full md:w-auto p-8 my-8 object-cover rounded-full border-4 border-blue-500 shadow-lg "
            src={healthCare}
            alt="Heath Care"
          />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-10">
        <div className="flex flex-col items-center justify-between mb-8">
          <h1 className="sm:text-5xl text-4xl text-center font-sans font-bold pb-4">
            Our Services
          </h1>
          <p className="sm:font-xl text-center text-lg text-slate-400 pb-10 md:justify-center">
            we Provide a wide range of healthcare services which meet all your
            needs
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {Data.map((item) => (
            <Testimonial
              key={item.id}
              image={item.image.src}
              heading={item.heading}
              alt={item.image.alt}
              text={item.text}
            />
          ))}
        </div>
      </section>
      <AboutUs />
    </>
  );
};

export default Home;
