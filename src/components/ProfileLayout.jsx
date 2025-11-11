import React from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/SidebarProfile.jsx";
import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      {/* Header trên cùng */}
      <Header />

      {/* Phần dưới gồm sidebar + nội dung */}
      <div className="flex flex-1 bg-gray-100">
        <aside className="w-64 bg-white border-r border-gray-200 shadow-sm p-2 flex flex-col">
          <Sidebar />
        </aside>

        {/* Nội dung bên phải */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
