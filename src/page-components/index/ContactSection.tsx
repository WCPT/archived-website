import React from "react";
// import { StaticImage } from "gatsby-plugin-image";
import { cx } from "@emotion/css";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

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
    <section className="relative py-12 xs:py-12 bg-gray-50">
      {/* <BgImage
        overlayClassName="absolute inset-0 z-10 opacity-60 bg-white"
        credit="Background vector created by Harryarts on freepik.com"
        creditLink="https://www.freepik.com/vectors/background"
      /> */}
      <div className="xl:container mx-auto mb-12 lg:mb-0 py-16 px-8 xs:px-12 sm:px-16 flex flex-col">
        <h2 className="z-10 font-sans font-black text-4xl tracking-tight text-gray-900">
          <span className="block">Want to get in touch?</span>
          <span className="block bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
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
  const socialMedia = [
    {
      href: "https://www.facebook.com/wiscompt",
      title: "Facebook",
      Icon: FaFacebookSquare,
      hoverClass: "bg-blue-800",
    },
    {
      href: "https://twitter.com/wiscompt",
      title: "Twitter",
      Icon: FaTwitter,
      hoverClass: "bg-blue-400",
    },
    {
      href: "https://www.youtube.com/channel/UCvDhc1CS_QAxmnMCECMd7iQ",
      title: "Youtube",
      Icon: FaYoutube,
      hoverClass: "bg-red-600",
    },
    {
      href: "mailto:pasifikateachers@gmail.com",
      title: "Email",
      Icon: MdEmail,
      hoverClass: "bg-blue-500",
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
            className={`mr-2 p-1.5 md:p-2.5 text-4xl md:text-5xl rounded-md hover:text-white bg-gray-100 hover:${props.hoverClass} transition-all duration-300`}
          />
        </a>
      ))}
    </div>
  );
}
