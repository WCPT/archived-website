import { cx } from "@emotion/css";
import React from "react";

import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface Props {
  className: string;
}

export function Social({ className }: Props) {
  return (
    <nav className={cx("flex", className)}>
      <span className="mx-2">
        <a
          className="text-2xl"
          href="https://www.facebook.com/PasfikaTeachers"
          title="Facebook"
          target="_blank"
          rel="noopener"
        >
          <FaFacebookSquare className="hover:text-blue-800" />
        </a>
      </span>
      <span className="mx-2">
        <a
          className="text-2xl"
          href="https://mobile.twitter.com/PasfikaTeachers"
          title="Twitter"
          target="_blank"
          rel="noopener"
        >
          <FaTwitter className="hover:text-blue-400" />
        </a>
      </span>
      <span className="mx-2">
        <a
          className="text-2xl"
          href="https://www.youtube.com/channel/UCvDhc1CS_QAxmnMCECMd7iQ"
          title="Youtube"
          target="_blank"
          rel="noopener"
        >
          <FaYoutube className="hover:text-red-600" />
        </a>
      </span>
      <span className="mx-2">
        <a
          className="text-2xl"
          href="mailto:pasifikateachers@gmail.com"
          title="Email"
          target="_blank"
          rel="noopener"
        >
          <MdEmail className="hover:text-gray-600" />
        </a>
      </span>
    </nav>
  );
}

export default Social;
