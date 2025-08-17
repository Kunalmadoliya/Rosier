import React from "react";
import { Menu, X } from "lucide-react";

const Hamburger = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden cursor-pointer p-2"
      aria-label="Toggle menu"
    >
      {open ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
};

export default Hamburger;
