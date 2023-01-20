import React from "react";
import { about } from "../pages/data.js";

function About() {
  const { title, subtitle, title2, subtitle2 } = about;
  return (
    <section className="bg-black  bg-opacity-80 backdrop-filter backdrop-blur-lg py-[80px] md:py-[110px] lg:pt-[140px] lg:pb-[180px]">
      <div className="container mx-auto">
        <div className="section-title-group">
          <h2 className="h2 section-title">{title}</h2>
        </div>
        <p className="md:text-body-md mb-12">{subtitle}</p>
      </div>

      <div className="container mx-auto">
        <div className="section-title-group">
          <h2 className="h2 section-title">{title2}</h2>
        </div>
        <p className="md:text-body-md mb-8">{subtitle2}</p>

        <button className="animate-bounce btn">
          <a className="text-2xl"
            href="
"
          >Try Beta</a>
        </button>
      </div>
    </section>
  );
}

export default About;
