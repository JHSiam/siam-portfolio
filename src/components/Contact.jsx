import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg mt-10" id="contact">
      <h2 className="text-3xl font-bold text-purple-400 text-center mb-6">Contact Information</h2>
      <div className="text-center">
        <p className="text-lg text-gray-300 mb-4">
          Have any questions or want to collaborate? Feel free to get in touch!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
          <motion.a
            href="mailto:iamjhsiam@gmail.com"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 flex items-center gap-2 transition duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
          >
            <FaEnvelope size={20} />
            <span>Email: iamjhsiam@gmail.com</span>
          </motion.a>
          <motion.a
            href="tel:+8801643529569"
            className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 flex items-center gap-2 transition duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
          >
            <FaPhoneAlt size={20} />
            <span>Phone: +880 1643529569</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
