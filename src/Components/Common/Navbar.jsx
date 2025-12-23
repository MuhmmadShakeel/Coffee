import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#562B08] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Brand */}
        <div className="text-white text-2xl font-extrabold tracking-wide cursor-pointer hover:opacity-90 transition">
          ☕ Coffee
        </div>

        {/* Menu */}
        <ul className="flex items-center gap-10">
          {[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <a
                href={item.path}
                className="relative text-white text-sm font-medium transition 
                           hover:text-[#647E68]
                           after:content-[''] after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0 after:bg-[#D8D8D8]
                           after:transition-all after:duration-300
                           hover:after:w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
