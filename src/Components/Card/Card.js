import option1 from "../../images/option1.png";
import option2 from "../../images/option2.png";
import option3 from "../../images/option3.png";

import CardStyle from "./Card.module.css";

const Card = (props) => {

  return (
    <>
      <div className="border border hover:border-4 flex flex-col p-5 w-[310px] h-[330px] rounded-xl  cursor-pointer group hover:border-[#F7418F] transition-all duration-200 z-12">
        <div className="flex flex-col gap-5 relative transition-transform group-hover:-translate-y-32 z-0">
          <div className="w-[100%] h-[10rem] m-auto ">
            <img src={props.image} className="w-[100%] h-[100%]" />
          </div>
          <div className=" m-auto text-center flex flex-col gap-4">
            <div className="font-bold text-xl">{props.title}</div>
            <div className="hidden  group-hover:block  text-gray-500">{props.description}</div>
          </div>
        </div>
        <div className="flex justify-center p-3 relative group-hover:bottom-28 ">
          <label className={`${CardStyle.container} `}>
            <input type="checkbox" onChange={props.onCheckboxChange} />
            <span className={CardStyle.checkmark}></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Card;
