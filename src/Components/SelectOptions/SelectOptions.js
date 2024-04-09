import option1 from "../../images/option1.png";
import option2 from "../../images/option2.png";
import option3 from "../../images/option3.png";
import Card from "../Card/Card";
import NavbarWithBackbutton from "../NavbarWithBackbutton/NavbarWithBackbutton";

const renderCards = [
    {
      image: option1,
      title: "I'm a designer looking to share my work",
      description:
        "With over 7 million shots from a vast community of designers, Dribble is the leading source for design inspiration.",
    },
    {
      image: option2,
      title: "I'm looking to hire a designer",
      description:
        "With over 7 million shots from a vast community of designers, Dribble is the leading source for design inspiration.",
    },
    {
      image: option3,
      title: "I'm looking for design inspiration",
      description:
        "With over 7 million shots from a vast community of designers, Dribble is the leading source for design inspiration.",
    },
  ];

const SelectOptions = () => {
 
  return (
    <>
      <div className="flex flex-col p-10 gap-8">
        <div>
            <NavbarWithBackbutton/>
        </div>
        <div>
         <div className="flex flex-col gap-20">
                <div className="flex flex-col items-center gap-3">
                <div className="text-4xl font-bold">What Brings you to Dribble? </div>
                <div>
                    Select the options the best describes you. Don't worry, you can
                    explore other options later.
                </div>
                </div>
                <div className="m-10">
                    <div className="flex flex-col gap-5 justify-center items-center lg:flex-row lg:gap-10">
                    
                    {renderCards.map(({image, title, description}) => <div > <Card image={image} title={title} description={description}/> </div>)}
                    </div>
                </div>

                <div className="flex flex-col items-center">
                <div className="text-lg font-bold">Anything else? You can select multiple</div>
                <div>
                    <button
                    type="submit"
                    className="btn btn-primary bg-[#F7418F] px-10 py-2 rounded-lg text-white my-5"
                    >
                    Finish
                    </button>
                </div>
                <div className="text-gray-400 font-bold">Or Press RETURN</div>
                </div>
            </div>
            </div>`
        </div>
    </>
  );
};

export default SelectOptions;
