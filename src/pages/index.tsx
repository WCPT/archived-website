import * as React from "react";
import { cx } from "@emotion/css";
import { StaticImage } from "gatsby-plugin-image";

import Icon from "../images/assets/cpt-black.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <div className="container flex justify-between py-1 mx-auto xl:px-12">
            <nav className="flex items-center">
              <span className="mx-2">
                <a
                  className="text-l"
                  href="https://www.facebook.com/CLTEFNU/"
                  title="Facebook"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fb-icon fab fa-facebook" aria-hidden="true"></i>
                  <FontAwesomeIcon icon={["fal", "coffee"]} />
                </a>
              </span>
              <span className="mx-2">
                <a
                  className="text-l"
                  href="https://twitter.com/clte_fnu"
                  title="Twitter"
                  target="_blank"
                  rel="noopener"
                >
                  <i
                    className="twitter-icon fab fa-twitter"
                    aria-hidden="true"
                  ></i>
                </a>
              </span>
              <span className="mx-2">
                <a
                  className="text-l"
                  href="https://www.youtube.com/channel/UCztg2OWdPFphpeQufpLQQzA"
                  title="Youtube"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="yt-icon fab fa-youtube" aria-hidden="true"></i>
                </a>
              </span>
              <span className="mx-2">
                <a
                  className="text-l"
                  href="https://www.instagram.com/"
                  title="Instagram"
                  target="_blank"
                  rel="noopener"
                >
                  <i
                    className="instagram-icon fab fa-instagram"
                    aria-hidden="true"
                  ></i>
                </a>
              </span>
            </nav>
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
        <div className="absolute top-0 z-10 flex items-center justify-start w-full h-full text-white">
          <Icon className="h-64 m-8 sm:m-2" />
          <div>
            <h1 className="m-1 text-4xl drop-shadow-md">
              Community of Pasifika Teachers
            </h1>
            <h2 className="m-1 text-lg font-secondary">
              Learning, Connecting and Moving Forward Together
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-screen my-2 lg:flex-row lg:max-h-1/2-screen ">
        <div className="relative flex items-center justify-center w-full mr-1 item-center h-1/2 lg:h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/iaNnX6jkq80"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="relative flex items-center justify-center w-full item-center h-1/2 lg:h-full">
          <StaticImage
            className="absolute z-0 flex items-center justify-center h-full"
            src="../images/register-ss.jpeg"
            alt="Cover picture of an Island"
            placeholder="dominantColor"
          />
          <a
            href="https://clte.fnu.ac.fj/talanoakaro"
            className="absolute top-0 left-0 z-10 w-full h-full opacity-50 bg-gradient-to-t from-black hover:from-gray-900"
          />
          <div className="z-20 p-10 mx-2 my-1 mt-auto mr-auto text-2xl text-left text-white ">
            Register Here
            <div className="z-20 my-1 text-lg font-normal">
              Click here to register to Please Talanoa Karo, Pasifika!
            </div>
          </div>
        </div>
      </div>
      <div className="flex">Contact Us</div>
    </main>
  );
};

export default IndexPage;
