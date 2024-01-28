// AboutMe.js

import React, { useState, useEffect } from "react";
import H1 from "./pictures/Html1.png";
import C1 from "./pictures/Css1.png";
import J1 from "./pictures/Javascript1.png";
import T1 from "./pictures/Tailwind1.jpeg";
import R1 from "./pictures/React1.jpeg";
import CVDownloadButton from "./CVDownloadbutton";
import About from "./About.js"; // Import the ExperienceEducation component
import Advanceflex from "./Advanceflex.js";

const AboutMe = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    // Calculate the age based on the birth year (1997)
    const birthYear = 1997;
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;

    // Update the age state
    setAge(calculatedAge);

    // Update the age every second (optional)
    const intervalId = setInterval(() => {
      const updatedAge = new Date().getFullYear() - birthYear;
      setAge(updatedAge);
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  const images = [
    { image: H1, skill: "HTML5" },
    { image: C1, skill: "CSS3" },
    { image: J1, skill: "JavaScript (ES6+)" },
    { image: T1, skill: "Tailwind CSS" },
    { image: R1, skill: "React.js" },
  ];

  return (
    <>
      <div id="AboutMe" className="bg-green-300">
        <h1 className="ml-8 mt-4 text-white font-bold font-mono h-8 text-center text-5xl">
          DATA
        </h1>
        <div className="about-me-container  flex flex-col md:flex-row items-center md:divide-x md:divide-gray-300 p-8 justify-content: space-between">
          {/* Personal Information Section */}
          <div className="personal-info-section md:mr-8 w-full md:w-1/2 lg:max-w-md  p-6 border rounded-lg bg-green-300 shadow-md">
            <h2 className="text-2xl font-bold mb-2 text-center text-white">
              Personal
            </h2>
            {/* Updated wrapper for the sections with thick border and box shadow */}
            <div className="border-4 border-gray-500 rounded-lg p-4 shadow-md mb-4 end">
              <div id="sparko">
                <p className="text-lg text-gray-700 mb-4 font-mono hover:font-sans">
                  Hi, I'm Omobolarinwa Quadri, a passionate front-end developer
                  dedicated to creating engaging and user-friendly web
                  experiences.
                </p>
              </div>

              <div id="lighto">
                {/* Content for the lighto section (if any) */}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4" id="brighto">
              <div className="border-4 border-gray-500 rounded-lg  p-4 shadow-md mb-4">
                <p className="text-lg text-gray-600">
                  <span className="font-bold text-white">Age:</span> {age}
                </p>
                <p className="text-sm text-green-600">
                  <span className="font-bold text-white">Freelance:</span>{" "}
                  Available
                </p>
                <p className="text-sm text-green-600">
                  <span className="font-bold text-white">Remote:</span>{" "}
                  Available
                </p>
                <p className="text-sm text-green-600">
                  <span className="font-bold text-white">Hybrid:</span>{" "}
                  Available
                </p>
              </div>
              <div className="border-4 border-gray-500 rounded-lg p-2 shadow-md mb-4">
                <p className="text-sm text-green-600">
                  <span className="font-bold text-white">Phone:</span>{" "}
                  +2349058824643
                </p>
                <p className="text-sm text-green-600">
                  <span className="font-bold text-white">Nationality:</span>{" "}
                  Nigerian
                </p>
                <p className="text-sm text-green-600">
                  <span className="font-bold text-white">Languages:</span>{" "}
                  English
                </p>
              </div>
            </div>
            <div>
              {/* Your other portfolio content */}
              <CVDownloadButton />
            </div>
          </div>

          {/* Experience and Education Section */}
          <div className="experience-education-section w-full md:w-1/2 justify-center mt-10 mr-10 lg:max-w-md p-6 border rounded-lg bg-white shadow-md ml-20">
            {/* Include the ExperienceEducation component */}
            <About />
          </div>
        </div>
      </div>
      <Advanceflex />
    </>
  );
};

export default AboutMe;
