import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";

const DesignationIntro = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-white p-8 rounded-lg shadow-lg mt-10 gap-10 md:gap-20">
      <img
        src="https://i.ibb.co.com/dsQG6x9W/photo-2025-02-05-16-37-27.jpg"
        alt="Profile"
        className="w-52 h-52 md:w-48 md:h-48 rounded-full border-4 border-purple-400 shadow-lg transform hover:scale-105 transition-transform duration-300"
      />
      <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-purple-400 flex justify-center md:justify-start">
          <TypeAnimation
            sequence={["Full Stack Developer", 2000, "Jahid Hasan Siam", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
        <p className="mt-3 text-gray-300 text-lg leading-relaxed">
          Passionate about building scalable web applications and enhancing user experiences with modern web technologies.
        </p>
        <div className="mt-5 flex justify-center md:justify-start">
          <button className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-600 transition duration-300">
            <FaDownload className="mr-2" /> Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesignationIntro;
