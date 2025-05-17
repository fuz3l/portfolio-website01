"use client";

import { useState, useEffect } from "react";
import { 
  HomeIcon, 
  UserCircleIcon, 
  BriefcaseIcon, 
  DocumentTextIcon, 
  ChatBubbleLeftRightIcon 
} from "@heroicons/react/24/outline";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-center md:justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl text-center md:text-left font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fadeInUp">
          Fuzail Mansuri
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {[
            { href: "/", label: "Home", icon: HomeIcon },
            { href: "/about", label: "About", icon: UserCircleIcon },
            { href: "/projects", label: "Projects", icon: BriefcaseIcon },
            { href: "/blog", label: "Blog", icon: DocumentTextIcon },
            { href: "/contact", label: "Contact", icon: ChatBubbleLeftRightIcon },
          ].map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-primary/10 transition-all duration-200"
            >
              <item.icon className="w-5 h-5 group-hover:text-primary transition-colors duration-200" />
              <span className="group-hover:text-primary transition-colors duration-200">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Bottom Navbar */}
      <nav className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 glass-effect w-[90%] max-w-sm flex justify-around items-center py-3 px-4">
        {[
          { href: "/", label: "Home", icon: HomeIcon },
          { href: "/about", label: "About", icon: UserCircleIcon },
          { href: "/projects", label: "Projects", icon: BriefcaseIcon },
          { href: "/blog", label: "Blog", icon: DocumentTextIcon },
          { href: "/contact", label: "Contact", icon: ChatBubbleLeftRightIcon },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="group flex flex-col items-center space-y-1 hover-lift"
          >
            <item.icon className="w-6 h-6 group-hover:text-primary transition-colors duration-200" />
            <span className="text-xs group-hover:text-primary transition-colors duration-200">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
}
