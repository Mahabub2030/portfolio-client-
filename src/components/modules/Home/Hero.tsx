"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
// import your assets

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-max md:h-screen flex flex-col justify-center items-center text-white"
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
        }}
      />

      {/* Star effect background (optional, you can animate with CSS) */}
      <div className="absolute inset-0" id="stars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mt-20 md:mt-32 px-6 mx-auto flex flex-col lg:flex-row gap-12 justify-between items-center">
        {/* Left Side: Text */}
        <div className="md:space-y-6 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-6xl text-4xl font-extrabold tracking-tight"
          >
            <TypeAnimation
              sequence={[
                "Hi 👋, I am Mahabub Alam", // types this out
                2000, // wait 2 seconds
                "Web Developer", // then types this
                2000,
                "Full Stack Enthusiast", // then this
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity} // loops forever
              className="text-blue-400"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="md:text-2xl text-lg mt-4"
          >
            Web Developer | Full Stack Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="lg:w-[600px] text-sm text-gray-300 mt-4"
          >
            Full-stack learner, diving into Node.js, MongoDB, Express, and
            exploring Next.js for modern, server-side rendered apps. Passionate
            about building scalable, dynamic websites with a strong focus on
            performance.
          </motion.p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/blogs"
              className="px-6 py-3 rounded-lg border border-gray-400 hover:bg-blue-600 transition"
            >
              Explore Blogs
            </Link>
            <a
              href=""
              download
              className="px-6 py-3 flex items-center gap-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 border-2 border-blue-400 transition-all shadow-[0_0_10px_#33CCCC]"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-2xl mt-6 justify-center lg:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=100024013500308"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-400 transition" />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-blue-400 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahabub-alam1382312/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter className="hover:text-blue-400 transition" />
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0 }}
          className="relative"
        >
          <Image
            src="/Mahabub.jpeg"
            alt="Profile"
            width={400}
            height={400}
            className="rounded-full border-4 border-blue-600 shadow-[0_0_20px_#33CCCC]"
          />
        </motion.div>
      </div>
    </section>
  );
}
