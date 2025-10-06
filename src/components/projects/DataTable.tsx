import Link from "next/link";

export default function DataTable() {
  // Example project data
  const projects = [
    {
      name: "Portfolio Website",
      description: "My personal portfolio built with Next.js and Tailwind CSS",
      tech: "Next.js, Tailwind CSS, React",
      github: "https://github.com/Mahabub2030/portfolio",
      live: "https://my-profilo.vercel.app",
    },
    {
      name: "Blog System",
      description: "A full-stack blog system with authentication and CRUD",
      tech: "Next.js, MongoDB, Node.js, Tailwind",
      github: "https://github.com/Mahabub2030/blog-system",
      live: "#",
    },
    {
      name: "E-commerce App",
      description: "An e-commerce web app with product listing and cart",
      tech: "React, Node.js, MongoDB, Express",
      github: "#",
      live: "#",
    },
  ];

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Projects Showcase
      </h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Project Name
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Description
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Tech Stack
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              GitHub
            </th>
            <th className="px-6 py-3 text-left text-gray-700 font-semibold">
              Live Demo
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr
              key={index}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="px-6 py-3 text-gray-800 font-medium">
                {project.name}
              </td>
              <td className="px-6 py-3 text-gray-600">{project.description}</td>
              <td className="px-6 py-3 text-gray-600">{project.tech}</td>
              <td className="px-6 py-3">
                {project.github !== "#" ? (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    GitHub
                  </Link>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td>
              <td className="px-6 py-3">
                {project.live !== "#" ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="text-green-500 underline"
                  >
                    Live Demo
                  </Link>
                ) : (
                  <span className="text-gray-400">N/A</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
