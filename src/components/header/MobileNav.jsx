import React from "react";

const MobileNav = ({ navItems, logItems }) => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center gap-10">
      {/* Nav Links */}
      <nav className="flex flex-col gap-6 text-2xl font-semibold">
        {navItems.map((item, idx) => (
          <p key={idx} className="cursor-pointer hover:text-gray-500 transition">
            {item.name}
          </p>
        ))}
      </nav>

      {/* Icons */}
      <div className="flex gap-8 mt-6">
        {logItems.map((item, idx) => (
          <button
            key={idx}
            aria-label={item.name}
            className="cursor-pointer text-xl hover:text-gray-500 transition"
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
