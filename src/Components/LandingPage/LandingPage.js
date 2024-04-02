import React from "react";
import logo from "../../images/image.png";
import SignUp from "./SignUp/SignUp";

const LandingPage = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 min-h-screen">
        <div className="flex flex-col border bg-yellow-200 gap-5">
          <div className="w-[70%] m-auto text-2xl">Dribble</div>
          <div className="text-[#C08B5C]">
            <div className="w-[70%] m-auto text-2xl">Discover the World's top Designers & Creatives.</div>
          </div>
          <div className="w-[80%] m-auto">
            <img src={logo} className="w-[100%]"></img>
          </div>
        </div>
        <div className="px-20 col-span-2">
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
