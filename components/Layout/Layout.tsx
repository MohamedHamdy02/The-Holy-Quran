import Head from "next/head";
import React from "react";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Head>
        <title>The Holy Quran / القران الكريم</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
