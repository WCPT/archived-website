import React, { useRef, useState, useCallback } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { cx } from "@emotion/css";

import { ImageHoc } from "../../components";

const SmilingFijianImage = ImageHoc(() => (
  <StaticImage
    alt="Happy islander student"
    src="../../images/smiling-fijian.jpeg"
    objectFit="contain"
    placeholder="dominantColor"
  />
));

const StudentPortraitImage = ImageHoc(() => (
  <StaticImage
    alt="Graduating student portrait"
    src="../../images/student-portrait.jpeg"
    objectFit="contain"
    placeholder="dominantColor"
  />
));

const SmilingStudentImage = ImageHoc(() => (
  <StaticImage
    alt="Smiling student"
    src="../../images/smiling-student.jpeg"
    objectFit="contain"
    placeholder="dominantColor"
  />
));

const IslanderStudentImage = ImageHoc(() => (
  <StaticImage
    alt="Happy islander student"
    src="../../images/islander-student.jpeg"
    objectFit="contain"
    placeholder="dominantColor"
  />
));

export const IntroSection = () => {
  const ref = useRef(null);
  const [showExtendedContent, setExtendedContentVisible] = useState(false);

  const toggleContentVisibility = useCallback(() => {
    setExtendedContentVisible((isVisible) => !isVisible);
    // @ts-ignore
    if (showExtendedContent && ref.current) {
      // @ts-ignore
      ref.current.scrollIntoView();
    }
  }, [showExtendedContent]);

  return (
    <section ref={ref} className="relative py-16 sm:py-20 bg-white">
      <div className="xl:container mx-auto px-8 xs:px-12 sm:px-16">
        <div className="flex justify-center mb-8">
          <h1 className="xs:mb-8 max-w-3xl text-2xl xs:text-3xl md:text-4xl text-center leading-snug md:leading-snug text-gray-500">
            Recalibrating Pacific education to empower our generations for
            global competency
          </h1>
        </div>
        <div className="grid lmd:grid-cols-5 xl:grid-cols-2 gap-8">
          <div className="lmd:col-span-3 xl:col-span-1">
            <div className="prose max-w-none lg:pr-6 text-lg lg:text-xl text-gray-600">
              <p className="first-letter:text-5xl">
                We are a growing network of teachers of all levels from the
                wider Pacific region, with a common goal and the will to
                recalibrate Pacific education to optimise students’ learning
                outcomes and empower our generations for global competency and
                well-being. Reflecting the communal lifestyle of the Pacific, we
                work together, share and collaborate to solve problems, and
                conduct research to raise the quality of learning throughout the
                Pacific.
              </p>
              <ExtendedContent isVisible={showExtendedContent} />
            </div>
            <Button
              className="block xs:hidden"
              onClick={toggleContentVisibility}
              text={showExtendedContent ? "Show less" : "Show more"}
            />
          </div>
          <div className="hidden lmd:grid xl:grid-cols-2 gap-4 auto-rows-min col-span-2 xl:col-span-1">
            <SmilingFijianImage
              containerClassName="relative"
              credit="Photo by Vijeshwar Datt on Unsplash"
              creditLink="https://vijeshdatt.com/"
            />
            <div className="relative hidden xl:inline top-1/10">
              <StudentPortraitImage
                containerClassName="relative"
                credit="Photo by Vijeshwar Datt on Unsplash"
                creditLink="https://vijeshdatt.com/"
              />
            </div>
            <SmilingStudentImage
              containerClassName="relative lg:hidden xl:inline"
              credit="Photo by Vijeshwar Datt on Unsplash"
              creditLink="https://vijeshdatt.com/"
            />
            <div className="relative hidden lg:inline xl:top-1/10">
              <IslanderStudentImage
                containerClassName="relative"
                credit="Photo by Vijeshwar Datt on Unsplash"
                creditLink="https://vijeshdatt.com/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

function ExtendedContent({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={cx(
        "opacity-0 xs:opacity-100 transition-opacity duration-300",
        {
          "hidden xs:block": !isVisible,
          "block opacity-100": isVisible,
        }
      )}
    >
      <p>
        Our work is guided by the Sustainable Development Goal 4 (SDG4) and the
        Pacific Regional Education Framework (PacREF). As the Wisdom Community
        (WisCom) for teachers, we aspire to contribute and work towards
        achieving the SDG4 and PacREF 2030 targets. Through our online
        communication and collaboration platform, ‘Please Talanoa Karo,
        Pasifika!’, our members engage in constructive discourse and reflect on
        topics of significant importance to teaching and learning in the Pacific
        context.
      </p>
      <p>
        We firmly believe in our members' professional growth and evolution; our
        continuing professional development niches span various topics, from
        learning design to teaching best practices to the classroom and beyond.
        Our professional development sessions enhance our members’ skills and
        knowledge for sustainable student learning outcomes. We also have
        established a trusted network of teaching experts who can guide
        community members with special needs and those in need, especially
        during an unexpected event or crisis.
      </p>
      <p>
        With the WisCom in place, we, the Pasifika Teachers, work and strive
        together to prosper and professionally grow by convening in a sustained
        way. If you are a Pasifika Teacher and yet to connect with us, we
        encourage you to register on our ‘Please Talanoa Karo, Pasifika!’
        platform. Registration is free; just bring your Pacific Islander spirit!
        Join us, and let’s learn, share, connect and move forward together.
      </p>
    </div>
  );
}

function Button({
  className,
  onClick,
  text,
}: {
  className?: string;
  onClick: () => void;
  text: string;
}) {
  return (
    <div className={className}>
      <span
        className="inline-block px-2 py-1.5 xs:p-2 rounded-sm text-blue-500 border border-blue-500 cursor-pointer"
        onClick={onClick}
      >
        {text}
      </span>
    </div>
  );
}
