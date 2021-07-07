import React from "react";
import { RiCommunityFill } from "react-icons/ri";
import { GiJusticeStar } from "react-icons/gi";
import { MdGroup } from "react-icons/md";

export const MediaSection = () => {
  // const [isCreditsRegistationClicked, setIsCreditsRegistationClicked] =
  //   useState(false);

  // const handleCreditsRegistationClick = useCallback(() => {
  //   setIsCreditsRegistationClicked((current) => !current);
  // }, [isCreditsRegistationClicked]);

  return (
    <section className="relative bg-white xl:pt-16">
      <div className="container mx-auto">
        <div>
          <h1></h1>
        </div>
        <div className="grid grid-cols-4">
          <StatSlot
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
            stat="350+"
            text="Engagements to connect, create and collaborate"
          />
          <StatSlot
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
            }
            stat="900+"
            text="Registered members from across the Pacific region"
          />
          <StatSlot
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            }
            stat="85"
            text="Participation in professional development events"
          />
          <StatSlot
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 xl:h-12 xl:w-12 2xl:h-16 2xl:w-16 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
            stat="3"
            text="We are 3 weeks old"
          />
        </div>
      </div>
    </section>
  );
};

export default MediaSection;

function StatSlot({ icon, stat, text }) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      {icon}
      <span className="my-4 xl:my-2 text-2xl text-xl 2xl:text-2xl text-gray-900 font-bold">
        {stat}
      </span>
      <span className="max-w-xs text-xl xl:text-lg 2xl:text-xl text-gray-700">
        {text}
      </span>
    </div>
  );
}
