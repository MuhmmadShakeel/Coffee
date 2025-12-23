import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#562B08] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <Link
          to="/"
          className="text-white text-2xl font-extrabold tracking-wide flex items-center gap-2 hover:opacity-90 transition"
        >
          ☕ Coffee
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative text-white text-sm font-medium transition 
                   after:content-[''] after:absolute after:left-0 after:-bottom-1
                   after:h-[2px] after:w-0 after:bg-[#F4C430] after:transition-all after:duration-300
                   hover:after:w-full
                   ${isActive ? "text-[#F4C430]" : "hover:text-[#D8D8D8]"}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar