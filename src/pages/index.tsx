import * as React from "react";
import { cx } from "@emotion/css";
import { StaticImage } from "gatsby-plugin-image";

import Icon from "../images/assets/cpt-black.svg";

// markup
const IndexPage = () => {
  const [hasScrolled, setScroll] = React.useState(false);

  let pageLogo = hasScrolled ? "../images/icon.png" : Icon;

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <title>Community of Pasifika</title>
      <nav
        className={cx(
          `flex flex-col top-0 z-50 w-full fixed absolute-navbar transition-all duration-200 ease-in-out`,
          {
            "sticky-navbar": hasScrolled,
          }
        )}
      >
        <div
          className={cx(
            "flex items-center justify-between w-full  px-4  xl:px-14",
            {
              "text-black": hasScrolled,
            }
          )}
        >
          {/* <SecondaryNav navItems={secondaryNav} social={social} /> */}
        </div>

        <div className="flex items-center py-2">
          <div className="container flex items-center mx-auto xl:px-12">
            <Icon className="h-40" />
          </div>
        </div>
      </nav>

      <div className="h-screen">
        <div className="absolute z-10 w-full h-full opacity-50 bg-gradient-to-b from-black "></div>
        <StaticImage
          className="absolute z-0 flex items-center justify-center h-full"
          src="../images/cover.jpg"
          alt="Cover picture of an Island"
          placeholder="dominantColor"
        />
        <div className="absolute z-10 flex items-center justify-start w-full h-full text-white">
          <h1>Community of Pasifika Teachers</h1>
          <h2>Learning, Connecting and Moving Forward Together</h2>
        </div>
      </div>

      <div className="flex flex-col h-screen my-2 lg:flex-row lg:max-h-1/2-screen ">
        <div className="relative flex items-center justify-center w-full mr-1 border-2 border-black item-center h-1/2 lg:h-full">
          First Tile
        </div>
        <div className="relative flex items-center justify-center w-full border-2 border-black item-center h-1/2 lg:h-full">
          Second Tile
        </div>
      </div>
      <div className="flex">Contact Us</div>
    </main>
  );
};

export default IndexPage;
