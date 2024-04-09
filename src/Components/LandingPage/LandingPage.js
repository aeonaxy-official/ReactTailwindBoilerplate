import React, { useState } from "react";
import logo from "../../images/image.png";
import SignUp from "./SignUp/SignUp";
import companyLogo from "../../images/company-logo.png";
import SignIn from "./SignIn/SignIn";

const LandingPage = () => {

  const [ haveAccount, setHaveAccount] = useState(false);
  
  
  
  function accountHandler (){
     setHaveAccount(!haveAccount);
  }


  return (
    <>
      <div className="grid grid-cols-3 gap-5 md:min-h-screen">
        <div className="flex flex-col bg-yellow-200 gap-5">
          <div className="w-[70%] m-auto text-2xl">
            <img src={companyLogo} className="bg-yellow-200" />
          </div>
          <div className="text-[#C08B5C]">
            <div className="w-[70%] m-auto text-2xl font-bold">Discover the World's top Designers & Creatives.</div>
          </div>
          <div className="w-[80%] m-auto">
            <img src={logo} className="w-[100%]"></img>
          </div>
        </div>
        <div className="px-20 col-span-2">
          {
            !haveAccount  && <SignUp manageAccount = {accountHandler}/>
          }
          {
            haveAccount && <SignIn manageAccount = {accountHandler}/>
          }
        </div>
      </div>
    </>
  );
};

export default LandingPage;
