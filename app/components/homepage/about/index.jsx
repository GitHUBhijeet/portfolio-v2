// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1 text-center sm:text-start">
          <p className="font-medium mb-5 text-[#ec4899] text-xl uppercase">
            About Me
          </p>
          <h4 className="text-gray-200 text-sm lg:text-lg">
            Hello! My name is Abhijeet,{" "}
            {
              <p style={{ color: "rgb(251, 146, 60)", display: "inline" }}>
                an NYU graduate with a Master&apos;s Degree in Computer Science
              </p>
            }
            . <br /> <br />I have a passion for Coding and Problem Solving.{" "}
            <br /> I love working on anything and everything that involves
            writing code. <br />
            <br /> I have had the privilege of working for the{" "}
            {
              <p style={{ color: "rgb(251, 146, 60)", display: "inline" }}>
                {" "}
                New York State Government
              </p>
            }
            , a{" "}
            {
              <p style={{ color: "rgb(251, 146, 60)", display: "inline" }}>
                Dutch MNC
              </p>
            }{" "}
            that specializes in navigation,{" "}
            {
              <p style={{ color: "rgb(251, 146, 60)", display: "inline" }}>
                India&apos;s biggest car manufacturing company
              </p>
            }
            , a{" "}
            {
              <p style={{ color: "rgb(251, 146, 60)", display: "inline" }}>
                SaaS startup
              </p>
            }{" "}
            and a{" "}
            {
              <p style={{ color: "rgb(251, 146, 60)", display: "inline" }}>
                music company
              </p>
            }
            .
          </h4>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src="/me.jpg"
            width={280}
            height={280}
            alt=""
            className="rounded-lg transition-all duration-500 grayscale hover:grayscale-0 hover:scale-110 cursor-crosshair"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
