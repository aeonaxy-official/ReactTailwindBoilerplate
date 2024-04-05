import { FaRegCircleCheck } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";

function Features({ chartData}) {
  return (
    <div className="p-10">
      {/* Minimized Cards */}
      <div className="lg:flex gap-2 justify-around mt-14">
        <div className="lg:w-[20vw] p-4">
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
          <div
            key={index}
            className="lg:w-[12vw] flex flex-col gap-2 shadow-sm border-2 p-4 rounded-md "
          >
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
      {/* Grid data */}
      <div className="hidden lg:flex flex-col w-full rounded-md border-2 overflow-hidden mt-10">
        <h1 className="text-xl px-8 py-4 flex justify-between items-center">Core Features <MdExpandMore size={30} /></h1>

        {chartData.map((row, index) => (
          <div key={index} className="flex justify-around gap-20 pl-4 my-4 items-center  border-t-2  ">
            <p className="w-[20vw] mx-4 border-r-2 pr-2">{row.title}</p>
            <p className="lg:w-[12vw] border-r-2">
              {row.column1 !== true ? row.column1 : <FaRegCircleCheck />}
            </p>
            <p className="w-[12vw] border-r-2">
              {row.column2 !== true ? row.column2 : <FaRegCircleCheck />}
            </p>
            <p className="w-[12vw] border-r-2 ">
              {row.column3 !== true ? row.column3 : <FaRegCircleCheck />}
            </p>
            <p className="w-[12vw] border-r-2">
              {row.column4 !== true ? row.column4 : <FaRegCircleCheck />}
            </p>
            <p className="w-[12vw] ">
              {row.column5 !== true ? row.column5 : <FaRegCircleCheck />}
            </p>
          </div>
        ))}
      </div>
      <div>
      <h1 className="text-xl px-8 py-4 flex justify-between items-center border-2 rounded-md mt-2">Teams <MdExpandMore size={30} /></h1>
      <h1 className="text-xl px-8 py-4 flex justify-between items-center border-2 rounded-md mt-2">Customizations <MdExpandMore size={30} /></h1>
      <h1 className="text-xl px-8 py-4 flex justify-between items-center border-2 rounded-md mt-2">Integrations <MdExpandMore size={30} /></h1>
      <h1 className="text-xl px-8 py-4 flex justify-between items-center border-2 rounded-md mt-2">Business Support <MdExpandMore size={30} /></h1>
      </div>
    </div>
  );
}

export default Features;
