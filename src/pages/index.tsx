import React from "react";
import { Helmet } from "react-helmet";

// @ts-ignore
import WCPTLogo from "../images/assets/WCPT_Logo.svg";
// @ts-ignore
// import TurtleLogo from "../images/assets/turtle_logo.svg";

import { Navbar, HeroSection, AboutSection, MediaSection, EventsSection } from "../page-components/index";

const IndexPage = () => {
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
          href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Lato:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <main>
        <title>Wisdom Community of Pasifika</title>

        <Navbar />
        <HeroSection />
        <AboutSection />
        <MediaSection />
        <EventsSection />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;

function Footer() {
  return (
    <footer className="relative flex bg-primary">
      <div className="container grid grid-cols-1 gap-4 px-12 py-12 mx-auto lg:grid-cols-3 lg:gap-12">
        <div>
          <WCPTLogo className="mx-auto h-28 xl:h-32" />
        </div>

        <section className="flex items-center justify-center text-gray-200">
          <div className="container mx-auto">
            {/* <Social className="justify-center my-2" /> */}
            <section className="flex justify-center pt-4 text-lg text-center text-gray-200">
              Wisdom Community of Pasifika Teachers &copy;
              {new Date().getFullYear()}
            </section>
          </div>
        </section>

        <section className="flex items-center justify-center text-sm text-center text-white lg:text-lg">
          Supported by the Fiji National University
        </section>
      </div>
    </footer>
  );
}
