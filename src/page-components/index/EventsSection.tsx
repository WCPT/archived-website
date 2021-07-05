import React from "react";
// import { RiCommunityFill } from "react-icons/ri";
// import { GiJusticeStar } from "react-icons/gi";
// import { MdGroup } from "react-icons/md";

export const EventsSection = () => {
  return (
    <section className="relative py-12 xs:py-16 sm:py-16 bg-white">
      <div className="xl:container mx-auto px-8 xs:px-12 sm:px-16">
        <div className="lg:flex lg:flex-col justify-center mb-12 lg:mb-0">
          <h1 className="mb-4 max-w-lg xs:font-semibold text-2xl md:text-3xl leading-snug md:leading-snug text-gray-800">
            Upcoming Events
          </h1>
          <div className="flex justify-center text-gray-600">
            <EventCard />
            <EventCard />
            <EventCard />
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

function EventCard() {
  return (
    <div className="flex flex-col mx-2 p-6 w-60 bg-blue-500 text-white">
      <span className="text-4.5xl leading-tight font-light tracking-wide">08</span>
      <span className="text-sm uppercase">June</span>
      <span className="mt-6 mb-2 text-lg font-light">Paris Start-up Innovation Summit</span>
      <span className="text-sm font-light">7.30PM - 10PM</span>
      <span className="text-sm font-light">@ Algolia Paris - Bridge (200)</span>
    </div>
  )
}