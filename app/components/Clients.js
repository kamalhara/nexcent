"use client";

import Image from "next/image";
import ClientCardSection from "./ClientCard";
import { motion } from "framer-motion";

const clientLogos = [
  "/client1.svg",
  "/client2.svg",
  "/client3.svg",
  "/client4.svg",
  "/client5.svg",
  "/client6.svg",
  "/client7.svg",
];

function Clients() {
  return (
    <div className="flex flex-col items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Our Clients</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          We have been working with some Fortune 500+ clients across the globe.
        </p>
      </motion.div>

      {/* Logos Scrolling-like Area */}
      <div className="w-full overflow-hidden mb-16 py-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center flex-wrap gap-8 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <Image src={logo} width={80} height={80} alt="Client Logo" className="object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full">
        <ClientCardSection />
      </div>
    </div>
  );
}

export default Clients;
