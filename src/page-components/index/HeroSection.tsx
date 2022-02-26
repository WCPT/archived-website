import React, { useState, useCallback } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MdOpenInNew, MdPlayCircleOutline } from "react-icons/md";
import { cx } from "@emotion/css";

import { ImageHoc } from "../../components";
import { useExtras } from "../../hooks";

const CoverImage = ImageHoc(() => (
  <StaticImage
    className="fixed inset-0 flex items-center justify-center w-full h-full"
    imgClassName="w-full"
    alt="Pasific Island view from the sky"
    src="../../images/blueocean.jpeg"
    objectFit="cover"
    objectPosition="50% 0%"
    placeholder="dominantColor"
  />
));

export const HeroSection = () => {
  const extras = useExtras();
  
  const [isVideoVisible, setVideoVisible] = useState(false);
  const [videoURL, setVideoURL] = useState(extras.videoURL);

  const showVideo = useCallback((e) => {
    e.stopPropagation();
    setVideoVisible(true);
    setVideoURL(extras.videoURL);
  }, []);

  const hideVideo = useCallback((e) => {
    e.stopPropagation();
    setVideoVisible(false);
    setVideoURL("");
  }, []);

  return (
    <section className="relative h-screen" onClick={hideVideo}>
      <CoverImage
        containerClassName="relative h-screen"
        overlayClassName="absolute inset-0 z-10 opacity-30 bg-gradient-to-r from-black to-gray-700"
        credit="Photo by Hoodh Ahmed on Unsplash"
      />
      {/* <CoverImage /> */}
      {/* <MobileHeroImage
        containerClassName="flex xs:hidden relative h-screen w-screen"
        overlayClassName="absolute inset-0 z-10 opacity-50 bg-black"
        credit="Photo by Vijeshwar Datt on Unsplash"
      /> */}

      <div className="lg:container absolute inset-0 z-10 flex items-center mx-auto px-8 xs:px-12 sm:px-16 text-white">
        <div className="flex flex-col mx-auto sm:mx-0">
          <h1 className="xs:hidden text-3xl text-center pb-4 font-light">
            Wisdom Community
            <br />
            of Pasifika Teachers
          </h1>
          <h2 className="max-w-md md:max-w-lg mb-4 font-sans sm:font-serif font-light text-gray-50 text-xl xs:text-4xl md:text-4.5xl xs:leading-snug text-center sm:text-left">
            Learning, sharing, connecting and moving forward together.
          </h2>
          <div className="grid gap-4 sm:flex sm:flex-row my-4">
            <div className="flex justify-center">
              <div
                className="group cursor-pointer inline-flex justify-center items-center py-2 px-4 w-52 xs:w-full border border-gray-200 hover:border-blue-600 hover:bg-blue-600 transition-all duration-200"
                onClick={showVideo}
              >
                <MdPlayCircleOutline className="-ml-1 mr-2 text-xl" />
                <span className="text-gray-200 group-hover:text-white xs:text-lg transition-all duration-200">
                  Watch short video
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <a
                className="group cursor-pointer inline-flex justify-center items-center py-2 px-4 w-52 xs:w-full border border-gray-200 hover:border-blue-600 hover:bg-blue-600 transition-all duration-200"
                href={extras.signUpLink}
                target="_blank"
              >
                <span className="mr-2 text-gray-200 group-hover:text-white xs:text-lg transition-all duration-200">
                  Join our community
                </span>
                <MdOpenInNew className="text-xl" />
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center my-2 text-gray-200 text-lg">
            <span className="mr-2 font-thin">Already a member?</span>
            <a
              href={extras.signInLink}
              className="hover:underline text-yellow-300 font-thin transition-all"
            >
              Sign in here!
            </a>
          </div>
        </div>
      </div>

      <div
        className={cx(
          "z-50 absolute inset-0 flex flex-1 items-center justify-center",
          { invisible: !isVideoVisible, visible: isVideoVisible }
        )}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="flex flex-1 p-8 lmd:p-32 xl:p-64">
          <iframe
            className="w-full aspect-video shadow-lg z-50"
            src={videoURL}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div
          onClick={hideVideo}
          className="absolute bottom-6 py-1 px-2.5 text-xl font-light text-gray-400 cursor-pointer hover:text-gray-200 hover:font-normal"
        >
          Close
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
