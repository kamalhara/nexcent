"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

function Footer() {
  const socialLinks = [
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
  ];

  const footerSections = [
    {
      title: "Company",
      links: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
    },
    {
      title: "Support",
      links: ["Help center", "Terms of service", "Legal", "Privacy policy", "Status"],
    },
  ];

  return (
    <footer className="bg-(--footer-bg) text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
        {/* Brand Section */}
        <div className="md:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-2"
          >
            <div className="bg-white p-1 rounded-lg">
               <Image src="/nexcent.png" alt="Nexcent" width={120} height={30} className="object-contain" />
            </div>
          </motion.div>
          
          <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
            Copyright © 2026 Nexcent Ltd. <br />
            All rights reserved. Dedicated to making community management seamless.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -4, backgroundColor: "#4caf4f" }}
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-lg transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links Sections */}
        {footerSections.map((section, idx) => (
          <div key={idx}>
            <h4 className="text-xl font-bold mb-6 text-white">{section.title}</h4>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-(--green-primary) transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-(--green-primary) transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Subscribe Section */}
        <div>
          <h4 className="text-xl font-bold mb-6 text-white">Stay up to date</h4>
          <p className="text-gray-400 text-sm mb-4">Join our newsletter and never miss an update.</p>
          <div className="relative group">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full pl-4 pr-12 py-3.5 bg-gray-700/50 border border-gray-600 rounded-xl text-white outline-none focus:border-(--green-primary) focus:bg-gray-700 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 aspect-square bg-(--green-primary) text-white rounded-lg flex items-center justify-center hover:bg-(--green-secondary) transition-all transform hover:scale-105 active:scale-95">
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
        Designed with ❤️ by Nexcent Team
      </div>
    </footer>
  );
}

export default Footer;
