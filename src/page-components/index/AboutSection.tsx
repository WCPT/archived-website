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
  <div className="relative" style={{ top: "10%" }}>
    <StaticImage
      alt="Graduating student portrait"
      src="../../images/student-portrait.jpeg"
      objectFit="contain"
      placeholder="dominantColor"
    />
  </div>
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
  <div className="relative" style={{ top: "10%" }}>
    <StaticImage
      alt="Happy islander student"
      src="../../images/islander-student.jpeg"
      objectFit="contain"
      placeholder="dominantColor"
    />
  </div>
));

export const AboutSection = () => {
  const ref = useRef(null);
  const [showExtendedContent, setExtendedContentVisible] = useState(false);

  const toggleContentVisibility = useCallback(() => {
    setExtendedContentVisible((isVisible) => !isVisible);
    // @ts-ignore
    if (showExtendedContent && ref.current) {
      // @ts-ignore
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showExtendedContent]);

  return (
    <section ref={ref} className="relative py-12 xs:py-16 sm:py-20 bg-white">
      <div className="xl:container mx-auto px-8 xs:px-12 sm:px-16">
        <div className="flex justify-center mb-8">
          <h1 className="xs:mb-8 max-w-3xl text-2xl xs:text-3xl md:text-4xl text-center leading-snug md:leading-snug text-gray-500">
            Recalibrating Pacific education to empower our generations for
            global competency
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="lg:pr-6 xl:pr-12 text-lg xl:text-xl text-gray-600 prose">
              <p className="first-letter:text-5xl first-letter:font-bold">
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
              text={showExtendedContent ? "Show less" : "Read more"}
            />
          </div>
          <div className="hidden md:grid md:grid-cols-2 gap-4 auto-rows-min">
            <SmilingFijianImage
              containerClassName="relative"
              // creditClassName="px-2 py-1"
              // credit="Vijeshwar Datt"
              // creditLink="https://vijeshdatt.com/"
            />
            <StudentPortraitImage
              containerClassName="relative"
              // creditClassName="px-2 py-1"
              // credit="Vijeshwar Datt"
              // creditLink="https://vijeshdatt.com/"
            />
            <SmilingStudentImage
              containerClassName="relative"
              // creditClassName="px-2 py-1"
              // credit="Vijeshwar Datt"
              // creditLink="https://vijeshdatt.com/"
            />
            <IslanderStudentImage
              containerClassName="relative"
              // creditClassName="px-2 py-1"
              // credit="Vijeshwar Datt"
              // creditLink="https://vijeshdatt.com/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

function ExtendedContent({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={cx(
        "h-0 opacity-0 pointer-events-none transition-opacity duration-300 xs:visible xs:h-auto xs:opacity-100 ",
        { "h-auto opacity-100 pointer-events-auto": isVisible }
      )}
    >
      <p>
        Our work is guided by the Sustainable Development Goal 4 (SDG4) and the
        Pacific Regional Education Framework (PacREF). As a Wisdom Community
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
        className="inline-block px-2 py-1.5 xs:p-2 text-white rounded-sm bg-blue-900 cursor-pointer"
        onClick={onClick}
      >
        {text}
      </span>
    </div>
  );
}
