import React from "react";

const DesktopNav = ({ navItems }) => {
  return (
    <nav className="hidden md:flex gap-8">
      {navItems.map((item, idx) => (
        <p
          key={idx}
          className="cursor-pointer hover:text-gray-500 transition text-base"
        >
          {item.name}
        </p>
      ))}
    </nav>
  );
};

export default DesktopNav;
