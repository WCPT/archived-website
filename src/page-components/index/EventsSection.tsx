import React, { useMemo } from "react";
import { cx } from "@emotion/css";
import { StaticImage } from "gatsby-plugin-image";
import { format } from "date-fns";

import { ImageHoc } from "../../components";
import { useEventPosts } from "../../hooks";

const BgImage = ImageHoc(() => (
  <StaticImage
    className="absolute inset-0 flex items-center justify-center w-full h-full"
    // imgClassName="w-full"
    alt="Vector image depicting a connected globe"
    src="../../images/globe.jpg"
    objectFit="cover"
    objectPosition="0% 0%"
    placeholder="dominantColor"
  />
));

export const EventsSection = () => {
  const eventPosts = useEventPosts();
  return (
    <section className="relative py-12 xs:py-16 sm:pb-36 bg-blue-700">
      <BgImage
        overlayClassName="absolute inset-0 z-10 opacity-80 bg-bahamaBlue"
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
          <div className="z-10 grid lg:grid-cols-3 grid-rows-1 gap-4 text-gray-600 overflow-hidden">
            {eventPosts.map((event, i) => (
              <EventCard key={i} {...event} href={event.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

const EventCard = React.memo(
  ({
    className,
    type,
    title,
    date,
    duration,
    href,
    registrationDeadline,
  }: {
    className?: string;
    type: string | null;
    title: string;
    date: Date;
    duration: string;
    href: string;
    registrationDeadline: string | null;
  }) => {
    return (
      <a
        href={href}
        className={cx(
          "group flex flex-col py-8 lg:py-12 2xl:py-16 px-10 2xl:px-12 text-gray-100 border border-gray-300 cursor-pointer transition-all duration-200 ease-linear hover:bg-gray-900 hover:border-gray-900 hover:shadow-xl",
          className
        )}
      >
        <span className="text-4xl 2xl:text-5xl font-light leading-tight tracking-wide">
          {format(date, "dd")}
        </span>
        <span className="2xl:text-lg uppercase tracking-widest">
          {format(date, "MMMM")}
        </span>
        <span className="mt-8 2xl:mt-12 mb-6 2xl:mb-8 text-xl 2xl:text-2xl leading-snug font-light">
          {type && `${type} -`} {title}
        </span>
        <div className="flex flex-col mt-auto mb-2 text-lg 2xl:text-xl font-light leading-snug">
          <span>{duration}</span>
          {registrationDeadline && <span>{registrationDeadline}</span>}
          <span className="font-normal text-base xl:text-lg group-hover:underline">
            View details
          </span>
        </div>
      </a>
    );
  }
);
