import React from "react";

function NavBar() {
  return (
    <div className="w-full  flex justify-between px-6">
      <div className="flex items-center lg:hidden p-6">
        {/* LOGO GOES HERE */}
        <p>Calendly</p>
      </div>
      <div>
        <button className="text-gray-600 hover:text-gray-900 focus:outline-none lg:hidden p-6">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hidden w-full lg:flex justify-around p-6">
        <div className="flex items-center">
          {/* LOGO GOES HERE */}
          <p>Calendly</p>
        </div>
        <div className="flex gap-4 items-center">
          {[
            "Individuals",
            "Teams",
            "Enterprise",
            "Product",
            "Pricing",
            "Resources",
          ].map((item) => (
            <div key={item} className="text-sm font-semibold">
              {item}
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-sm font-semibold">Log In</p>
          <p className="p-2 text-sm bg-blue-600 rounded-lg text-white">
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
