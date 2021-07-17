import React, { useMemo } from "react";
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

  const social = useMemo(
    () => [
      {
        href: links.facebook,
        title: "Facebook",
        Icon: FaFacebookSquare,
        hoverTextClass: "text-blue-800",
        hoverBgClass: "bg-blue-800",
      },
      {
        href: links.twitter,
        title: "Twitter",
        Icon: FaTwitter,
        hoverTextClass: "text-blue-400",
        hoverBgClass: "bg-blue-400",
      },
      {
        href: links.youtube,
        title: "Youtube",
        Icon: FaYoutube,
        hoverTextClass: "text-red-600",
        hoverBgClass: "bg-red-600",
      },
      {
        href: links.email,
        title: "Email",
        Icon: MdEmail,
        hoverTextClass: "text-blue-500",
        hoverBgClass: "bg-blue-500",
      },
    ],
    []
  );

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
            {social.map(({ Icon, ...props }, i) => (
              <a
                key={i}
                href={props.href}
                title={props.title}
                target="_blank"
                rel="noopener"
              >
                <Icon
                  className={cx(
                    `mx-1 p-1.5 md:p-2.5 text-4xl md:text-5xl rounded-md transition-all duration-300`,
                    {
                      [`hover:${props.hoverTextClass} hover:bg-white`]:
                        theme !== "dark",
                      [`hover:text-white bg-gray-100 hover:${props.hoverBgClass}`]:
                        theme === "dark",
                    }
                  )}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
