import React from "react";

function Landing() {
  return (
    <div className="w-full overflow-x-hidden my-10">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold">Scheduling should be easy.</h1>
        <h1 className="text-5xl font-semibold my-4 text-blue-600">
          Start free.
        </h1>
      </div>
      {/* bills + toggle */}
      <div className="flex gap-4 justify-center items-center">
        <p>Billed monthly</p>
        <label class="flex items-center cursor-pointer">
          <div class="relative">
            <input type="checkbox" class="hidden" />
            <div class="toggle-switch w-10 h-5 bg-gray-300 rounded-full shadow-inner transition duration-300 ease-in-out"></div>
            <div class="dot absolute w-5 h-5 top-0 left-5 bg-blue-600 rounded-full shadow transition duration-300 ease-in-out"></div>
          </div>
        </label>
        <p>Billed annually</p>
        <p className="bg-[#f3f3f3] p-4 rounded-md">
          <span>Save 20%</span> with annual plans
        </p>
      </div>
      {/* Maximixed Cards */}
      <div className=" w-[100vw] flex justify-around mt-14 px-4">
        {[
          {
            heading: "BAsic",
            Pricing: "Always Free",
            details: "When you just want the basics",
            button: "Get started",
          },
          {
            heading: "Essentials",
            Pricing: "$8",
            details: "When you need powerful scheduling automation",
            button: "Start Essentials",
          },
          {
            heading: "Professional",
            Pricing: "$12",
            details:
              "When you need customization, integration, and basic team features",
            button: "Start Professional",
          },
          {
            heading: "Teams",
            Pricing: "$16",
            details:
              "When your team needs to align on a scheduling process and collaborate efficiently",
            button: "Try for free",
          },
          {
            heading: "Enterprise",
            Pricing: "Contact Us",
            details:
              "When your 30+ members team needs advanced security, control, and support",
            button: "Contact Us",
          },
        ].map((card, index) => (
          <div
            className={`w-[14vw] h-auto flex flex-col gap-6 py-4 px-6 rounded-md shadow-sm ${
              index === 4 ? "bg-[#24477b] text-white" : "bg-[#f3f3f3]"
            }`}
          >
            {index === 2 && <p className="bg-[#ffffff] text-sm capitalize rounded-md  px-2 mr-auto">most popolar</p>}
            <p className=" uppercase text-xl">{card.heading}</p>
            <p className="text-3xl font-semibold">
              {card.Pricing}
              {index !== 0 && index !== 4 && (
                <span className="text-sm">/seat/mo</span>
              )}
            </p>
            <p>{card.details}</p>
            <p
              className={`mt-auto rounded-md  text-center p-2 ${
                index === 2
                  ? "text-white bg-blue-600"
                  : "text-blue-600 border-2 border-blue-600"
              } ${index === 4 && "text-white border-white"} cursor-pointer`}
            >
              {card.button}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Landing;
