import React from "react";
import { Logo } from "../../index";
import { Search, User, ShoppingBag } from "lucide-react"; // Example icons

const Header = () => {
  const navItems = [
    { name: "Home", show: true },
    { name: "Shop", show: true },
    { name: "B.Y.O.B", show: true },
    { name: "Our Story", show: true },
    { name: "Lab Reports", show: true },
  ];

  const logItems = [
    { icon: <Search size={22} />, name: "Search" },
    { icon: <User size={22} />, name: "User" },
    { icon: <ShoppingBag size={22} />, name: "Cart" },
  ];

  return (
    <div className="grid grid-cols-3 items-center border w-full py-3 px-15 text-[var(--secondary-color)]">
      {/* Left Nav */}
      <div className="flex justify-start gap-9">
        {navItems.map((item, idx) => (
          <p
            key={idx}
            className="text-base cursor-pointer hover:text-gray-500 transition"
          >
            {item.name}
          </p>
        ))}
      </div>

      {/* Center Logo */}
      <div className="flex justify-center">
        <Logo />
      </div>

      {/* Right Icons */}
      <div className="flex justify-end gap-8">
        {logItems.map((item, idx) => (
          <button
            key={idx}
            aria-label={item.name}
            className="cursor-pointer text-base hover:text-gray-500 transition"
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
