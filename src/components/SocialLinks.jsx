import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold text-purple-400 mb-4">Connect with Me</h2>
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/JHSiam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jahid-hasan-siam/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition duration-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/IAmJHSiam"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition duration-300 text-2xl"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;