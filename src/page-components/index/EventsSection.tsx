import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { cx } from "@emotion/css";

import { ImageHoc } from "../../components";

const BgImage = ImageHoc(() => (
  <StaticImage
    className="absolute inset-0 flex items-center justify-center w-full h-full"
    imgClassName="w-full"
    alt="Pasific Island view from the sky"
    src="../../images/globe.jpg"
    objectFit="cover"
    objectPosition="50% 0%"
    placeholder="dominantColor"
  />
));

export const EventsSection = () => {
  return (
    <section className="relative py-12 xs:py-16 sm:pb-36">
      <BgImage
        overlayClassName="absolute inset-0 z-10 opacity-80 bg-gradient-to-r from-black"
        credit="Background vector created by liuzishan on freepik.com"
        creditLink="https://www.freepik.com/vectors/background"
      />
      <div className="xl:container mx-auto">
        <div className="flex flex-col mb-12 lg:mb-0 px-8 xs:px-12 sm:px-16">
          <div className="z-10 flex flex-col my-16 max-w-lg">
            <span className="text-lg text-gray-100 font-mono tracking-wider">
              #WCPTevents
            </span>
            <h1 className="mt-1 mb-2 xs:mb-4 text-2xl xs:text-3xl md:text-4xl text-white">
              Upcoming Events
            </h1>
            <span className="text-lg text-gray-100">
              Join us in our virtual events. We carry out workshops and meetups
              that you can virtually join from anywhere.
            </span>
          </div>
          <div className="z-10 grid lg:grid-cols-3 gap-4 text-gray-600">
            <EventCard
              highlighted
              title="Providing remote learning support for students"
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
    <div className="flex flex-col h-full py-8 lg:py-12 2xl:py-16 px-10 2xl:px-12 text-gray-100 border border-gray-300 cursor-pointer transition-all duration-200 ease-linear">
      <span className="text-4xl 2xl:text-5xl font-light leading-tight tracking-wide">
        {day}
      </span>
      <span className="2xl:text-lg uppercase tracking-widest">{month}</span>
      <span className="mt-8 2xl:mt-12 mb-6 2xl:mb-8 text-xl 2xl:text-2xl leading-snug font-light">
        {title}
      </span>
      <div className="flex flex-col mb-2 text-lg 2xl:text-xl font-light">
        <span>{time}</span>
        <span>@ {venue}</span>
      </div>
    </div>
  );
}
