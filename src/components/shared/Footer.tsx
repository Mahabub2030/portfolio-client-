import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-gray-900 text-white pt-12 pb-10">
      {/* Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 60%, #111111 40%, #0f172a 100%)",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          {/* Left: Branding */}
          <div>
            <h2 className="text-2xl font-bold mb-1 text-blue-400">
              Mahabub Alam
            </h2>
            <p className="text-sm text-gray-400">
              Full-Stack Web Developer | MERN & Next.js
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/mahabub-alam1382312/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Mahabub2030"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          © {currentYear} Mahabub Alam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
