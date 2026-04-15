"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cardData = [
  {
    icon: "/clientcard1.png",
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    icon: "/clientcard2.png",
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
  {
    icon: "/clientcard3.png",
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments.",
  },
];

const Card = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
    className="bg-white p-10 rounded-2xl border border-gray-100 text-center flex flex-col items-center
                hover:border-green-200 transition-all duration-500 group"
  >
    <div className="relative mb-6">
      <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-500">
        <Image src={icon} alt={title} width={48} height={48} className="object-contain" />
      </div>
      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-100 rounded-lg -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-(--green-primary) transition-colors">
      {title}
    </h3>
    <p className="text-gray-500 leading-relaxed text-balance">
      {description}
    </p>
  </motion.div>
);

export default function ClientCardSection() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Manage your entire community <br /> in a single system
        </h2>
        <p className="text-gray-500 text-lg">Who is Nextcent suitable for?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {cardData.map((card, index) => (
          <Card
            key={index}
            index={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
