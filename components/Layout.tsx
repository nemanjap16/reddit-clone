import { LayoutProps } from "framer-motion";
import React from "react";
import Navbar from "./Navbar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
export default Layout;