import React from "react";
import { cx } from "@emotion/css";
import { MdEmail } from "react-icons/md";
import { FaTwitter, FaFacebookSquare, FaYoutube } from "react-icons/fa";

interface Props {
  className?: string;
}

export const SocialLinks = ({ className }: Props) => {
  const socialMedia = [
    {
      href: "https://www.facebook.com/PasfikaTeachers",
      title: "Facebook",
      Icon: FaFacebookSquare,
      hoverClass: "text-blue-800",
    },
    {
      href: "https://mobile.twitter.com/PasfikaTeachers",
      title: "Twitter",
      Icon: FaTwitter,
      hoverClass: "text-blue-400",
    },
    {
      href: "https://www.youtube.com/channel/UCvDhc1CS_QAxmnMCECMd7iQ",
      title: "Youtube",
      Icon: FaYoutube,
      hoverClass: "text-red-600",
    },
    {
      href: "mailto:pasifikateachers@gmail.com",
      title: "Email",
      Icon: MdEmail,
      hoverClass: "text-blue-500",
    },
  ];

  return (
    <div className={cx(`flex items-center`, className)}>
      {socialMedia.map(({ Icon, ...props }, i) => (
        <a
          key={i}
          href={props.href}
          title={props.title}
          target="_blank"
          rel="noopener"
        >
          <Icon
            className={`mx-1 p-1.5 md:p-2.5 text-3.5xl xs:text-4xl md:text-5xl rounded-md hover:${props.hoverClass} hover:bg-white transition-all duration-300`}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
