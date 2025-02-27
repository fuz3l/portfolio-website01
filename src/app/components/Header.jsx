"use client";

import { FaHome, FaUser, FaBriefcase, FaBlog, FaPhone } from "react-icons/fa";

export default function Header() {
  return (
    <header className="ctm-bg text-white   fixed md:top-0   left-0 w-full  z-50">
      <div className="container mx-auto px-6 py-4 flex justify-center md:justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl text-center md:text-left font-bold">Fuzail Mansuri</h1>

        {/* Desktop Navigation */}
        <nav className="hidden  md:flex space-x-6">
          <a href="/" className="hover:text-black hover:bg-white p-2 duration-200 rounded-md">Home</a>
          <a href="/about" className="hover:text-black hover:bg-white p-2 duration-200 rounded-md">About</a>
          <a href="/projects" className="hover:text-black hover:bg-white p-2 duration-200 rounded-md">Projects</a>
          <a href="/blog" className="hover:text-black hover:bg-white p-2 duration-200 rounded-md">Blog</a>
          <a href="/contact" className="hover:text-black hover:bg-white p-2 duration-200 rounded-md">Contact</a>
        </nav>
      </div>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed  bottom-4 left-1/2 transform -translate-x-1/2 bg-black/30 rounded-full backdrop-blur-md w-[90%] max-w-sm text-white flex justify-around items-center py-3 px-4 shadow-lg">
        <a href="/" className="text-center flex flex-col items-center  rounded-md hover:text-gray-400">
          <FaHome className="text-xl" /> <span className="text-xs">Home</span>
        </a>
        <a href="/about" className="text-center flex flex-col items-center rounded-md hover:text-gray-400">
          <FaUser className="text-xl" /> <span className="text-xs">About</span>
        </a>
        <a href="/projects" className="text-center flex flex-col items-center rounded-md hover:text-gray-400">
          <FaBriefcase className="text-xl" /> <span className="text-xs">Projects</span>
        </a>
        <a href="/blog" className="text-center flex flex-col items-center rounded-md hover:text-gray-400">
          <FaBlog className="text-xl" /> <span className="text-xs">Blog</span>
        </a>
        <a href="/contact" className="text-center flex flex-col items-center rounded-md hover:text-gray-400">
          <FaPhone className="text-xl" /> <span className="text-xs">Contact</span>
        </a>
      </nav>
    </header>
  );
}
