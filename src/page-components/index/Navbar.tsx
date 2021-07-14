import React from "react";
import { cx } from "@emotion/css";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

import { Logo } from "../../components";

export const Navbar = () => {
  return (
    <nav
      className={cx(
        `flex flex-col top-0 z-50 w-full absolute py-10 px-8 xs:px-12 sm:px-16 text-gray-100 transition-all`
        // { "text-black bg-white": hasScrolled }
      )}
    >
      <div
        className={cx("flex items-center w-full", {
          // "text-black": hasScrolled,
        })}
      >
        <Logo
          // theme={hasScrolled ? "dark" : "light"}
          className="mr-4 h-16 md:h-20 transition-all"
        />
        <span className="hidden xs:block w-44 text-lg md:text-xl font-light">
          Wisdom Community of Pasifika Teachers
        </span>

        <div className="ml-auto">
          <SocialLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

function SocialLinks({ className }: { className?: string }) {
  const socialMedia = [
    {
      href: "https://www.facebook.com/wiscompt",
      title: "Facebook",
      Icon: FaFacebookSquare,
      hoverClass: "text-blue-800",
    },
    {
      href: "https://twitter.com/wiscompt",
      title: "Twitter",
      Icon: FaTwitter,
      hoverClass: "text-blue-400",
    },
    {
      href: "https://www.youtube.com/channel/UCvDhc1CS_QAxmnMCECMd7iQ",
      title: "Youtube",
      Icon: FaYoutube,
      hoverClass: "text-red-600",
    },
    {
      href: "mailto:pasifikateachers@gmail.com",
      title: "Email",
      Icon: MdEmail,
      hoverClass: "text-blue-500",
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
            className={`mx-1 p-1.5 md:p-2.5 text-4xl md:text-5xl rounded-md hover:${props.hoverClass} hover:bg-white transition-all duration-300`}
          />
        </a>
      ))}
    </div>
  );
}
