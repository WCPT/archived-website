import React, { FC, useCallback, useState } from "react";
import { cx } from "@emotion/css";

type Props = {
  className?: string;
  containerClassName?: string;
  overlayClassName?: string;
  credit?: string;
  creditLink?: string;
  creditSize?: string;
};

export const ImageHoc = (Image: FC<any>) => {
  return ({
    containerClassName,
    overlayClassName,
    credit,
    creditLink,
    creditSize,
    ...props
  }: Props) => {
    const [creditVisible, setCreditVisible] = useState(false);
    const toggleCredits = useCallback(
      () => setCreditVisible((current) => !current),
      []
    );

    return (
      <div className={containerClassName}>
        <div className={overlayClassName} />
        <Image {...props} />
        {credit && (
          <span
            className={cx(
              `absolute bottom-0 right-0 z-30 text-gray-300 transition-all bg-gray-800 cursor-pointer hover:text-white bg-opacity-60 hover:bg-black rounded-tl-md text-center`,
              {
                "px-2.5 md:px-4 py-1.5 md:py-2": !creditSize,
                "px-1.5 md:px-3 py-0.5 md:py-1": creditSize === "small",
              }
            )}
            onClick={toggleCredits}
          >
            {creditVisible ? credit : "Credits"}
          </span>
        )}
      </div>
    );
  };
};

export default ImageHoc;
