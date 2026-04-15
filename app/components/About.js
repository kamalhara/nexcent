"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:py-24 py-12 gap-16 max-w-7xl mx-auto px-4 overflow-hidden">
      {/* Image Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full md:w-1/2 flex justify-center group"
      >
        <div className="relative">
          <Image
            src="/about.png"
            alt="about"
            width={500}
            height={400}
            className="w-full h-auto object-contain relative z-10"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="absolute -top-4 -left-4 w-full h-full border-2 border-green-50 rounded-3xl -z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="md:w-1/2 text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
          The unseen of spending three years at <span className="text-(--green-primary)">Pixelgrade</span>
        </h2>
        <p className="text-gray-500 text-lg md:text-xl mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button className="bg-(--green-primary) hover:bg-(--green-secondary) text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
          Learn More
        </button>
      </motion.div>
    </div>
  );
}

export default About;
