import React from "react";
import logo from "../../assets/image/download.png";
import { IoIosMenu } from "react-icons/io";
import avatar from "../../assets/image/download.jpg";
const Header = () => {
  return (
    <div className="h-[58px] w-full flex justisfy-center items-center bg-[#fff] ">
      <div className="w-[12vw] ml-3">
        <img alt="logo" className="w-[80px] h-[56px]" src={logo}></img>
      </div>
      <div className="flex justify-center items-center gap-3">
        <IoIosMenu color="#ccc" size={"24px"} />
        <div className="w-[21vw] h-[40px] text-sm bg-[#24c1c7] text-white p-4 font-semibold rounded-md flex justify-center items-center">
          HỆ THỐNG QUẢN TRỊ CƠ SỞ VẬT CHẤT
        </div>
      </div>
      <div className=" text-sm flex justify-center items-center ml-auto gap-3 mr-5 text-[#24c1c7]">
        Cán bộ quản lý 2
        <img
          className="w-[44px] h-[44px] rounded-full"
          src={avatar}
          alt="avatar"
        ></img>
      </div>
    </div>
  );
};

export default Header;
