import React, { useEffect, useRef } from "react";
import pic from "./ProfilePic.jpg";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import ProjectsPage from "./ProjectsPage";

export default function Content({ blog }) {
  const blogNameRef = useRef(null);
  const blogTitleRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    // Function to change font size and color continuously
    const changeStyle = (elementRef) => {
      if (elementRef.current) {
        const colors = [
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#FF00FF",
          "#00FFFF",
          "#FFA500",
          "#008000",
          "#800080",
          "#808080",
        ]; // Add more colors if needed
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        elementRef.current.style.color = randomColor;

        setTimeout(() => {
          changeStyle(elementRef);
        }, 2500);
      }
    };

    const toggleVisibility = () => {
      if (projectRef.current) {
        const projectElement = projectRef.current;
        if (projectElement.style) {
          projectElement.style.opacity =
            projectElement.style.opacity === "0" ? "1" : "0";
        }
      }
    };

    changeStyle(blogNameRef);
    changeStyle(blogTitleRef);

    const intervalId = setInterval(() => {
      toggleVisibility();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="bg-white-400 p-6 md:p-8 rounded-lg mb-6" id="Home">
        <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 lg:p-6 transition-transform hover:transform-hover">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p
                ref={blogNameRef}
                className="mt-1  font-medium  text-6xl text-gray-600 transition-colors hover:text-green-500"
              >
                {blog.name}
              </p>
              <h3
                ref={blogTitleRef}
                className="text-4xl font-bold text-gray-900  transition-colors hover:text-green-500"
              >
                {blog.title}
              </h3>
            </div>

            <div className="md:ml-4 overflow-hidden">
              <img
                alt="Paul Clapton"
                src={pic}
                className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover shadow-sm transform-hover"
              />
            </div>
          </div>

          <div className="mt-4 mb-12">
            <p className=" text-lg text-gray-400 font-bold font-mono hover:font-mono hover:text-gray-200">
              {blog.content}
            </p>
          </div>
          <div
            ref={projectRef}
            className="mt-15 text-5xl text-blue-500 font-mono"
          >
            <p>{blog.project}</p>
          </div>
        </div>
      </div>
      <AboutMe />
      <ProjectsPage />
      <Contact />
    </>
  );
}
