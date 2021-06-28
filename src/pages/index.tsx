import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Community of Pasifika</title>

      <div className="h-screen">
        <StaticImage
          className="flex items-center justify-center h-full"
          src="../images/cover.jpg"
          alt="Cover picture of an Island"
          placeholder="dominantColor"
        />
      </div>

      <div className="flex flex-col h-screen my-2 lg:flex-row lg:max-h-1/2-screen ">
        <div className="relative flex items-center justify-center w-full mr-1 border-2 border-black item-center h-1/2 lg:h-full">
          First Tile
        </div>
        <div className="relative flex items-center justify-center w-full border-2 border-black item-center h-1/2 lg:h-full">
          Second Tile
        </div>
      </div>
      <div className="flex">Contact Us</div>
    </main>
  );
};

export default IndexPage;
