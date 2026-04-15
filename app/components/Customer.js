"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Customer() {
  const clientLogos = [
    "/client1.svg",
    "/client2.svg",
    "/client3.svg",
    "/client4.svg",
    "/client5.svg",
    "/client6.svg",
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-28 my-16 rounded-[4rem] mx-4 md:mx-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/3 flex justify-center relative"
        >
          <Image
            src="/tesla.png"
            alt="Tesla"
            width={400}
            height={400}
            className="object-contain"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-2/3"
        >
          <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed font-medium italic">
            &quot;Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
            sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
            Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
            molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
            molestie, nec molestie mi blandit.&quot;
          </p>
          
          <div className="mb-10">
            <h4 className="text-(--green-primary) font-black text-2xl mb-1">Tim Smith</h4>
            <p className="text-gray-400 font-semibold tracking-wide uppercase text-sm">
              British Dragon Boat Racing Association
            </p>
          </div>

          <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-gray-100">
            <div className="flex flex-wrap gap-6 items-center flex-1">
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, opacity: 1 }}
                  className="opacity-50 grayscale hover:grayscale-0 transition-all"
                >
                  <Image src={logo} width={40} height={40} alt="customer logo" />
                </motion.div>
              ))}
            </div>
            
            <Link
              href="#"
              className="text-(--green-primary) hover:text-(--green-secondary) font-black text-xl flex items-center gap-3 group transition-all"
            >
              Meet all customers
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Customer;
