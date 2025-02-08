import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di"; // Import VS Code icon

const Skills = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg mt-10" id="skills">
      <h2 className="text-3xl font-bold text-purple-400 text-center mb-16">Skills</h2>
      
      <div className="space-y-10">
        {/* Frontend Skills */}
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-7 text-center">Frontend</h3>
          <div className="flex flex-col lg:flex-row justify-around items-center space-y-6 lg:space-x-6 lg:space-y-0">
            {[
              { icon: FaHtml5, color: "text-orange-500", label: "HTML" },
              { icon: SiTailwindcss, color: "text-blue-400", label: "Tailwind CSS" },
              { icon: FaCss3Alt, color: "text-blue-500", label: "CSS" },
              { icon: FaJs, color: "text-yellow-400", label: "JavaScript" },
              { icon: FaReact, color: "text-blue-600", label: "React.js" },
            ].map(({ icon: Icon, color, label }, index) => (
              <motion.div
                key={index}
                className="text-center"
                animate={{ rotate: [0, 40, -40, 0] }} // Swinging motion
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} // Slower animation
                whileHover={{ scale: 1.1 }}
              >
                <Icon size={40} className={`${color} mb-2`} />
                <p>{label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-7 text-center">Backend</h3>
          <div className="flex flex-col lg:flex-row justify-around items-center space-y-6 lg:space-x-6 lg:space-y-0">
            {[
              { icon: SiExpress, color: "text-gray-800", label: "Express.js" },
              { icon: FaNodeJs, color: "text-green-500", label: "Node.js" },
              { icon: SiMongodb, color: "text-green-700", label: "MongoDB" },
            ].map(({ icon: Icon, color, label }, index) => (
              <motion.div
                key={index}
                className="text-center"
                animate={{ rotate: [0, 40, -40, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} // Slower animation
                whileHover={{ scale: 1.1 }}
              >
                <Icon size={40} className={`${color} mb-2`} />
                <p>{label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-2 text-center">Tools</h3>
          <div className="flex flex-col lg:flex-row justify-around items-center space-y-6 lg:space-x-6 lg:space-y-0">
            {[
              { icon: FaGitAlt, color: "text-red-500", label: "Git" },
              { icon: DiVisualstudio, color: "text-blue-600", label: "VS Code" },
            ].map(({ icon: Icon, color, label }, index) => (
              <motion.div
                key={index}
                className="text-center"
                animate={{ rotate: [0, 40, -40, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} // Slower animation
                whileHover={{ scale: 1.1 }}
              >
                <Icon size={40} className={`${color} mb-2`} />
                <p>{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
