import React from "react";
import { cx } from "@emotion/css";

import { Logo } from "../../components";
import SocialLinks from "./SocialLinks";

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
