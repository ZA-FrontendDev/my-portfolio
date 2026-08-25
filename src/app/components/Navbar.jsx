"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.path.replace("#", ""));
    const observers = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-12 py-4 flex items-center justify-between max-w-7xl">
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="Zain Ahsan - Home"
        >
          <span className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-pink-custom to-purple-custom font-extrabold text-white text-lg shadow-lg shadow-pink-custom/20 group-hover:shadow-pink-custom/40 transition-shadow">
            Z
          </span>
          <span className="hidden sm:inline-block text-white font-semibold tracking-tight text-lg group-hover:text-pink-custom transition-colors">
            Zain<span className="text-pink-custom">.</span>
          </span>
        </Link>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-slate-200 hover:text-white hover:border-white/40 transition-all bg-white/5 backdrop-blur"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {navbarOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <div className="menu hidden md:block" id="navbar">
          <ul className="flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.path.replace("#", "");
              return (
                <li key={index}>
                  <NavLink
                    href={link.path}
                    title={link.title}
                    isActive={isActive}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <AnimatePresence>
        {navbarOpen && <MenuOverlay links={navLinks} setNavbarOpen={setNavbarOpen} />}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
