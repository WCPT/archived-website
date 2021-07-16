import React from "react";

import Event from "../../templates/event";

export const EventPage = () => {
  return (
    <Event
      pageContext={{
        registrationUrl: "https://forms.gle/rBiUAWT2X12MfNQy6",
        title: "Zoom - Level up your Zoom skills!",
        duration: "1 - 2PM / 13 August, 2021",
        body: (
          <ul>
            A workshop on using Zoom to conduct online classes. Some of the key
            components of the workshop include:
            <li>
              learning to record sessions, collaborate on projects, and share or
              annotate on one another’s screens, all with one easy-to-use
              platform.
            </li>
            <li>
              gaining knowledge on what Zoom offers in terms of quality video,
              audio, and a wireless screen-sharing function across Windows.
            </li>
            <li>
              learning how to schedule a meeting, join a meeting and configure
              audio/ video, utilise Zoom dashboard controls, add virtual
              backgrounds, and use breakout rooms to facilitate virtual group
              work during a class.
            </li>
          </ul>
        ),
      }}
    />
  );
};

export default EventPage;
