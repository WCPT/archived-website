import React, { HTMLAttributes, useMemo } from "react";

interface Props extends HTMLAttributes<any> {
  theme?: "light" | "dark";
}

export const Logo = ({ theme, ...props }: Props) => {
  const colors = useMemo(() => {
    if (theme === "dark") {
      return {
        text: "white",
        bg: "black",
      };
    }
    return {
      text: "black",
      bg: "white",
    };
  }, [theme]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479 488" {...props}>
      <title>WCPT Logo</title>
      <rect
        fill={colors.bg}
        x="280.39"
        y="165.7"
        width="155.15"
        height="155.15"
        transform="translate(276.87 -181.87) rotate(45)"
      />
      <path
        fill={colors.text}
        d="M362.37,276.2h-24.9v25.14h-16.6V215.9c13.83,0,27.66-.12,41.5-.12C405.37,215.78,405.5,276.2,362.37,276.2Zm-24.9-14.77h24.9c21.25,0,21.13-30.27,0-30.27h-24.9Z"
      />
      <rect
        fill={colors.bg}
        x="164.11"
        y="287.72"
        width="155.15"
        height="155.15"
        transform="translate(329.09 -63.91) rotate(45)"
      />
      <rect
        fill={colors.bg}
        x="40.64"
        y="164.24"
        width="155.15"
        height="155.15"
        transform="translate(205.61 -12.76) rotate(45)"
      />
      <path
        fill={colors.text}
        d="M232.49,345.47H204.57V330.83H277v14.65H249.08v70.79h-16.6Z"
      />
      <path
        fill={colors.text}
        d="M153.46,299.78H139.37l-10.94-26.85-9.31-27-9.18,27.22L99.26,299.78H85.17L52.86,214.34H71.47L92.22,276l21.38-61.64h10.81l22,61.64,20.12-61.64h18.61Z"
      />
      <rect
        fill={colors.bg}
        x="160.61"
        y="44.27"
        width="155.15"
        height="155.15"
        transform="translate(155.92 -132.73) rotate(45)"
      />
      <path
        fill={colors.text}
        d="M280.06,147c-9.05,8.67-20.75,12.69-33.45,12.69-32.69,0-46.53-21.85-46.65-44.06s14.84-45,46.65-45a46.12,46.12,0,0,1,32.32,13.06L267.86,94A30.75,30.75,0,0,0,246.61,86c-21.25,0-30.43,15.38-30.3,29.66s8.55,28.93,30.3,28.93c7.67,0,16.35-3.05,22.13-8.67Z"
      />
    </svg>
  );
};

export default Logo;