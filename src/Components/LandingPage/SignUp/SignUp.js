import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="p-10">
        <div className="flex justify-end pb-20">
            <div>Already a member? </div>
            <div> <a href="#" className="text-blue-500"> sign in</a></div>
        </div>
        <form >
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
              <label for="name" > Name  </label>
              <input type="text" name="name" id="name" className="px-2 rounded h-[1.8rem] bg-gray-200 outline-none" />
            </div>
            <div className="flex flex-col">
              <label for="username" className="block"> Username </label>
              <input type="text" name="username" id="username"  className="px-2 rounded h-[1.8rem] bg-gray-200 outline-none"/>
            </div>
          </div>
          <div className="my-5 flex flex-col">
            <label for="email" > Email </label>
            <input type="email" name="email" id="email" className="px-2 rounded h-[1.8rem] bg-gray-200 outline-none"/>
          </div>
          <div className="my-5 flex flex-col" >
            <label for="password" > Password   </label>
            <input type="password" name="password" id="password" className="px-2 rounded h-[1.8rem] bg-gray-200 outline-none"/>
          </div>
          <div className="my-5 flex gap-2">
            <input type="checkbox" id="checkbox" name="checkbox" className="rounded border-none"></input>
            <label for="checkbox">
               Creating an account means you're okey with our{" "}
              <a href="#" className="text-blue-600"> Terms of Service, Privacy Policy,</a> and our default{" "}
              <a href="#" className="text-blue-600"> Notification Settings.</a>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-[#F7418F] px-10 py-2 rounded-lg text-white my-5"
          >
            Create Account
          </button>
        </form>
        <div className="my-5">
          This site is Protected by reCAPTCHA and the Google{" "}
          <a href="#" className="text-blue-600"> Privacy Policy</a> and <a href="#" className="text-blue-600"> Terms of Service </a>{" "}
          apply.
        </div>
      </div>
    </>
  );
};

export default SignUp;
