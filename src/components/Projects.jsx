import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes, FaCogs, FaWrench, FaListUl } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const projectsData = [
    {
      name: "LearnToday",
      image: "https://i.ibb.co.com/rGzJ3FVn/Screenshot-206.png",
      viewDetails: "View More / Details",
      detailsPage: {
        techStack: ["React", "TailwindCSS", "DaisyUI", "Framer Motion", "Node.js", "Express.js", "MongoDB", "Firebase"],
        description: "A comprehensive platform designed for students, teachers, and administrators to manage classes, assignments, and progress effectively.",
        liveLink: "https://online-learning-df6bc.web.app/",
        githubRepo: "https://github.com/JHSiam/Learn-Today",
        challenges: [
          "Implementing role-based authentication for admins, teachers, and students.",
          "Ensuring seamless real-time progress tracking with charts.",
          "Managing dynamic class and assignment creation."
        ],
        improvements: [
          "Enhancing the UI for a better user experience.",
          "Implementing AI-based personalized learning recommendations.",
          "Adding a video conferencing feature for live classes."
        ]
      }
    },
    {
      name: "Join Marathon",
      image: "https://i.ibb.co.com/7JH1ycp3/Screenshot-2025-02-05-190922.png",
      viewDetails: "View More / Details",
      detailsPage: {
        techStack: ["React.js", "Tailwind CSS", "React Icons", "Node.js", "Express.js", "MongoDB", "Axios"],
        description: "A platform designed to explore, register, and participate in marathon events worldwide.",
        liveLink: "https://join-marathon.web.app/",
        githubRepo: "https://github.com/JHSiam/join-marathon-client-side",
        challenges: [
          "Ensuring real-time dynamic data fetching from the backend.",
          "Implementing efficient sorting and filtering mechanisms.",
          "Handling graceful error messages for failed API requests."
        ],
        improvements: [
          "Adding a user dashboard to track past and upcoming marathons.",
          "Implementing social features for runners to connect.",
          "Integrating a payment gateway for premium marathon events."
        ]
      }
    },
    {
      name: "Gadget E-commerce",
      image: "https://i.ibb.co.com/NdP3B4ZP/Screenshot-207.png",
      viewDetails: "View More / Details",
      detailsPage: {
        techStack: ["React.js", "React Router DOM", "Context API"],
        description: "A single-page e-commerce application that allows users to browse, filter, and purchase gadgets.",
        liveLink: "https://672b63416f640942acb05925--kaleidoscopic-phoenix-9a950e.netlify.app/",
        githubRepo: "https://github.com/JHSiam/garden-heaven",
        challenges: [
          "Implementing a responsive and user-friendly shopping experience.",
          "Managing global state efficiently using Context API.",
          "Optimizing product sorting and filtering for better performance."
        ],
        improvements: [
          "Adding user authentication for a personalized shopping experience.",
          "Integrating a payment gateway for real transactions.",
          "Enhancing the UI with animations and a dark mode option."
        ]
      }
    }
  ];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg mt-10" id="projects">
      <h2 className="text-3xl font-bold text-purple-400 text-center mb-6">Projects</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-md mb-3" />
            <h3 className="text-xl font-bold text-purple-300">{project.name}</h3>
            <button 
              className="mt-3 text-white transition btn bg-purple-400 hover:bg-purple-300"
              onClick={() => setSelectedProject(project)}
            >
              ViewDetails
            </button>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50">
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-2xl text-white relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              className="absolute top-3 right-3 text-red-400 hover:text-red-500 transition"
              onClick={() => setSelectedProject(null)}
            >
              <IoMdClose size={24} />
            </button>

            <h3 className="text-2xl font-bold text-purple-400 flex items-center">
              <MdComputer className="mr-2 text-blue-400" />
              {selectedProject.name}
            </h3>
            <p className="mt-2 text-gray-300">{selectedProject.detailsPage.description}</p>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-purple-300 flex items-center">
                <FaCogs className="mr-2 text-yellow-400" />
                Tech Stack:
              </h4>
              <ul className="flex flex-wrap gap-2 mt-1">
                {selectedProject.detailsPage.techStack.map((tech, idx) => (
                  <li key={idx} className="bg-purple-500 px-3 py-1 rounded-lg text-sm">{tech}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-purple-300 flex items-center">
                <FaListUl className="mr-2 text-green-400" />
                Challenges:
              </h4>
              <ul className="list-disc pl-5 text-gray-300">
                {selectedProject.detailsPage.challenges.map((challenge, idx) => (
                  <li key={idx}>{challenge}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-purple-300 flex items-center">
                <FaWrench className="mr-2 text-blue-400" />
                Improvements:
              </h4>
              <ul className="list-disc pl-5 text-gray-300">
                {selectedProject.detailsPage.improvements.map((improvement, idx) => (
                  <li key={idx}>{improvement}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 mt-4">
              <a href={selectedProject.detailsPage.liveLink} target="_blank" rel="noopener noreferrer"
                 className="bg-blue-500 flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                <FaExternalLinkAlt className="mr-2" /> Live Demo
              </a>
              <a href={selectedProject.detailsPage.githubRepo} target="_blank" rel="noopener noreferrer"
                 className="bg-gray-600 flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 transition">
                <FaGithub className="mr-2" /> GitHub Repo
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Projects;
