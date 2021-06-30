import * as React from "react";
import { cx } from "@emotion/css";
import { StaticImage } from "gatsby-plugin-image";

import CPTLogo from "../images/assets/CPT_Logo.svg";
import LogoWhite from "../images/assets/logo-white.svg";
import LogoBlack from "../images/assets/logo-black.svg";
import TurtleLogo from "../images/assets/turtle-logo.svg";

import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// markup
const IndexPage = () => {
  const [hasScrolled, setScroll] = React.useState(false);
  const [isCreditsClicked, setisCreditsClicked] = React.useState(false);
  const [isCreditsRegistationClicked, setIsCreditsRegistationClicked] =
    React.useState(false);

  const handleCreditButtonClick = React.useCallback(() => {
    setisCreditsClicked((current) => !current);
  }, [isCreditsClicked]);

  const handleCreditsRegistationClick = React.useCallback(() => {
    setIsCreditsRegistationClicked((current) => !current);
  }, [isCreditsRegistationClicked]);

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
              <div className="mr-6">
                {hasScrolled && <LogoBlack className="h-12 lg:h-16 " />}
                <LogoWhite
                  className={cx("h-12 lg:h-16", {
                    hidden: hasScrolled,
                  })}
                />
              </div>
              <span className="mx-2">
                <a
                  className="text-2xl"
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
                  className="text-2xl"
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
                  className="text-2xl"
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
                  className="text-2xl"
                  href="mailto:clte@fnu.ac.fj"
                  title="Email"
                  target="_blank"
                  rel="noopener"
                >
                  <MdEmail className="hover:text-gray-600" />
                </a>
              </span>
            </nav>
          </div>
        </div>
      </nav>

      <div className="relative h-screen">
        <div className="absolute z-10 w-full h-full opacity-80 bg-gradient-to-r from-black "></div>
        <StaticImage
          className="absolute z-0 flex items-center justify-center w-full h-full"
          imgClassName="w-full h-auto"
          src="../images/cover.jpg"
          alt="Cover picture of an Island"
          placeholder="dominantColor"
          objectFit="cover"
        />
        <div className="absolute top-0 z-10 flex flex-col items-center justify-center h-full text-white">
          <div className="ml-4 mr-auto">
            <TurtleLogo className="h-56 mr-auto " />
          </div>
          <div className="m-4">
            <h1 className="m-1 text-4xl drop-shadow-md">
              Community of Pasifika Teachers
            </h1>
            <h2 className="m-1 text-xl">
              Learning, Connecting and Moving Forward Together
            </h2>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-20 flex items-end justify-end w-full h-full">
          <span
            className="p-2 text-white bg-gray-800 bg-opacity-60"
            onClick={handleCreditButtonClick}
          >
            <i
              className={cx("text-sm fa fa-plus m-1", {
                hidden: isCreditsClicked,
              })}
              aria-hidden="true"
            ></i>
            {isCreditsClicked ? "Photo by Hoodh Ahmed on Unsplash" : "Credits"}
          </span>
        </div>
      </div>
      <div className="bg-gray-100 lg:mt-2">
        <div className="container px-4 py-10 mx-auto lg:py-8">
          <h1 className="mx-4 my-1 text-2xl font-bold">About Us</h1>
          <p className="mx-4 text-xl text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            aliquid nemo impedit, atque repudiandae animi ratione tempore odio,
            aperiam, nisi voluptatibus reprehenderit architecto expedita et?
            Quasi magnam necessitatibus beatae facere.
          </p>
        </div>
      </div>

      <div className="flex flex-col h-screen lg:my-2 lg:flex-row lg:max-h-1/2-screen">
        <div className="relative flex items-center justify-center w-full mr-1 item-center lg:h-full lg:pb-0 video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/iaNnX6jkq80"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="relative flex items-center justify-center w-full h-1/2 item-center lg:h-full">
          <StaticImage
            className="absolute z-0 flex items-center justify-center h-full"
            src="../images/register.jpg"
            imgClassName="w-full h-full"
            alt="Registration form screenshot"
            objectFit="cover"
            placeholder="dominantColor"
          />
          <a
            href="https://clte.fnu.ac.fj/talanoakaro"
            className="absolute z-10 flex items-end justify-start w-full h-full text-2xl text-white bg-gradient-to-t from-gray-900 hover:bg-gradient-to-b hover:from-gray-400 hover:text-black"
          >
            <div className="container px-4 py-6 mx-auto text-lg lg:py-8">
              <h1 className="mx-4 my-1 text-2xl font-bold ">Register here</h1>
              <p className="mx-4 text-xl text-gray-200">
                Click here to register to Please Talanoa Karo, Pasifika!
              </p>
            </div>
            <div className="absolute top-0 left-0 z-10 flex items-end justify-end w-full h-full text-lg">
              <span
                className="z-20 p-2 text-white bg-gray-800 bg-opacity-60"
                onClick={handleCreditsRegistationClick}
              >
                <i
                  className={cx("text-sm fa fa-plus m-1", {
                    hidden: isCreditsRegistationClicked,
                  })}
                  aria-hidden="true"
                ></i>
                {isCreditsRegistationClicked
                  ? "Photo by Thomas Lefebvre on Unsplash"
                  : "Credits"}
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="bg-gray-100 ">
        <div className="container px-4 py-10 mx-auto lg:py-8">
          <h1 className="mx-4 my-1 text-2xl font-bold">Contact Us</h1>
          <p className="mx-4 text-xl text-gray-600">
            If you have any queries, feel free to contact us by emailing to
            <a
              className="pl-1 text-blue-500 underline break-words"
              href="mailto:pasifikateachers@gmail.com"
            >
              pasifikateachers@gmail.com
            </a>
            . We would love to hear from you and do our utmost best to make your
            CPT experience worthwhile and a memorable one.
          </p>
        </div>
      </div>
      <footer className="flex bg-primary">
        <div className="container grid grid-cols-1 gap-4 px-12 py-12 mx-auto lg:grid-cols-3 lg:gap-12">
          <div>
            <CPTLogo className="mx-auto h-28" />
          </div>

          <section className="flex items-center justify-center text-gray-200">
            <div className="container mx-auto">
              <nav className="flex justify-center my-2">
                <span className="mx-2">
                  <a
                    className="text-3xl"
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
                    className="text-3xl"
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
                    className="text-3xl"
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
                    className="text-3xl"
                    href="mailto:clte@fnu.ac.fj"
                    title="Email"
                    target="_blank"
                    rel="noopener"
                  >
                    <MdEmail className="hover:text-gray-600" />
                  </a>
                </span>
              </nav>
              <section className="flex justify-center pt-4 text-lg text-center text-gray-200">
                Community of Pasifika Teachers &copy;
                {new Date().getFullYear()}
              </section>
            </div>
          </section>

          <section className="flex items-center justify-center text-lg text-center text-white">
            Supported by the Fiji National University
          </section>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;
