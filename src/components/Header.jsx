import React from "react";
import { RiVirusFill } from "react-icons/ri";

const Header = () => {
  return (
    <>
      <h1 className="flex flex-row items-center justify-center text-6xl font-extrabold uppercase ">
        C
        <span className="text-7xl text-teal-400">
          <RiVirusFill />
        </span>
        vid-19
      </h1>
      <p className="mt-5 text-xl font-semibold text-center">
        Global and Country Wise Cases of Corona Virus
      </p>
    </>
  );
};

export default Header;
