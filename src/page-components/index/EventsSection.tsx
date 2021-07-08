import React from "react";
import { cx } from "@emotion/css";

export const EventsSection = () => {
  return (
    <section className="relative py-12 xs:py-16 sm:py-24 bg-white">
      <div className="container mx-auto min-h-1/2-screen">
        <div className="grid grid-cols-2 mb-12 lg:mb-0">
          <div className="flex flex-col my-8 px-16 max-w-lg">
            <span className="text-lg text-gray-500 font-mono tracking-wider">
              #WCPTevents
            </span>
            <h1 className="mt-1 xs:mb-4 text-2xl xs:text-3xl md:text-4xl text-gray-600">
              Upcoming Events
            </h1>
            <span className="text-lg text-gray-500">
              Join us in our virtual events. We carry out workshops and meetups
              that you can virtually join from anywhere.
            </span>
          </div>
          <div className="absolute right-0 flex flex-col md:flex-row justify-center ml-auto text-gray-600">
            <EventCard
              className="bg-blue-500 text-white border border-gray-100"
              title="Lorem, ipsum dolor sit amet consectetur"
              day="08"
              month="June"
              time="7.30PM - 10PM"
              venue="Dolor voluptatibus"
            />
            <EventCard
              className="bg-gray-100 text-gray-500 border border-gray-100"
              title="Lorem, ipsum dolor sit amet consectetur"
              day="13"
              month="July"
              time="7.30PM - 10PM"
              venue="Dolor voluptatibus"
            />
            <EventCard
              className="bg-gray-100 text-gray-500 border border-gray-100"
              title="Lorem, ipsum dolor sit amet consectetur"
              day="23"
              month="August"
              time="7.30PM - 10PM"
              venue="Dolor voluptatibus"
            />
          </div>
        </div>
      </div>

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
    <div className={cx(`flex flex-col ml-4 py-10 px-8 w-80`, className)}>
      <span className="text-4.5xl leading-tight font-light tracking-wide">
        {day}
      </span>
      <span className="uppercase tracking-widest">{month}</span>
      <span className="mt-10 mb-6 text-xl leading-tight ">{title}</span>
      <div className="mb-2">
        <span className="text-lg">{time}</span>
        <span className="text-lg">@ {venue}</span>
      </div>
    </div>
  );
}
