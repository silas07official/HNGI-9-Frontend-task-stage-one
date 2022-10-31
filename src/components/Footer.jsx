import React from "react";
import zuri from '../assets/Zuri.png'
import I4G from '../assets/I4G.png'

const Footer = () => (
  <footer className="flex mx-8  flex-col justify-around border-solid border-t-2 border-gray-200 mt-12 mb-4 md:flex-row">
    <div className="mt-5">
      <img src={zuri} alt="" />
    </div>
    <div className="mt-5">
      <h3>HNG Internship 9 Frontend Task</h3>
    </div>
    <div className="mt-5">
      <img src={I4G} alt="" />
    </div>
  </footer>
);

export default Footer;
