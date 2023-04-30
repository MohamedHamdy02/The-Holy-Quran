import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { useThemeContext } from "@/Context/ThemeContext";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Layout = ({ children }: Props) => {
  const { theme } = useThemeContext();
  return (
    <div className={`${theme === "light" ? "bg-white" : "bg-[#1d2222]"}`}>
      <Head>
        <title>The Holy Quran / القران الكريم</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
