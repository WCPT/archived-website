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
        <div className="absolute top-0 z-10 flex flex-col items-center justify-center h-full text-white lg:mx-14">
          <div className="pl-4 mr-auto lg:pl-0 ">
            <TurtleLogo className="h-56 mr-auto " />
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
      </div>
      <div className="bg-gray-100 lg:mt-2">
        <div className="container px-4 py-10 mx-auto text-left lg:py-8">
          <h1 className="mx-4 my-1 text-2xl font-bold">About Us</h1>
          <p className="mx-4 my-2 text-xl text-gray-600">
            We, the <b>Community of Pasifika Teachers (CPT)</b>, are a pulsating
            network of teachers from the wider Pacific region, learning,
            connecting and moving forward together, with a common goal of
            re-thinking education in the island nations to educate and empower
            our generations for global competency. We reflect the Pacific
            communal way of life by working in partnership with each other to
            share, collaborate to solve problems, and undertake research to
            improve the quality of learning in the Pacific contexts. Guided by
            the <b>Pacific Regional Education Framework (PacREF) 2018-2030</b>,
            our mission is to build on to the conventional pedagogies, inculcate
            digital tools of education, and enhance learning via flexible
            modalities.
          </p>
          <p className="mx-4 my-2 text-xl text-gray-600">
            As a brand new community of practice for teachers, we aspire to grow
            and transform the school experiences in the Pacific and develop our
            teaching capacity to empower us as we engage with students. CPT
            provides teachers with open forums in which they can remain
            connected to their practice and to their colleagues, especially
            during this tumultuous time.
          </p>
          <p className="mx-4 my-2 text-xl text-gray-600">
            We strongly believe in the{" "}
            <b>professional growth and evolution of our teachers</b>, thus our
            continuing professional development niches include active and
            reflective engagement in a range of professional experiences that
            are supplementary to our day-to-day responsibilities as teachers.
            These professional development sessions will enhance our members’
            skills and knowledge which will pave way for better student learning
            outcomes.
          </p>
          <p className="mx-4 my-2 text-xl text-gray-600">
            We also believe stalwartly that technology can and should eliminate
            the barriers to effective teaching and curriculum implementation,
            while promoting a culture of growth and collaboration across
            classrooms; therefore, making{" "}
            <b>professional development using educational technology tools</b>{" "}
            one of our priorities. When we need to seek guidance from the
            experts, we can always resort to our established and trusted expert
            network in digital teaching.
          </p>
          <p className="mx-4 my-2 text-xl text-gray-600">
            With the Community in place, we, the Pasifika teachers, work and
            strive together to prosper and professionally grow by convening in a
            sustained way. <b>Registration is free and open to all teachers</b>,
            so if you are a teacher in the Pacific community, join us and let’s
            learn, connect and move forward together.
          </p>
        </div>
      </div>

      <div className="block lg:h-screen lg:flex lg:max-h-1/2-screen lg:my-2 lg:flex-row">
        <div className="relative flex items-center justify-center lg:w-1/2 lg:mr-1 aspect-w-16 aspect-h-9 item-center lg:h-full lg:pb-0">
          <iframe
            src="https://www.youtube.com/embed/iaNnX6jkq80"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="relative flex items-center justify-center h-full ml-auto lg:w-1/2 item-center lg:h-full aspect-w-16 aspect-h-9 lg:pb-0">
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
      </div>

      <div className="bg-gray-100 ">
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

          <section className="flex items-center justify-center text-sm text-center text-white lg:text-lg">
            Supported by the Fiji National University
          </section>
        </div>
      </footer>
    </main>
  );
};

export default IndexPage;
