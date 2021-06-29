import * as React from "react";
import { cx } from "@emotion/css";
import { StaticImage } from "gatsby-plugin-image";

import Icon from "../images/assets/cpt-black.svg";
import LogoWhite from "../images/assets/logo-white.svg";
import LogoBlack from "../images/assets/logo-black.svg";
import TurtleWhite from "../images/assets/turtle-white.svg";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// markup
const IndexPage = () => {
  const [hasScrolled, setScroll] = React.useState(false);

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
          `flex flex-col top-0 z-50 w-full fixed absolute-navbar transition-all duration-200 ease-in-out py-2`,
          {
            "sticky-navbar": hasScrolled,
          }
        )}
      >
        <div
          className={cx(
            "flex items-start justify-start w-full  px-4  xl:px-14",
            {
              "text-black": hasScrolled,
            }
          )}
        >
          <div className="flex justify-start py-1">
            <nav className="flex items-center">
              <span className="mx-2">
                <a
                  className="text-xl"
                  href="https://www.facebook.com/CLTEFNU/"
                  title="Facebook"
                  target="_blank"
                  rel="noopener"
                >
                  <FaFacebookSquare className="hover:text-blue-800" />
                </a>
              </span>
              <span className="mx-2">
                <a
                  className="text-xl"
                  href="https://twitter.com/clte_fnu"
                  title="Twitter"
                  target="_blank"
                  rel="noopener"
                >
                  <FaTwitter className="hover:text-blue-400" />
                </a>
              </span>
              <span className="mx-2">
                <a
                  className="text-xl"
                  href="https://www.youtube.com/channel/UCztg2OWdPFphpeQufpLQQzA"
                  title="Youtube"
                  target="_blank"
                  rel="noopener"
                >
                  <FaYoutube className="hover:text-red-600" />
                </a>
              </span>
              <span className="mx-2">
                <a
                  className="text-xl"
                  href="mailto:clte@fnu.ac.fj"
                  title="Instagram"
                  target="_blank"
                  rel="noopener"
                >
                  <MdEmail className="hover:text-gray-600" />
                </a>
              </span>
            </nav>
          </div>
        </div>
        <div className="flex items-center py-2">
          <div className="container flex items-center px-16">
            {hasScrolled && <LogoBlack className="h-10" />}
            <LogoWhite
              className={cx("h-10", {
                hidden: hasScrolled,
              })}
            />
          </div>
        </div>
      </nav>

      <div className="h-screen">
        <div className="absolute z-10 w-full h-full opacity-50 bg-gradient-to-b from-black "></div>
        <StaticImage
          className="absolute z-0 flex items-center justify-center w-full h-full"
          imgClassName="w-full h-auto"
          src="../images/cover.jpg"
          alt="Cover picture of an Island"
          placeholder="dominantColor"
          objectFit="cover"
        />
        <div className="absolute top-0 z-10 flex items-center justify-start w-full h-full text-white">
          <TurtleWhite className="m-2 h-60 lg:h-64 lg:m-8" />
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

      <div className="flex flex-col h-screen lg:my-2 lg:flex-row lg:max-h-1/2-screen ">
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
            alt="Registration form screenshot"
            objectFit="cover"
            placeholder="dominantColor"
          />
          <a
            href="https://clte.fnu.ac.fj/talanoakaro"
            className="absolute z-10 flex items-end justify-start w-full h-full text-2xl text-white bg-gradient-to-t from-gray-700 hover:bg-gradient-to-b hover:from-gray-400 hover:text-black"
          >
            <div className="m-8 text-lg font-normal">
              <h1 className="my-1 text-2xl ">Register Here</h1>
              <p className="text-xl">
                Click here to register to Please Talanoa Karo, Pasifika!
              </p>
            </div>
          </a>
        </div>
      </div>
      <div className=" bg-light-gray">
        <div className="py-8">
          <h1 className="mx-4 my-1 text-2xl font-bold">Contact Us</h1>

          <p className="mx-4">
            We come from a wide range of academic and professional disciplines
            and experiential backgrounds. If you need our support to take your
            learning and teaching achievements to new heights, or want to know
            about any of our services, please feel free to reach out to us via
            our email clte@fnu.ac.fj. Please don't ever hesitate to contact us
            and let us know how we can improve your FNU experience. We want to
            be a part of your FNU journey, every step of the way!
          </p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
