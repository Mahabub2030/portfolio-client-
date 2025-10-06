import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    techStack: string[];
    link: string;
    github: string;
    image: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-2xl"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-300 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <div
              key={idx}
              className="bg-gray-900 text-gray-300 text-sm font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </div>
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
  );
};

export default ProjectCard;
