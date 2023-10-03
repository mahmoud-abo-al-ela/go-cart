import { useEffect, useState } from "react";
import Header from "../components/layout/Header.js";
import Footer from "../components/routes/footer/Footer.js";

import "../styles/loading.css";

const SharedLayout = ({ children, activeLink }) => {
  return (
    <>
      <Header activeLink={activeLink} />
      {children}
      <Footer />
    </>
  );
};

export default SharedLayout;
