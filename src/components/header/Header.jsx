import React from "react";
import {Logo} from "../../index";

const Header = () => {
  const navItems = [
    {name: "Shop", show: true},
    {name: "Our Story", show: true},
    {name: "Community", show: true},
    {name: "Contact", show: true},
    {name: "Login", show: true},
    {name: "Cart", show: true},
  ];

  const mainItems = navItems
    .filter(
      (item) =>
        item.show &&
        ["Shop", "Our Story", "Community", "Contact"].includes(item.name)
    )
    .map((item) => ({name: item.name}));

  const logItems = navItems
    .filter((item) => item.show && ["Login", "Cart"].includes(item.name))
    .map((item) => ({name: item.name}));

  return (
    <div className="border  flex items-center justify-between border-b-4 px-15 w-full p-6">
      <div>
        <Logo />
      </div>

      <div className="flex gap-10  kanit-semibold">
        {mainItems.map((item, idx) => (
          <p
            key={idx}
            className="text-2xl cursor-pointer hover:text-gray-500 transition"
          >
            {item.name}
          </p>
        ))}
      </div>

      <div className="flex gap-5  kanit-semibold">
        {logItems.map((item, idx) => (
          <p
            key={idx}
            className="text-2xl cursor-pointer hover:text-gray-500 transition"
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Header;
