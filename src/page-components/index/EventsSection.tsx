import React from "react";
import { cx } from "@emotion/css";

export const EventsSection = () => {
  return (
    <section className="relative py-12 xs:py-16 sm:py-24 bg-white">
      <div className="xl:container mx-auto px-8 xs:px-12 sm:px-16">
        <div className="lg:flex lg:flex-col justify-center mb-12 lg:mb-0">
          <div className="flex justify-center mb-8">
            <h1 className="xs:mb-8 text-center text-2xl xs:text-3xl md:text-4xl text-gray-500">
              Upcoming Events
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-center text-gray-600">
            <EventCard
              className="bg-blue-500 text-white"
              title="Lorem, ipsum dolor sit amet consectetur"
              day="08"
              month="June"
              time="7.30PM - 10PM"
              venue="Dolor voluptatibus"
            />
            <EventCard
              className="bg-gray-100"
              title="Lorem, ipsum dolor sit amet consectetur"
              day="13"
              month="July"
              time="7.30PM - 10PM"
              venue="Dolor voluptatibus"
            />
            <EventCard
              className="bg-gray-100"
              title="Lorem, ipsum dolor sit amet consectetur"
              day="23"
              month="August"
              time="7.30PM - 10PM"
              venue="Dolor voluptatibus"
            />
          </div>
        </div>
      </div>

      {/* Summary Cards Section */}
      {/* <div className="container mx-auto">
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
      </div> */}

      {/* Contact Us Section */}
      {/* <div className="container px-4 py-10 mx-auto text-left lg:py-8">
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
      </div> */}
    </section>
  );
};

export default EventsSection;

function EventCard({
  className,
  title,
  day,
  month,
  time,
  venue,
}: {
  className?: string;
  title: string;
  day: string;
  month: string;
  time: string;
  venue: string;
}) {
  return (
    <div className={cx(`flex flex-col mx-4 pt-10 pb-12 px-8 w-80`, className)}>
      <span className="text-4.5xl leading-tight font-light tracking-wide">
        {day}
      </span>
      <span className="uppercase tracking-widest">{month}</span>
      <span className="mt-10 mb-6 text-xl leading-tight ">{title}</span>
      <span className="text-lg">{time}</span>
      <span className="text-lg">@ {venue}</span>
    </div>
  );
}
