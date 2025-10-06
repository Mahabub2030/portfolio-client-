// src/app/(public)/project/page.tsx
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

// Import your project images

const projects = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea accusantium impedit facere. Sequi, deserunt recusandae.",
    techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    link: "https://business420.netlify.app/",
    github: "https://github.com/rohitsingh93300/YTBusiness",
    Image: "",
  },
  {
    id: 2,
    title: "Nike Shoes",
    description:
      "A fully responsive commercial website for Nike, built using React.js for the frontend, Node.js for the backend, and JSON for dynamic data management.",
    techStack: ["React", "Node.js", "MongoDB", "shadcn UI"],
    link: "https://nike-topaz-delta.vercel.app/",
    github: "https://github.com/Mahabub2030/-Commercial-website-for-Nike-",
    Image: "",
  },
  {
    id: 3,
    title: "Winter Clothing Donation",
    description:
      "A web platform to collect and distribute winter clothes to those in need.",
    techStack: ["React Js", "Tailwind CSS", "Firebase Authentication"],
    link: "https://wwwclothingcom.netlify.app/",
    github: "https://github.com/Mahabub2030/Winter-Clothing-Donation",
    Image: "",
  },
  {
    id: 4,
    title: "Fitness Tracker (Full-stack)",
    description:
      "Full-stack fitness tracking web app for logging workouts, setting goals, and monitoring progress. Built with React, Node.js, Express, and MongoDB.",
    techStack: [
      "React Js",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Authentication",
    ],
    link: "https://gym-auth-af6ad.web.app/",
    github: "https://github.com/Mahabub2030/Fitness-Tracker-Project",
    Image: "",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-gray-900 py-16 px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-gray-300 mb-12">
          My Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <Image
                src="/logo.png"
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover px-3 pt-3 rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                  >
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
