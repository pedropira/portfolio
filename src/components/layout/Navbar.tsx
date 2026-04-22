"use client";

import { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre Mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Trayectoria", href: "#experience" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[var(--color-bg)]/80 backdrop-blur-[var(--glass-blur)] border-b border-[var(--glass-border)] py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold font-heading tracking-wider group">
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform transition-transform duration-300 group-hover:rotate-45">
            <rect x="25" y="25" width="50" height="50" rx="10" stroke="var(--color-accent)" strokeWidth="8"/>
            <path d="M40 60L50 40L60 60" stroke="var(--color-accent)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="mt-1">PEDRO<span className="text-[var(--color-accent)]">PIRA</span></span>
        </a>
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[var(--color-gray-light)] hover:text-[var(--color-accent)] transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Mobile menu button placeholder */}
      </div>
    </header>
  );
};
