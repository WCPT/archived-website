import React from "react";

// import { Logo } from "../../components";

export function Footer() {
  return (
    <footer className="relative bg-sand">
      <div className="flex flex-col container mx-auto px-8 xs:px-12 sm:px-16">
        {/* <div className="z-10 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12 py-12 text-gray-500">
          <div className="flex flex-col items-center mx-auto md:mx-0 max-w-xs">
            <Logo theme="light" className="my-2 h-16 md:h-24" />
            <span className="text-center text-lg text-gray-50">
              Wisdom Community of Pasifika Teachers
            </span>
            <span className="text-center font-light text-gray-300">
              Learning, Sharing, Connecting and Moving Forward Together
            </span>
          </div>

          <div className="flex justify-center items-center mx-auto">
            <span className="text-gray-300">
            Wisdom Community of Pasifika Teachers &copy;
            {new Date().getFullYear()}
          </span>
          </div>

          <div className="flex justify-center items-center">
            <span className="text-gray-300">
              Supported by Fiji National University
            </span>
          </div>
        </div> */}

        <div className="z-10 flex flex-col md:flex-row justify-between container mx-auto py-12">
          <div className="flex justify-center items-center my-2">
            <span className="text-center text-gray-700">
              Wisdom Community of Pasifika Teachers &copy;
              {new Date().getFullYear()}
            </span>
          </div>
          <div className="flex justify-center items-center my-2">
            <span className="text-center text-gray-700">
              Supported by Fiji National University
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
