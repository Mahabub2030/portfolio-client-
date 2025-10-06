import DataTable from "@/components/projects/DataTable";
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
    <div className="py-20 px-4 w-full mx-auto text-center justify-center">
      <div>
        <DataTable />
      </div>
    </div>
  );
};

export default AllProjectsPage;
