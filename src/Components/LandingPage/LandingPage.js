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
      <div >

      </div>
      <div className="border grid grid-cols-1 lg:grid-cols-3 lg:gap-10 md:min-h-screen ">
        <div className="flex flex-col bg-yellow-200 gap-10  md:gap-5 p-10">
          <div className=" text-2xl w-[100%] m-auto w-[80%] lg:w-[100%] m-auto">
            <img src={companyLogo} className="bg-yellow-200 w-[30%] " />
          </div>
          <div className="text-[#994D1C] w-[90%] m-auto ">
            <div className="text-2xl font-bold  w-[100%]">Discover the World's top Designers & Creatives.</div>
          </div>
          <div className="w-[80%] lg:w-[100%] m-auto">
            <img src={logo} className="w-[90%] lg:w-[100%]"></img>
          </div>
        </div>
        <div className="col-span-2">
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
