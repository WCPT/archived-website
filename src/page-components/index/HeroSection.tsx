import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { MdOpenInNew } from "react-icons/md";

import { ImageHoc } from "../../components";

const DesktopHeroImage = ImageHoc(() => (
  <StaticImage
    className="fixed inset-0 flex items-center justify-center w-full h-full"
    imgClassName="w-full h-auto"
    alt="Pasific Island view from the sky"
    src="../../images/blueocean.jpeg"
    objectFit="cover"
    objectPosition="50% 0%"
    placeholder="dominantColor"
  />
));

const MobileHeroImage = ImageHoc(() => (
  <StaticImage
    className="fixed inset-0 flex items-center justify-center w-full h-full"
    imgClassName="w-full h-auto"
    alt="Pasific Island view from the sky"
    src="../../images/bure.jpeg"
    objectFit="cover"
    objectPosition="50% 50%"
    placeholder="dominantColor"
  />
));

export const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen">
      <DesktopHeroImage
        containerClassName="hidden xs:flex relative h-screen w-screen"
        overlayClassName="absolute inset-0 z-10 opacity-50 bg-gradient-to-r from-black"
        credit="Photo by Hoodh Ahmed on Unsplash"
      />
      <MobileHeroImage
        containerClassName="flex xs:hidden relative h-screen w-screen"
        overlayClassName="absolute inset-0 z-10 opacity-50 bg-black"
        credit="Photo by Vijeshwar Datt on Unsplash"
      />

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
    </section>
  );
};

export default HeroSection;
