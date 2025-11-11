import React from "react";
import { NavLink } from "react-router-dom";
import {
  UserCircle2,
  Activity,
  FileText,
  Stethoscope,
  ClipboardList,
  History,
} from "lucide-react";

export default function SidebarProfile() {
  const baseClass =
    "flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-all";
  const activeClass =
    "bg-blue-100 text-blue-700 font-semibold shadow-sm";

  const linkItems = [
    { to: "/profile/administrative", label: "Dữ liệu hành chính", icon: <UserCircle2 size={18} /> },
    { to: "/profile/vitals", label: "Sinh hiệu", icon: <Activity size={18} /> },
    { to: "/profile/prescriptions", label: "Đơn thuốc", icon: <FileText size={18} /> },
    { to: "/profile/technical", label: "Chỉ định kỹ thuật", icon: <Stethoscope size={18} /> },
    { to: "/profile/diagnosis", label: "Chẩn đoán", icon: <ClipboardList size={18} /> },
    { to: "/profile/history", label: "Lịch sử khám", icon: <History size={18} /> },
    ];

  return (
    <nav className="flex flex-col gap-1 p-2">
      <h2 className="text-gray-800 font-semibold text-lg px-3 mb-2">
        Hồ sơ bệnh nhân
      </h2>
      {linkItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            isActive ? `${baseClass} ${activeClass}` : baseClass
          }
        >
          {icon}
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
