import React from "react";
import { Helmet } from "react-helmet";

import { Navbar, Footer } from "../components";
import {
  HeroSection,
  IntroSection,
  StatSection,
  EventsSection,
  ContactSection,
} from "../page-components/index";

export const IndexPage = () => {
  // const [hasScrolled, setScroll] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => setScroll(window.scrollY > 0);
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

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

        <Navbar theme="light" className="absolute top-0 z-50" />
        <HeroSection />
        <IntroSection />
        <StatSection />
        <EventsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;
