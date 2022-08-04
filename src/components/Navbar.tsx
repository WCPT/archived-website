import React from "react";
import { cx } from "@emotion/css";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

import { useSocialLinks } from "../hooks";
import Logo from "./Logo";

interface Props {
  className?: string;
  theme?: "light" | "dark";
}

export const Navbar = ({ className, theme = "dark" }: Props) => {
  const links = useSocialLinks();

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
          <div className="flex items-center">
            <SocialIcon
              icon={FaFacebookSquare}
              href={links.facebook}
              title="Facebook"
              className={
                theme !== "dark"
                  ? `hover:text-blue-800 hover:bg-white`
                  : `hover:text-white bg-gray-100 hover:bg-blue-800`
              }
            />
            <SocialIcon
              icon={FaTwitter}
              href={links.twitter}
              title="Twitter"
              className={
                theme !== "dark"
                  ? `hover:text-blue-400 hover:bg-white`
                  : `hover:text-white bg-gray-100 hover:bg-blue-400`
              }
            />
            <SocialIcon
              icon={FaYoutube}
              href={links.youtube}
              title="Youtube"
              className={
                theme !== "dark"
                  ? `hover:text-red-600 hover:bg-white`
                  : `hover:text-white bg-gray-100 hover:bg-red-600`
              }
            />
            <SocialIcon
              icon={MdEmail}
              href={links.email}
              title="Email"
              className={
                theme !== "dark"
                  ? `hover:text-blue-500 hover:bg-white`
                  : `hover:text-white bg-gray-100 hover:bg-blue-500`
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const SocialIcon = ({ icon: Icon, href, title, className }) => {
  return (
    <a href={href} title={title} target="_blank" rel="noopener">
      <Icon
        className={cx(
          `mx-1 p-1.5 md:p-2.5 text-4xl md:text-5xl rounded-md transition-all duration-300`,
          className
        )}
      />
    </a>
  );
};

export default Navbar;
