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
  const [isContenthidden, setcontentShown] = React.useState(false);

  const handleContentButtonClick = React.useCallback(() => {
    setcontentShown((current) => !current);
    if (isContenthidden) {
      window.location.assign("/#about-us");
    }
  }, [isContenthidden]);

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
            "flex items-start justify-start w-full px-4  lg:px-14",
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
                  href="https://www.facebook.com/PasfikaTeachers"
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
                  href="https://mobile.twitter.com/PasfikaTeachers"
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
                  href="https://www.youtube.com/channel/UCvDhc1CS_QAxmnMCECMd7iQ"
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
                  href="mailto:pasifikateachers@gmail.com"
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

      <section className="relative h-screen">
        <div className="absolute z-10 w-full h-full opacity-80 bg-gradient-to-r from-black "></div>
        <StaticImage
          className="absolute z-0 flex items-center justify-center w-full h-full"
          imgClassName="w-full h-auto"
          src="../images/cover.jpg"
          alt="Cover picture of an Island"
          placeholder="dominantColor"
          objectFit="cover"
        />
        <div className="absolute top-0 z-10 flex flex-col items-center justify-center h-full text-white lg:mx-14">
          <div className="pl-4 mt-10 mr-auto lg:pl-0 ">
            <TurtleLogo className="h-32 mr-auto lg:h-56" />
          </div>
          <div className="m-4">
            <h1 className="my-1 text-4xl drop-shadow-md">
              Community of Pasifika Teachers
            </h1>
            <h2 className="my-1 text-xl">
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
      </section>
      <section className="relative bg-gray-100 lg:mt-2">
        <a id="about-us" className="absolute z-30 -top-10"></a>
        <div className="container px-4 py-10 mx-auto text-left lg:py-8">
          <h1 className="mx-4 my-1 text-2xl font-bold">About Us</h1>

          <p className="mx-4 my-2 text-xl text-gray-600">
            We, the Community of Pasifika Teachers, are a growing network of
            teachers of all levels from the wider Pacific region, with a common
            goal and will to recalibrate Pacific education to optimise students’
            learning outcomes and empower our generations for global competency
            and well-being. We reflect the lifestyle of the Pacific community;
            we work together, share and collaborate to solve problems, and
            conduct research to raise the quality of learning throughout the
            Pacific.
          </p>
          <div
            className={cx(
              "invisible h-0 opacity-0 transition-opacity duration-700 lg:visible lg:h-auto lg:opacity-100  ",
              {
                "show-content": isContenthidden,
              }
            )}
          >
            <p className="mx-4 my-2 text-xl text-gray-600">
              Our work is guided by the Sustainable Development Goal 4 (SDG4)
              and the Pacific Regional Education Framework (PacREF). As a
              community of practice for teachers, we aspire to contribute and
              work towards achieving the SDG4 and PacREF 2030 targets. Through
              our online communication and collaboration platform, ‘Please
              Talanoa Karo, Pasifika!’, our members engage in constructive
              discourse and reflect on topics of significant importance to
              teaching and learning in the Pacific context.
            </p>
            <p className="mx-4 my-2 text-xl text-gray-600">
              We firmly believe in our members' professional growth and
              evolution; our continuing professional development niches span
              various topics, from learning design to teaching best practices to
              the classroom and beyond. Our professional development sessions
              enhance our members’ skills and knowledge for sustainable student
              learning outcomes. We also have established a trusted network of
              digital teaching experts who can guide community members with
              special needs and those in need, especially in these turbulent
              times.
            </p>
            <p className="mx-4 my-2 text-xl text-gray-600">
              With the Community in place, we, the Pasifika Teachers, work and
              strive together to prosper and professionally grow by convening in
              a sustained way. If you are a Pasifika Teacher and yet to connect
              with us, we encourage you to register on our ‘Please Talanoa Karo,
              Pasifika!’ platform. Registration is free; just bring your Pacific
              Islander spirit! Join us, and let’s learn, connect and move
              forward together.
            </p>
          </div>
          <div className="block lg:hidden">
            <span
              className="inline-block p-2 mx-4 my-2 text-lg text-white rounded-sm bg-primary"
              onClick={handleContentButtonClick}
            >
              {isContenthidden ? "Read less" : "Read more"}
            </span>
          </div>
        </div>
      </section>

      <section className="block lg:h-screen lg:flex lg:max-h-1/2-screen lg:my-2 lg:flex-row">
        <div className="relative flex items-center justify-center lg:w-1/2 lg:mr-1 aspect-w-16 aspect-h-9 item-center lg:h-full lg:pb-0">
          <iframe
            src="https://www.youtube.com/embed/iaNnX6jkq80"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="relative flex items-center justify-center h-1/2 lg:w-1/2 item-center lg:h-full ">
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
            className="absolute top-0 left-0 z-10 flex items-end justify-start w-full h-full text-2xl text-white bg-gradient-to-t from-gray-900 hover:bg-gradient-to-b hover:from-gray-400 hover:text-black"
          >
            <div className="container px-4 py-6 mx-auto mb-6 text-lg lg:py-8">
              <h1 className="mx-4 my-1 text-2xl font-bold ">Register here</h1>
              <p className="mx-4 text-xl text-gray-200">
                Click here to register to Please Talanoa Karo, Pasifika!
              </p>
            </div>
            <div className="absolute bottom-0 right-0 z-20 flex items-end justify-end text-lg">
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

      <section className="bg-gray-100 ">
        <div className="container px-4 py-10 mx-auto text-left lg:py-8">
          <h1 className="mx-4 my-1 text-2xl font-bold">Contact Us</h1>
          <p className="mx-4 text-xl text-gray-600">
            If you have any queries, <b>feel free to contact us</b> by emailing
            to
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
      </section>

      <footer className="flex bg-primary">
        <div className="container grid grid-cols-1 gap-4 px-12 py-12 mx-auto lg:grid-cols-3 lg:gap-12">
          <div>
            <CPTLogo className="mx-auto h-28 xl:h-32" />
          </div>

          <section className="flex items-center justify-center text-gray-200">
            <div className="container mx-auto">
              <nav className="flex justify-center my-2">
                <span className="mx-2">
                  <a
                    className="text-2xl"
                    href="https://www.facebook.com/PasfikaTeachers"
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
                    href="https://mobile.twitter.com/PasfikaTeachers"
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
                    href="https://www.youtube.com/channel/UCvDhc1CS_QAxmnMCECMd7iQ"
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
                    href="mailto:pasifikateachers@gmail.com"
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

          <section className="flex items-center justify-center text-sm text-center text-white lg:text-lg">
            Supported by the Fiji National University
          </section>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;
