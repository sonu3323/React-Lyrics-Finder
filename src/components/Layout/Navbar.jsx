import React from "react";

const Navbar = ({ headerName }) => {
  return (
    <nav className="nabvar navbar-dark bg-dark mb-5 text-center">
      <span className="navbar-brand mb-0 h1">{headerName}</span>
    </nav>
  );
};

export default Navbar;
