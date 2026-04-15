"use client";

import Link from "next/link";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Service", href: "#" },
    { name: "Feature", href: "#" },
    { name: "Product", href: "#" },
    { name: "Testimonial", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-28 py-4 ${
        scrolled ? "bg-white border-b border-gray-100 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <p className="text-3xl font-bold text-gray-800 tracking-tight">
            Nex<span className="text-(--green-primary)">cent</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-(--green-primary) font-medium transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/login"
            className="text-(--green-primary) font-semibold hover:text-(--green-secondary) transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-(--green-primary) text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-(--green-secondary) transition-all transform hover:-translate-y-0.5"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 p-2 focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenuFold size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white overflow-hidden mt-4 rounded-2xl border border-gray-100"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-gray-700 font-medium border-b border-gray-100 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <Link
                  href="/login"
                  className="text-center py-3 text-(--green-primary) font-semibold"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-center py-3 bg-(--green-primary) text-white rounded-xl font-semibold"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
