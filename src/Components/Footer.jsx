import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../AddProvider/ThemeProvider";
import logoImage from "../../src/assets/donate.png";

export default function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`py-12 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-[#F2F2F2] text-gray-700"
        }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Website Logo */}
        <div className="flex flex-col md:flex-col items-center md:items-start mb-6 md:mb-0">
  <img
    src={logoImage}
    alt="Website Logo"
    className="w-20 lg:w-40 mb-2 md:mb-0 md:mr-4 border-2 border-primary rounded-xl"
  />
  <p
    className={`text-lg font-semibold ${theme === "dark" ? "text-white/75" : "text-gray-900"}`}
  >
    Crowdcube collective donations.
  </p>
</div>



        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
          <Link to="/" className="hover:text-purple-500 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-500 transition duration-300">
            About Us
          </Link>
          <Link to="/allCampaign" className="hover:text-purple-500 transition duration-300">
            Campaigns
          </Link>
        </div>

        {/* Social Media Links */}
        <div
          className={`flex space-x-6 mt-6 md:mt-0 ${theme === "dark" ? "text-white/90" : "text-gray-900"
            }`}
        >
          <a
            href="https://www.facebook.com/groups/252388829152378"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800 transition duration-300"
          >
            <i className="fab fa-linkedin-in text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">CrowedCub</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
