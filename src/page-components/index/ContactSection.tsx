import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { cx } from "@emotion/css";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

import { useSocialLinks } from "../../hooks";
// import { ImageHoc } from "../../components";

// const BgImage = ImageHoc(() => (
//   <StaticImage
//     className="absolute inset-0 flex items-center justify-center w-full h-full"
//     imgClassName="w-full"
//     alt=""
//     src="../../images/blueabstract.jpg"
//     objectFit="cover"
//     objectPosition="50% 0%"
//     placeholder="dominantColor"
//   />
// ));

export const ContactSection = () => {
  return (
    <section className="relative py-12 xs:py-12 bg-white">
      {/* <BgImage
        overlayClassName="absolute inset-0 z-10 opacity-60 bg-white"
        credit="Background vector created by Harryarts on freepik.com"
        creditLink="https://www.freepik.com/vectors/background"
      /> */}
      <div className="xl:container mx-auto py-16 px-8 xs:px-12 sm:px-16 flex flex-col">
        <h2 className="z-10 font-sans font-black text-3xl xs:text-4xl tracking-tight text-gray-900">
          <span className="block">Want to get in touch?</span>
          <span className="block bg-bahamaBlue bg-clip-text text-transparent">
            Reach us through social media or email us!
          </span>
        </h2>
        <div className="z-10 mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <SocialLinks className="text-gray-600" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

function SocialLinks({ className }: { className?: string }) {
  const links = useSocialLinks();

  const socialMedia = [
    {
      href: links.facebook,
      title: "Facebook",
      Icon: FaFacebookSquare,
      hoverBgClass: "bg-blue-800",
    },
    {
      href: links.twitter,
      title: "Twitter",
      Icon: FaTwitter,
      hoverBgClass: "bg-blue-400",
    },
    {
      href: links.youtube,
      title: "Youtube",
      Icon: FaYoutube,
      hoverBgClass: "bg-red-600",
    },
    {
      href: links.email,
      title: "Email",
      Icon: MdEmail,
      hoverBgClass: "bg-blue-500",
    },
  ];

  return (
    <div className={cx(`flex items-center`, className)}>
      {socialMedia.map(({ Icon, ...props }, i) => (
        <a
          key={i}
          href={props.href}
          title={props.title}
          target="_blank"
          rel="noopener"
        >
          <Icon
            className={`mr-2 p-2.5 text-5xl rounded-md hover:text-white bg-gray-100 hover:${props.hoverBgClass} transition-all duration-300`}
          />
        </a>
      ))}
    </div>
  );
}
