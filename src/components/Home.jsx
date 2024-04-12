import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight, MdOutlineDownload } from "react-icons/md";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white hover:text-sky-500 duration-500 cursor-grab mt-10 sm:mt-10">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            I am passionate full stack web developer and UI/UX designer.
            Currently, I love to work on web application using MERN stack
            and designing user-friendly apps with Figma.
          </p>
        <div className="flex flex-row">
          <div>
            <Link
              to="Projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>  
          </div>

          <div className="mx-4">
          <button
              onClick={handleDownload}
              className="btn group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105 duration-500 cursor-pointer"
            >
              Download CV
             <span className="group-hover:rotate-90 duration-300"><MdOutlineDownload size={20} className="ml-1" /></span> 
            </button>
          </div>
          </div>
        </div>
      <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="max-w-sm rounded-full mx-0 w-80 hover:scale-105 duration-500 cursor-grabbing"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
