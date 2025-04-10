import React from "react";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-bg-princ">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
