import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { RiCommunityFill } from "react-icons/ri";
import { GiJusticeStar } from "react-icons/gi";
import { MdGroup } from "react-icons/md";
import { cx } from "@emotion/css";

// @ts-ignore
import WCPTLogo from "../images/assets/WCPT_Logo.svg";
// @ts-ignore
// import TurtleLogo from "../images/assets/turtle_logo.svg";

import { Navbar, HeroSection, AboutSection } from "../page-components/index";

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
        <SectionOne />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;

function MediaSection() {
  const [isCreditsRegistationClicked, setIsCreditsRegistationClicked] =
    useState(false);

  const handleCreditsRegistationClick = useCallback(() => {
    setIsCreditsRegistationClicked((current) => !current);
  }, [isCreditsRegistationClicked]);

  return (
    <section className="relative grid grid-cols-2">
      <div className="relative flex items-center justify-center aspect-w-16 aspect-h-9 item-center lg:pb-0">
        <iframe
          src="https://www.youtube.com/embed/iaNnX6jkq80"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="relative flex items-center justify-center item-center aspect-w-16 aspect-h-9">
        <StaticImage
          className="absolute top-0 left-0 z-0 flex items-center justify-center h-full"
          src="../images/register.jpg"
          imgClassName="w-full h-full"
          alt="Registration form screenshot"
          objectFit="cover"
          placeholder="dominantColor"
        />
        <a
          href="https://clte.fnu.ac.fj/talanoakaro"
          className="absolute top-0 left-0 z-10 w-full h-full pb-8 text-2xl text-white bg-gradient-to-t from-gray-900 hover:bg-gradient-to-b hover:from-gray-400 hover:text-black"
        >
          <div className="container flex items-end justify-start w-full h-full px-4 py-6 mx-auto mb-6 text-lg lg:py-8">
            <div>
              <h1 className="mx-4 my-1 text-2xl font-bold ">Register here</h1>
              <p className="mx-4 text-xl text-gray-200">
                Click here to register to Please Talanoa Karo, Pasifika!
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 z-50 flex items-end justify-end text-lg">
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
    </section>
  );
}

function SectionOne() {
  return (
    <section className="relative bg-gray-100">
      {/* Upcoming Events Section */}
      <div className="container py-10 mx-auto">
        <h1 className="px-6 mb-4 text-2xl font-bold ">Upcoming Events</h1>
        <div className="flex flex-col mx-8 lg:flex-row">
          <div className="flex mx-1 my-2 text-center lg:flex-row">
            <div className="flex flex-col items-start p-4 text-white bg-green-500 border-l-8 border-primary ">
              <h1 className="text-2xl">Some Event</h1>
              <h2 className="text-lg text-black">10:30pm, 12th August, 2021</h2>
              <p className="text-lg text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                voluptatibus ut quas vel incidunt.
              </p>
            </div>
          </div>
          <div className="flex mx-1 my-2 text-center lg:flex-row">
            <div className="flex flex-col items-start p-4 text-white bg-blue-400 border-l-8 border-primary ">
              <h1 className="text-2xl">Some Event</h1>
              <h2 className="text-lg text-black">10:30pm, 12th August, 2021</h2>
              <p className="text-lg text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                voluptatibus ut quas vel incidunt.
              </p>
            </div>
          </div>
          <div className="flex mx-1 my-2 text-center lg:flex-row">
            <div className="flex flex-col items-start p-4 text-white bg-red-400 border-l-8 border-primary ">
              <h1 className="text-2xl">Some Event</h1>
              <h2 className="text-lg text-black">10:30pm, 12th August, 2021</h2>
              <p className="text-lg text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                voluptatibus ut quas vel incidunt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards Section */}
      <div className="container mx-auto">
        <div className="flex flex-col justify-center mx-8 text-center border-t-2 border-primary lg:flex-row">
          <div className="flex flex-col flex-1 px-4 py-6 text-2xl text-gray-600 border-b-2 border-primary lg:py-4 lg:mr-4 ">
            <MdGroup className="mx-auto text-5xl" />
            <h1 className="mx-auto my-4 text-5xl font-semibold text-gray-700">
              100
            </h1>
            <p>Joint Programmes focused on Integrated Social Protection</p>
          </div>
          <div className="flex flex-col flex-1 py-6 text-2xl text-gray-600 border-b-2 border-primary lg:mx-2">
            <RiCommunityFill className="mx-auto text-5xl" />
            <h1 className="mx-auto my-4 text-5xl font-semibold text-gray-700">
              1000
            </h1>
            <p>Partners working together</p>
          </div>
          <div className="flex flex-col flex-1 px-4 py-6 text-2xl text-gray-600 border-b-2 border-primary lg:ml-4">
            <GiJusticeStar className="mx-auto text-5xl" />
            <h1 className="mx-auto my-4 text-5xl font-semibold text-gray-700">
              500
            </h1>
            <p>Innovative solutions tested</p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="container px-4 py-10 mx-auto text-left lg:py-8">
        <h1 className="mx-4 my-1 text-2xl font-bold">Contact Us</h1>
        <p className="mx-4 text-xl text-gray-600">
          If you have any queries, feel free to contact us by emailing to
          <a
            className="pl-1 text-blue-500 underline break-words"
            href="mailto:pasifikateachers@gmail.com"
          >
            pasifikateachers@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

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
