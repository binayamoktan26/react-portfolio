import React from "react";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      {/* navbar  */}
      {/* //  <!-- dark mode  toggle -->? */}

      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        {/* <!-- nav bar --> */}
        <Navbar />
        <main className="main" style={{ minHeight: "50vh" }}>
          <Outlet />
        </main>
        {/* footer  */}
        {/* <!-- footer  --> */}
        <Footer />
      </div>
    </div>
  );
};
