import React from "react";

function Features() {
  return (
    <div className="p-10">
      {/* Minimized Cards */}
      <div className="flex gap-2 justify-around mt-14">
        <div className=" w-[20vw] p-4">
          <p className=" uppercase text-xl fonst-semibold">Features</p>
          <h2 className="text-3xl font-semibold">Features by plan</h2>
          <p className="text-md">
            Find the subscription that makes the most sense for you or your team
          </p>
        </div>

        {[
          {
            heading: "BAsic",
            Pricing: "Free",
            button: "Sign up",
          },
          {
            heading: "Essentials",
            Pricing: "$8",
            button: "Sign up",
          },
          {
            heading: "Professional",
            Pricing: "$12",
            button: "Sign up",
          },
          {
            heading: "Teams",
            Pricing: "$16",
            button: "Sign up",
          },
          {
            heading: "Enterprise",
            Pricing: " - ",
            button: "Contact Sales",
          },
        ].map((card, index) => (
          <div className="w-[12vw] flex flex-col gap-2 shadow-sm border-2 p-4 rounded-md ">
            <p className="text-center capitalize font-semibold">
              {card.heading}
            </p>
            <p className="text-center capitalize font-semibold text-xl">
              {card.Pricing}
            </p>
            <p
              className={`mt-auto border-2 ${
                index === 2
                  ? "text-white bg-blue-600 border-none"
                  : "border-black"
              } p-1 text-center rounded-md cursor-pointer `}
            >
              {card.button}
            </p>
          </div>
        ))}
      </div>
      <div>

      </div>
      <div>
        
      </div>

    </div>
  );
}

export default Features;
