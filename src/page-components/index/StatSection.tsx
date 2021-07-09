import React from "react";

export const StatSection = () => {
  return (
    <section className="relative py-12 bg-white">
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex justify-center mb-16">
            <h1 className="xs:mb-8 max-w-2xl text-center text-2xl xs:text-3xl md:text-4xl leading-snug md:leading-snug text-gray-700">
              We are an active, growing community in the wider Pacific region
            </h1>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <StatSlot
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 xl:h-20 xl:w-20 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
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
                  className="h-16 w-16 xl:h-20 xl:w-20 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
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
                  className="h-16 w-16 xl:h-20 xl:w-20 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
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
                  className="h-16 w-16 xl:h-20 xl:w-20 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.4"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              stat="3"
              text="We are 3 weeks old"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatSection;

function StatSlot({ icon, stat, text }) {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      {icon}
      <span className="my-4 xl:my-2 text-2xl 2xl:text-2xl text-gray-900 font-bold">
        {stat}
      </span>
      <span className="max-w-xs text-xl leading-normal text-gray-500">
        {text}
      </span>
    </div>
  );
}
