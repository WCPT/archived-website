import React, { useCallback } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MdOpenInNew, MdPlayCircleOutline } from "react-icons/md";

import { ImageHoc } from "../../components";
import { useState } from "react";

const DesktopHeroImage = ImageHoc(() => (
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

// const MobileHeroImage = ImageHoc(() => (
//   <StaticImage
//     className="fixed inset-0 flex items-center justify-center w-full h-full"
//     imgClassName="w-full"
//     alt="Pasific Island view from the sky"
//     src="../../images/bure.jpeg"
//     objectFit="cover"
//     objectPosition="50% 50%"
//     placeholder="dominantColor"
//   />
// ));

export const HeroSection = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  const showVideo = useCallback(() => {
    setVideoVisible((visible) => !visible);
  }, []);

  return (
    <section className="relative h-screen w-screen">
      <DesktopHeroImage
        containerClassName="relative h-screen w-screen"
        overlayClassName="absolute inset-0 z-10 opacity-60 bg-gradient-to-r from-black"
        credit="Photo by Hoodh Ahmed on Unsplash"
      />
      {/* <MobileHeroImage
        containerClassName="flex xs:hidden relative h-screen w-screen"
        overlayClassName="absolute inset-0 z-10 opacity-50 bg-black"
        credit="Photo by Vijeshwar Datt on Unsplash"
      /> */}

      <div className="lg:container absolute inset-0 z-10 flex items-center mx-auto px-8 xs:px-12 sm:px-16 text-white">
        <div className="flex flex-col">
          <h1 className="xs:hidden text-3xl text-center pb-4 font-light">
            Wisdom Community
            <br />
            of Pasifika Teachers
          </h1>
          <h2 className="max-w-md md:max-w-lg mb-4 font-serif font-light text-gray-50 text-xl xs:text-4xl md:text-4.5xl xs:leading-snug text-center sm:text-left">
            Learning, sharing, connecting and moving forward together.
          </h2>
          <div className="flex">
            <div className="my-4 mr-4 text-center sm:text-left">
              <span
                className="group cursor-pointer inline-flex items-center py-2 px-4 border border-gray-200 hover:border-blue-600 hover:bg-blue-600 transition-all duration-200"
                onClick={showVideo}
              >
                <MdPlayCircleOutline className="-ml-1 mr-2 text-xl" />
                <span className="text-gray-200 group-hover:text-white xs:text-lg transition-all duration-200">
                  Watch short video
                </span>
              </span>
            </div>
            <div className="my-4 text-center sm:text-left">
              <a
                className="group cursor-pointer inline-flex items-center py-2 px-4 border border-gray-200 hover:border-blue-600 hover:bg-blue-600 transition-all duration-200"
                href="https://clte.fnu.ac.fj/talanoakaro"
                target="_blank"
              >
                <span className="mr-2 text-gray-200 group-hover:text-white xs:text-lg transition-all duration-200">
                  Join our community
                </span>
                <MdOpenInNew className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* {isVideoVisible && (
        <div className="z-50 absolute inset-0 flex flex-1 items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="flex flex-1 p-64">
            <div className="flex flex-1 aspect-w-16 aspect-h-9 shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/iaNnX6jkq80"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
          <div className="absolute bottom-6 text-xl text-white opacity-60">Close</div>
        </div>
      )} */}
    </section>
  );
};

export default HeroSection;
