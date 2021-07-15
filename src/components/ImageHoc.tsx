import React, { FC, useCallback, useState } from "react";
import { cx } from "@emotion/css";

type Props = {
  className?: string;
  containerClassName?: string;
  overlayClassName?: string;
  credit?: string;
  creditLink?: string;
};

export const ImageHoc = (Image: FC<any>) => {
  return ({
    containerClassName,
    overlayClassName,
    credit,
    creditLink,
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
            className="absolute bottom-0 right-0 z-30 px-3 py-1 text-sm xs:text-base text-gray-300 transition-all bg-gray-800 cursor-pointer hover:text-white bg-opacity-60 hover:bg-black rounded-tl-md text-center"
            onClick={toggleCredits}
          >
            {creditVisible ? credit : "Credit"}
          </span>
        )}
      </div>
    );
  };
};

export default ImageHoc;
