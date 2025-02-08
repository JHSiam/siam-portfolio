import React from "react";
import { FaLaptopCode, FaBrain, FaCoffee, FaGithub } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg mt-10" id="about">
      <h2 className="text-3xl font-bold text-purple-400 text-center mb-4">About Me</h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        Hello! I'm Jahid Hasan Siam, a passionate Full Stack Developer with a strong foundation in web technologies. My programming journey started with a curiosity for how websites work, and over time, I honed my skills in building scalable and user-friendly applications. I specialize in the MERN stack, crafting seamless user experiences with React, Node.js, Express, and MongoDB.
      </p>
      <div className="flex items-center space-x-3 mt-4">
        <FaLaptopCode className="text-purple-400" size={24} />
        <p className="text-lg text-gray-300 leading-relaxed">
          I enjoy working on complex challenges that require innovative solutions. Whether it's developing real-time applications, integrating AI models into web platforms, or optimizing performance, I thrive on pushing the boundaries of what's possible in web development.
        </p>
      </div>
      <div className="flex items-center space-x-3 mt-4">
        <FaBrain className="text-purple-400" size={24} />
        <p className="text-lg text-gray-300 leading-relaxed">
          Outside of coding, I love exploring new technologies, reading about AI advancements, and contributing to open-source projects. I’m always excited about learning and collaborating with other developers.
        </p>
      </div>
      <div className="flex items-center space-x-3 mt-4">
        <FaCoffee className="text-purple-400" size={24} />
        <p className="text-lg text-gray-300 leading-relaxed">
          When I'm not coding, you can find me enjoying a cup of coffee, gaming, or indulging in photography and sports.
        </p>
      </div>
      <div className="flex items-center space-x-3 mt-4">
        <FaGithub className="text-purple-400" size={24} />
        <p className="text-lg text-gray-300 leading-relaxed">
          I'm passionate about contributing to open-source projects. You can check out my work on <a href="https://github.com/JHSiam" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </div>
      <p className="text-lg text-gray-300 leading-relaxed mt-4">
        I believe in continuous learning and collaboration, and I'm always eager to connect with like-minded developers and tech enthusiasts. Let's build something amazing together!
      </p>
    </div>
  );
};

export default AboutMe;
