import React from "react";
import profile from "../assets/profileImage.png";

const Profile = () => (
  <section className="mt-2 md:mt-3 flex flex-row justify-center">
    <div>
      <img src={profile} alt="" id="profile__img" />
      <h1 id="twitter" className="mt-1 text-[18px] font-bold text-gray-900 md:text-[18px] font-poppins text-center">Silas Martins</h1>
    </div>
  </section>
);

export default Profile;
