import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { ReactNode } from "react";
import styles from "./Layout.module.scss";

export interface ChildrenI {
  children: ReactNode;
}

const Layout = ({ children }: ChildrenI) => {
  return (
    <>
      <Navbar />
      <main className={styles.page}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
