  import React from "react";
  import { Link } from "react-router-dom";

  const Header = () => {
    return (
      <header className="sticky top-0 z-10 w-full flex items-center justify-between bg-white px-8 py-3 shadow-md">
        <div className="nav-left">
          <Link
            to="/home"
            className="text-slate-800 font-medium px-3 py-1.5 rounded-md hover:bg-slate-100 transition"
          >
            HealthCare Dashboard
          </Link>
        </div>

        <div className="nav-right flex items-center gap-4">
          <Link
            to="/profile/administrative"
            className="text-slate-800 font-medium px-3 py-1.5 rounded-md hover:bg-slate-100 transition"
          >
            Workspace
          </Link>
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            className="w-10 h-10 rounded-full border-2 border-slate-200 object-cover"
            alt="avatar"
          />
        </div>
      </header>
    );
  };

  export default Header;
