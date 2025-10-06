"use client";

import Image from "next/image";
import {
  FaChevronRight,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaLock,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const AboutPage = () => {
  return (
    <div
      id="about"
      className="py-20 bg-gray-900 z-50 text-gray-300 px-4 md:px-0 mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Typing Animation */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-400">
          <Typewriter
            words={[
              "Hi, I'm Mahabub Alam 👋",
              "Full-Stack Developer",
              "Full-Stack Enthusiast",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* Left Side: Profile Image */}
          <div className="relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <Image
              src="/Mahabub.jpeg"
              alt="Mahabub Alam"
              width={300}
              height={300}
              className="rounded-full border-blue-600 border shadow-blue-500"
              priority
            />
          </div>

          {/* Right Side: Content */}
          <div className="p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            {/* Education */}
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              Education
            </h2>
            <p className="text-lg leading-7 mb-6">
              <strong>BSc in Computer Science</strong>, Uttara University,
              Bangladesh - 2020
            </p>

            {/* Work Experience */}
            <h2 className="text-2xl font-semibold text-blue-400 mb-3">
              Work Experience
            </h2>
            <p className="text-lg leading-7 mb-6">
              Worked at <strong>Nabatat Contracting Company</strong>, Saudi
              Arabia, from March 2022 to Present
            </p>

            {/* Skills */}
            <div className="mt-5">
              <h2 className="font-bold text-2xl mb-5 text-blue-400">
                My Skills
              </h2>

              {/* Frontend */}
              <div className="flex items-start gap-2 mb-4">
                <h3 className="font-semibold flex items-center gap-1">
                  <FaHtml5 className="text-orange-500" /> Frontend:
                </h3>
                <div className="flex flex-wrap gap-2">
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <FaJs className="text-yellow-400" /> JavaScript
                  </p>
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <FaReact className="text-cyan-400" /> React.js
                  </p>
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <SiNextdotjs /> Next.js
                  </p>
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <SiTailwindcss className="text-blue-300" /> Tailwind CSS
                  </p>
                </div>
              </div>

              {/* Backend */}
              <div className="flex items-start gap-2 mb-4">
                <h3 className="font-semibold flex items-center gap-1">
                  <FaDatabase className="text-green-400" /> Backend:
                </h3>
                <div className="flex flex-wrap gap-2">
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <SiMongodb className="text-green-500" /> MongoDB
                  </p>
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <FaNodeJs className="text-green-600" /> Node.js
                  </p>
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <SiExpress /> Express.js
                  </p>
                </div>
              </div>

              {/* Authentication */}
              <div className="flex items-start gap-2 mb-4">
                <h3 className="font-semibold flex items-center gap-1">
                  <FaLock className="text-yellow-500" /> Authentication:
                </h3>
                <div className="flex flex-wrap gap-2">
                  <p className="bg-gray-900 text-gray-300 px-3 py-1 rounded-full flex items-center gap-1 cursor-pointer">
                    <SiFirebase className="text-orange-400" /> Firebase
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <button className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition text-white flex items-center gap-2 mt-5">
              Contact <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
