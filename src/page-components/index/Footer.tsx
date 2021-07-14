import React from "react";

import { Logo } from "../../components";

export function Footer() {
  return (
    <footer className="relative flex bg-white shadow-lg border-t border-gray-100">
      <div className="container grid grid-cols-1 gap-4 py-12 px-8 xs:px-12 sm:px-16 mx-auto lg:grid-cols-3 lg:gap-12 text-gray-500">
        <div className="flex flex-col items-center">
          <Logo theme="dark" className="my-2 h-16 md:h-24" />
          <span className="text-lg text-gray-900">Wisdom Community of Pasifika Teachers</span>
          <span className="text-center">Learning, Sharing, Connecting and Moving Forward Together</span>
        </div>
        {/* <LogoAlt className="mx-auto h-28 xl:h-32" /> */}

        <div className="flex justify-center items-center">
          <span className="">
            Wisdom Community of Pasifika Teachers &copy;
            {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex justify-center items-center">
          <span>Supported by Fiji National University</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
