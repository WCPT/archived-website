import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { ImageHoc } from "../../components";

const BgImage = ImageHoc(() => (
  <StaticImage
    className="absolute inset-0 flex items-center justify-center w-full h-full"
    imgClassName="w-full"
    alt="Vector image depicting a connected globe"
    src="../../images/globe.jpg"
    objectFit="cover"
    objectPosition="50% 0%"
    placeholder="dominantColor"
  />
));

export const EventsSection = () => {
  return (
    <section className="relative py-12 xs:py-16 sm:pb-36 bg-gradient-to-r from-blue-700 to-blue-500">
      <BgImage
        overlayClassName="absolute inset-0 z-10 opacity-80 bg-gradient-to-r from-blue-700 to-blue-500"
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
              title="Short Course - Enhancing Grammar Basics"
              day="08"
              month="June"
              time="7.30PM - 10PM"
              venue="Dolor voluptatibus"
            />
            <EventCard
              title="Create Digital Worksheets via Google Forms"
              day="13"
              month="July"
              time="7.30PM - 10PM"
              venue="Dolor voluptatibus"
            />
            <EventCard
              title="Zoom - Level up your Zoom skills!"
              day="23"
              month="August"
              time="7.30PM - 10PM"
              venue="Dolor voluptatibus"
            />
          </div>
        </div>
      </div>
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
    <div className="flex flex-col h-full py-8 lg:py-12 2xl:py-16 px-10 2xl:px-12 text-gray-100 border border-gray-300 cursor-pointer transition-all duration-200 ease-linear hover:bg-gray-900 hover:border-gray-700 hover:shadow-xl hover:opacity-90">
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
