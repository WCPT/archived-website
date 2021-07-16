import React from "react";

import Event from "../../templates/event";

export const EventPage = () => {
  return (
    <Event
      pageContext={{
        registrationUrl: "https://forms.gle/eDTCvGdcVB2pmj1dA",
        title: "Create Digital Worksheets via Google Forms",
        duration: "1 - 3PM / 30 July, 2021",
        body: (
          <ul>
            This workshop will make your work easier by showing you how to
            create online/digital worksheet for your students using Google Form,
            a free online tool, with a variety of question types, such as short
            answer, long answer, multiple choice, checkboxes, dropdown, to
            select from. The course will enable you to:
            <li>
              assign points, set answer key and add feedback for responses. The
              worksheet can either be instantly, automatically graded with
              scores revealed to the individual or you can provide feedback upon
              review.
            </li>
            <li>
              allow students to attach files/photos of their work where needed
              and you can also download all data collected from students.
            </li>
          </ul>
        ),
      }}
    />
  );
};

export default EventPage;
