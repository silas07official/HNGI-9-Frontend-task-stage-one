import React from "react";
import github from "../assets/github.png";
import slack from "../assets/slack.png";

const Brand = () => (
  <section className=" mt-5 flex flex-row justify-center space-x-4">
    <img src={slack} alt="" className="w-[24px]" />
    <img src={github} alt="" className="w-[24px]"/>
  </section>
);

export default Brand;
