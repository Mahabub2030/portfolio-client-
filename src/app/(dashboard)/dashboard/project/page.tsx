import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects || Next Blog",
  description: "All project posts with Next.js and React",
};

// const handleEdit = (id: number) => {
//   console.log("hadel edite cliced");
// };

// // Delete handler
// const handleDelete = (id: number) => {
//   console.log("handleDelete");
// };
const AllProjectsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache: "no-store",
  });
  const projects = await res.json();

  return (
    <div className="py-20 px-4 w-full mx-auto">
      <h2 className="text-center text-4xl font-bold mb-8">All Projects</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Title
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Description
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>

          {/* <tbody className="bg-white divide-y divide-gray-200">
            {projects.map((project ) => (
              <tr key={project.id}>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {project.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {project.title}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {project.description}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <button
                    // onClick={handleEdit}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    // onClick={handleDelete}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default AllProjectsPage;
