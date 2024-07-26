// src/components/AboutUs.js
import React from "react";

import healthCare from "../../assets/healthcare.jpg";
// const AboutUs = () => {
//   return (
//     <div className="flex items-center justify-center bg-gray-100 p-8">
//       <div className="bg-white rounded-lg shadow-lg flex overflow-hidden max-w-4xl">
//         <img
//           src="path/to/your/image.jpg"
//           alt="Healthcare professionals"
//           className="w-1/2 object-cover"
//         />
//         <div className="p-8 w-1/2">
//           <h2 className="text-3xl font-bold mb-4">About Us</h2>
//           <p className="text-gray-700 mb-4">
//             Discover our mission and commitment to healthcare excellence.
//           </p>
//           <p className="text-gray-700 mb-4">
//             We are dedicated to providing compassionate care and innovative
//             solutions to improve the health and well-being of our community.
//           </p>
//           <p className="text-gray-700 mb-4">
//             Our team of highly skilled professionals is committed to delivering
//             personalized care tailored to each patient's needs.
//           </p>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
//bg-white rounded-lg shadow-lg flex overflow-hidden max-w-4xl
// export default AboutUs;

const AboutUs = () => {
  return (
    <div className="flex  items-center justify-center p-8 bg-gray-100">
      <div className=" flex overflow-hidden rounded-lg  max-w-4xl">
        <img src={healthCare} alt="" className="w-1/2 object-cover" />
        <div className="p-8 w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            Discover our mission and commitment to healthcare excellence.
          </p>
          <p className="text-gray-700 mb-4">
            We are dedicated to providing compassionate care and innovative //
            solutions to improve the health and well-being of our community.
          </p>
          <p className="text-gray-700 mb-4">
            Our team of highly skilled professionals is committed to delivering
            // personalized care tailored to each patient's needs.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
