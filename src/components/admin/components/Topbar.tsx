import { Bell, Search, UserCircle } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-white border rounded-2xl p-4 flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, Admin 👋</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search patients, tests..."
            className="bg-transparent outline-none text-sm w-56"
          />
        </div>

        <button className="relative p-2 bg-gray-100 rounded-xl">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        <div className="flex items-center gap-2">
          <UserCircle size={32} className="text-teal-700" />
          <div className="hidden md:block">
            <p className="text-sm font-semibold">Admin</p>
            <p className="text-xs text-gray-500">Lab Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;