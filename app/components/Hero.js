"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value, suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest).toLocaleString() + suffix;
  });
  const ref = useRef(null);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      delay: 1.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl text-center px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-bold text-gray-800 leading-tight mb-4"
        >
          Social media <br />
          <span className="text-(--green-primary) relative inline-block">
            strategies
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute bottom-2 left-0 h-2 bg-green-100 -z-10"
            />
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-500 font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Learn effective social media marketing techniques to attract more
          clients and grow your audience with automated solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-(--green-primary) text-white text-xl font-bold py-4 px-10 rounded-xl hover:bg-(--green-secondary) transition-all transform hover:-translate-y-1 active:scale-95">
            Get Started
          </button>
          <button className="bg-white text-(--green-primary) border-2 border-green-100 text-xl font-bold py-4 px-10 rounded-xl hover:bg-green-50 transition-all transform hover:-translate-y-1 active:scale-95">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      {/* Stats Counter Area */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-20 flex gap-12 text-center"
      >
        <div>
          <p className="text-3xl font-bold text-gray-800">
            <Counter value={2} suffix="M+" />
          </p>
          <p className="text-gray-500 font-medium">Users</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-800">
            <Counter value={46} suffix="k+" />
          </p>
          <p className="text-gray-500 font-medium">Clubs</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-gray-800">
            <Counter value={1} suffix=".9M+" />
          </p>
          <p className="text-gray-500 font-medium">Events</p>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
