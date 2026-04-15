"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const blogPosts = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    image: "/blog1.png",
  },
  {
    title: "What are your responsibilities and how can you manage them?",
    image: "/blog2.png",
  },
  {
    title: "Revamping the Membership Model with Triathlon Australia",
    image: "/blog3.png",
  },
];

function CaringSection() {
  return (
    <section className="text-center py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          Caring is the new marketing
        </h2>
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community and
          read about how our partners are increasing their impact.
        </p>
      </motion.div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.image}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-col items-center group"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Overlay Info Card */}
            <div className="w-[85%] -mt-16 bg-white p-6 rounded-xl border border-gray-100 z-20 transform group-hover:-translate-y-2 transition-transform duration-500">
              <h3 className="text-gray-700 font-bold text-md md:text-lg mb-4 line-clamp-2">
                {post.title}
              </h3>
              <Link
                href="#"
                className="text-(--green-primary) font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all"
              >
                Read more
                <span className="text-xl">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-50 rounded-[3rem] py-20 px-6 mt-12 overflow-hidden relative"
      >
        <h2 className="text-3xl md:text-6xl font-black text-gray-800 max-w-4xl mx-auto mb-12 leading-tight">
          Empower your community with effortless management.
        </h2>
        <Link
          href="#"
          className="inline-block bg-(--green-primary) text-white text-xl font-bold py-5 px-12 rounded-2xl hover:bg-(--green-secondary) transition-all transform hover:-translate-y-1 active:scale-95"
        >
          Get a Demo →
        </Link>
      </motion.div>
    </section>
  );
}

export default CaringSection;
