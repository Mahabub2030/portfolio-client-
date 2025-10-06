import { getUserSession } from "@/helpers/getUserSession";

const DashboardHomePage = async () => {
  const session = await getUserSession();

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center w-full">
      {/* Header Card */}
      <div className="w-full max-w-4xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg p-8 flex flex-col items-center mb-8">
        <h1 className="text-4xl font-extrabold mb-2">
          Welcome, {session?.user?.name}!
        </h1>
        <p className="text-lg italic">{session?.user?.email}</p>
      </div>

      {/* Info Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Profile Info
          </h2>
          <p className="text-gray-600">Name: {session?.user?.name}</p>
          <p className="text-gray-600">Email: {session?.user?.email}</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition w-full">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Dashboard Stats
          </h2>
          <p className="text-gray-600">Projects: 12</p>
          <p className="text-gray-600">Tasks: 34</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
