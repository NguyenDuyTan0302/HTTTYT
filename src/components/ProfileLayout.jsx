import React from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/SidebarProfile.jsx";
import "../index.css";
import { Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="min-h-screen">
      {/* Header cố định trên cùng */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white flex items-center">
        <Header />
      </header>

      {/* Phần nội dung dưới header */}
      <div className="flex pt-[80px] h-[calc(100vh-80px)]">
        {/* Sidebar bên trái */}
        <aside
          className="
            fixed top-[60px] left-0 w-64 
            h-[calc(100vh-60px)] 
            bg-white border-r border-gray-200 shadow-sm p-2
            overflow-y-auto
          "
        >
          <Sidebar />
        </aside>

        {/* Nội dung chính */}
        <main
          className="
            flex-1
            bg-sky-300
            min-h-[calc(100vh-80px)]
            overflow-y-auto
            ml-64           /* tránh đè lên sidebar */
            pt-[80px]       /* tránh đè lên header */
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
