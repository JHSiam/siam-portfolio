import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaUser, FaCode, FaProjectDiagram, FaGraduationCap, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About", to: "about", icon: <FaUser /> },
    { name: "Projects", to: "projects", icon: <FaProjectDiagram /> },
    { name: "Skills", to: "skills", icon: <FaCode /> },
    { name: "Contact", to: "contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="bg-gray-900 text-white w-full z-10 shadow-md sticky top-0 sora-font">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-purple-400">Jahid Hasan Siam</h1>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer flex items-center space-x-2 hover:text-purple-400"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-purple-400">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4 space-y-4 text-center">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              className="block cursor-pointer flex items-center justify-center space-x-2 text-white hover:text-purple-400"
              onClick={() => setIsOpen(false)}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
