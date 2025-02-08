import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto text-center">
        <motion.h3
          className="text-2xl font-bold text-purple-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Let's Connect
        </motion.h3>
        <div className="flex justify-center gap-6 mb-6">
          {/* Social Media Icons */}
          <motion.a
            href="https://github.com/JHSiam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-purple-500 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jahid-hasan-siam/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-600 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="https://twitter.com/JHSiam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition duration-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter size={30} />
          </motion.a>
        </div>

        <p className="text-lg text-gray-400 mb-4">
          Feel free to reach out via email or check out my GitHub profile for more projects!
        </p>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Contact Info */}
          <a
            href="mailto:iamjhsiam@gmail.com"
            className="flex items-center text-gray-300 hover:text-purple-500 transition duration-300"
          >
            <FaEnvelope className="mr-2" />
            Email: iamjhsiam@gmail.com
          </a>
        </motion.div>

        <div className="mt-6 text-gray-400 text-sm">
          <p>© 2025 Jahid Hasan Siam. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
