import React from "react";
import profile from "../assets/profileImage.png";

const Profile = () => (
  <section className="mt-2 md:mt-3 flex flex-row justify-center">
    <div className="">
      <img src={profile} alt="" id="profile__img" />
      <h1 id="twitter" className="mt-4 text-[18px] font-bold text-gray-900 md:text-[18px] font-poppins text-center">Silas Martins</h1>
      <h4 className="hidden">silas07official</h4>
    </div>
  </section>
);

export default Profile;
