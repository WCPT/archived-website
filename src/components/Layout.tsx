import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Lato:wght@300;400;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <title>{title}</title>
      <main id="app">{children}</main>
    </>
  );
};

export default Layout;
