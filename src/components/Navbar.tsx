import React from "react";
import { cx } from "@emotion/css";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

import { Logo } from ".";

interface Props {
  className?: string;
  theme?: "light" | "dark";
}

export const Navbar = ({ className, theme = "dark" }: Props) => {
  return (
    <nav
      className={cx(
        `flex flex-col w-full py-10 px-8 xs:px-12 sm:px-16 text-gray-100 transition-all`,
        className,
        { "text-black": theme === "dark" }
      )}
    >
      <div
        className={cx("flex items-center w-full", {
          "text-black": theme === "dark",
        })}
      >
        <a href="/" className="flex items-center">
          <Logo theme={theme} className="mr-4 h-16 md:h-20 transition-all" />
          <span className="hidden xs:block w-44 text-lg md:text-xl font-light">
            Wisdom Community of Pasifika Teachers
          </span>
        </a>

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
