import Image from "next/image.js";
import React from "react";
import { banner } from "../pages/data.js";
import Wings from "../public/Images/wings.svg";

function Banner() {
  const { title1, title2, subtitle, Startbtn } = banner;
  return (
    <section className="bg-darkbg bg-cover rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 h-[790px]">
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full relative-space-x-48 lg:-space-x-24">
          {/* data text */}
          <div className="flex- z-10 pl-8 lg:pl-0">
            <h1 className="h1" >
              {title1}
              <br />
              <span>{title2}</span>
            </h1>
            <p className="max-w-[415px]  text-body-md lg:text-body-lg mb-10">
              {subtitle}
            </p>
            <button className="btn btn-sm lg:btn-lg animate-pulse">
              {Startbtn}
            </button>
          </div>

          {/* image */}
          <div className="bg-Absolute w-full bg-cover bg-right lg:bg-center bg-no-repeat flex-1">
            <Image
              src={Wings}
              alt="absolute banner"
              priority

              height={400}
              width={320}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
