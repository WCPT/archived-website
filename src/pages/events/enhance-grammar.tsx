import React from "react";

import Event from "../../templates/event";

export const EventPage = () => {
  return (
    <Event
      pageContext={{
        registrationUrl: "https://forms.gle/hNtu6sCUyLazBzEX8",
        subtitle: "Short Course",
        title: "Enhancing Grammar Basics",
        duration: "12 July - 20 August, 2021",
        body: (
          <ul>
            This is a free-of-charge, self-paced and self-directed online short
            course designed to enhance your proficiency in English grammar
            rules. Successful completion of the course will:
            <li>
              help you to identify the components of a basic sentence, use
              punctuation correctly, apply strategies to avoid commonly confused
              words and formulate grammatically correct sentences.
            </li>
            <li>
              reward you with a micro-credential certification in the form of a
              digital badge, which can be displayed, accessed, and verified
              online.
            </li>
          </ul>
        ),
      }}
    />
  );
};

export default EventPage;
