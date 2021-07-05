import React from "react";
import { RiCommunityFill } from "react-icons/ri";
import { GiJusticeStar } from "react-icons/gi";
import { MdGroup } from "react-icons/md";

export const EventsSection = () => {
  return (
    <section className="relative bg-white">
      {/* Upcoming Events Section */}
      <div className="container py-10 mx-auto">
        <h1 className="px-6 mb-4 text-2xl font-bold ">Upcoming Events</h1>

        <div className="flex flex-col mx-8 lg:flex-row">
          <div className="flex mx-1 my-2 text-center lg:flex-row">
            <div className="flex flex-col items-start p-4 text-white bg-green-500 border-l-8 border-primary ">
              <h1 className="text-2xl">Some Event</h1>
              <h2 className="text-lg text-black">10:30pm, 12th August, 2021</h2>
              <p className="text-lg text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                voluptatibus ut quas vel incidunt.
              </p>
            </div>
          </div>
          <div className="flex mx-1 my-2 text-center lg:flex-row">
            <div className="flex flex-col items-start p-4 text-white bg-blue-400 border-l-8 border-primary ">
              <h1 className="text-2xl">Some Event</h1>
              <h2 className="text-lg text-black">10:30pm, 12th August, 2021</h2>
              <p className="text-lg text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                voluptatibus ut quas vel incidunt.
              </p>
            </div>
          </div>
          <div className="flex mx-1 my-2 text-center lg:flex-row">
            <div className="flex flex-col items-start p-4 text-white bg-red-400 border-l-8 border-primary ">
              <h1 className="text-2xl">Some Event</h1>
              <h2 className="text-lg text-black">10:30pm, 12th August, 2021</h2>
              <p className="text-lg text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                voluptatibus ut quas vel incidunt.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Cards Section */}
      <div className="container mx-auto">
        <div className="flex flex-col justify-center mx-8 text-center border-t-2 border-primary lg:flex-row">
          <div className="flex flex-col flex-1 px-4 py-6 text-2xl text-gray-600 border-b-2 border-primary lg:py-4 lg:mr-4 ">
            <MdGroup className="mx-auto text-5xl" />
            <h1 className="mx-auto my-4 text-5xl font-semibold text-gray-700">
              100
            </h1>
            <p>Joint Programmes focused on Integrated Social Protection</p>
          </div>
          <div className="flex flex-col flex-1 py-6 text-2xl text-gray-600 border-b-2 border-primary lg:mx-2">
            <RiCommunityFill className="mx-auto text-5xl" />
            <h1 className="mx-auto my-4 text-5xl font-semibold text-gray-700">
              1000
            </h1>
            <p>Partners working together</p>
          </div>
          <div className="flex flex-col flex-1 px-4 py-6 text-2xl text-gray-600 border-b-2 border-primary lg:ml-4">
            <GiJusticeStar className="mx-auto text-5xl" />
            <h1 className="mx-auto my-4 text-5xl font-semibold text-gray-700">
              500
            </h1>
            <p>Innovative solutions tested</p>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="container px-4 py-10 mx-auto text-left lg:py-8">
        <h1 className="mx-4 my-1 text-2xl font-bold">Contact Us</h1>
        <p className="mx-4 text-xl text-gray-600">
          If you have any queries, feel free to contact us by emailing to
          <a
            className="pl-1 text-blue-500 underline break-words"
            href="mailto:pasifikateachers@gmail.com"
          >
            pasifikateachers@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default EventsSection;
