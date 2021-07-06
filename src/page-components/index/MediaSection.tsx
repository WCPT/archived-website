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
      <div className="bg-cloud lmd:pt-16 xl:pt-0">
        <div className="grid xl:grid-cols-2">
          <div className="flex items-center justify-center lmd:px-16 xl:px-0">
            <div className="flex flex-1 aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/iaNnX6jkq80"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-12 sm:gap-4 justify-center py-20 lg:py-28 xl:py-6 px-8 xs:px-12 sm:px-16">
            <div className="flex flex-col justify-center items-center text-center">
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
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="my-4 xl:my-2 text-2xl text-gray-700 font-bold">
                350+
              </span>
              <span className="max-w-xs text-xl text-gray-700">
                Engagements to connect, create and collaborate
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
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
                  stroke-width="2"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
              <span className="my-4 xl:my-2 text-2xl text-gray-700 font-bold">
                900+
              </span>
              <span className="max-w-xs text-xl text-gray-700">
                Registered members from across the Pacific region
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
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
                  stroke-width="2"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
              <span className="my-4 xl:my-2 text-2xl text-gray-700 font-bold">85</span>
              <span className="max-w-xs text-xl text-gray-700">
                Participation in professional development events
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
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
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="my-4 xl:my-2 text-2xl text-gray-700 font-bold">3</span>
              <span className="max-w-xs text-xl text-gray-700">
                We are 3 weeks old
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
