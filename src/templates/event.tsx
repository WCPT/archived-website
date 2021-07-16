import React from "react";
import { Helmet } from "react-helmet";

import { Navbar, Footer } from "../components";

interface Props {
  pageContext: {
    subtitle?: string;
    title: string;
    duration: string;
    body: React.ReactNode;
    registrationUrl: string;
  };
}

const Event = ({ pageContext }: Props) => {
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
      <main id="app">
        <title>Wisdom Community of Pasifika Teachers</title>

        <div className="flex flex-col min-h-screen">
          <Navbar className="py-6 border-b border-gray-200" />
          <div className="px-8">
            <section className="container mx-auto mt-12 mb-16 text-lg prose text-gray-900">
              {pageContext.subtitle && (
                <h2 className="mb-0 text-gray-500">{pageContext.subtitle}</h2>
              )}
              <h1 className="leading-tight text-bahamaBlue">
                {pageContext.title}
              </h1>

              <div>
                <div className="text-gray-500">{pageContext.duration}</div>
                <div>
                  <a
                    href={pageContext.registrationUrl}
                    target="_blank"
                    className="text-bahamaBlue-400"
                  >
                    Register here
                  </a>
                </div>
              </div>

              {pageContext.body}

              <div className="mt-8">
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  Return to home page
                </a>
              </div>
            </section>
          </div>
          <Footer className="mt-auto" />
        </div>
      </main>
    </>
  );
};

export default Event;
