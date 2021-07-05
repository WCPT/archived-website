import React from "react";

export const MediaSection = () => {
  // const [isCreditsRegistationClicked, setIsCreditsRegistationClicked] =
  //   useState(false);

  // const handleCreditsRegistationClick = useCallback(() => {
  //   setIsCreditsRegistationClicked((current) => !current);
  // }, [isCreditsRegistationClicked]);

  return (
    <section className="relative bg-cloud pt-16 pb-0 lmd:pb-16">
      <div className="xl:container grid lg:grid-cols-5 xl:grid-cols-2 lg:gap-8 mx-auto lmd:px-16">
        <div className="order-2 lg:order-1 flex items-center justify-center lg:pr-6 col-span-3 xl:col-span-1">
          <div className="flex flex-1 aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/iaNnX6jkq80"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:flex lg:flex-col justify-center col-span-2 xl:col-span-1 mb-12 lg:mb-0 px-8 xs:px-12 sm:px-16 lmd:px-0">
          <h1 className="mb-4 max-w-lg xs:font-semibold text-2xl md:text-3xl leading-normal md:leading-normal text-gray-800">
            We welcome teachers of all levels from the wider Pacific region
          </h1>
          <div className="prose max-w-none text-lg text-gray-600">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet pulvinar sapien. Aenean cursus felis eget lacus ultrices
              bibendum. Duis sagittis purus sem, ut facilisis augue pharetra id.
              Aenean fermentum nec quam pulvinar suscipit. Duis eu arcu tortor.
              Pellentesque efficitur nulla vitae ex efficitur aliquam. Mauris
              iaculis augue neque, in finibus nulla tempor vel. Duis eu
              dignissim sem. Duis sodales ac risus in ultricies. Suspendisse
              potenti. Proin molestie sapien non est hendrerit, in rhoncus nunc
              convallis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
