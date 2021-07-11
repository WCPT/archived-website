import React from "react";
import { cx } from "@emotion/css";

export const EventsSection = () => {
  return (
    <section className="relative py-12 xs:py-16 sm:pt-44 sm:pb-40 bg-gradient-to-r from-blue-700 to-blue-500">
      <div className="container mx-auto min-h-1/2-screen">
        <div className="grid 2xl:grid-cols-2 auto-rows-min mb-12 lg:mb-0">
          <div className="flex flex-col my-24 px-16 max-w-lg">
            <span className="text-lg text-gray-100 font-mono tracking-wider">
              #WCPTevents
            </span>
            <h1 className="mt-1 xs:mb-4 text-2xl xs:text-3xl md:text-4xl text-white">
              Upcoming Events
            </h1>
            <span className="text-lg text-gray-100">
              Join us in our virtual events. We carry out workshops and meetups
              that you can virtually join from anywhere.
            </span>
          </div>
          <div className="absolute top-1/2 xl:top-1/4 right-0 flex flex-col md:flex-row ml-auto text-gray-600">
            <EventCard
              highlighted
              title="Lorem, ipsum dolor sit amet consectetur"
              day="08"
              month="June"
              time="7.30PM - 10PM"
              venue="Dolor voluptatibus"
            />
            <EventCard
              title="Lorem, ipsum dolor sit amet consectetur"
              day="13"
              month="July"
              time="7.30PM - 10PM"
              venue="Dolor voluptatibus"
            />
            <EventCard
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
  highlighted,
  title,
  day,
  month,
  time,
  venue,
}: {
  highlighted?: boolean;
  title: string;
  day: string;
  month: string;
  time: string;
  venue: string;
}) {
  return (
    <div
      className={cx(`flex flex-col ml-4 h-full border-gray-200 cursor-pointer transition-all duration-200 ease-linear`, {
        "py-10 px-8 w-80 bg-white text-gray-500 border":
          !highlighted,
        "py-16 px-12 w-96 text-gray-100 border": highlighted,
      })}
    >
      <span
        className={cx(`leading-tight font-light tracking-wide`, {
          "text-4xl": !highlighted,
          "text-5xl": highlighted,
        })}
      >
        {day}
      </span>
      <span
        className={cx(`uppercase tracking-widest`, {
          "text-lg": highlighted,
        })}
      >
        {month}
      </span>
      <span
        className={cx(`mt-12 mb-8 leading-tight`, {
          "text-xl": !highlighted,
          "text-2xl font-light": highlighted,
        })}
      >
        {title}
      </span>
      <div
        className={cx(`flex flex-col mb-2`, {
          "text-lg": !highlighted,
          "text-xl font-light": highlighted,
        })}
      >
        <span>{time}</span>
        <span>@ {venue}</span>
      </div>
    </div>
  );
}
