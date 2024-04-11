import { useState } from "react";
import option1 from "../../images/option1.png";
import option2 from "../../images/option2.png";
import option3 from "../../images/option3.png";
import Card from "../Card/Card";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Select = (props) => {
  const loc = useLocation();
  const navigate = useNavigate();
  console.log(loc);
  // const { profilePhoto, location } = loc.state;

  const token = useSelector((state) => state.auth.token);
  const profilePhoto = useSelector((state) => state.userData.profilePhoto);
  const location = useSelector((state) => state.userData.location);

  const formData = new FormData();
  formData.append("profilePhoto", profilePhoto);
  formData.append("location", location);

  console.log(formData);

  console.log(profilePhoto);
  console.log(location);
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);

  const cardStates = [
    {
      id: 1,
      isChecked: false,
      image: option1,
      title: "I'm a designer looking to share my work",
      description:
        "With over 7 million shots from a vast community of designers, Dribble is the leading source for design inspiration.",
    },
    {
      id: 2,
      isChecked: false,
      image: option2,
      title: "I'm looking to hire a designer",
      description:
        "With over 7 million shots from a vast community of designers, Dribble is the leading source for design inspiration.",
    },
    {
      id: 3,
      isChecked: false,
      image: option3,
      title: "I'm looking for design inspiration",
      description:
        "With over 7 million shots from a vast community of designers, Dribble is the leading source for design inspiration.",
    },
  ];
  const check1Handler = (e) => {
    console.log(e.target.checked);
    setCheckBox1(e.target.checked);
  };
  const check2Handler = (e) => {
    console.log(e.target.checked);
    setCheckBox2(e.target.checked);
  };
  const check3Handler = (e) => {
    console.log(e.target.checked);
    setCheckBox3(e.target.checked);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(location);

    fetch(`${process.env.REACT_APP_API_URL}makeprofile/personal-details`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData
    })
      .then((res) => {
        if (res.status != 201 && res.status != 200) {
          const error = "Unable to Process your Data";
          alert(error);
          // throw Error(error);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate('/verify');
      });
  };

  return (
    <>
      <form className="flex flex-col gap-20 " onSubmit={submitHandler} encType="multipart/form-data">
        <div className="flex flex-col items-center gap-3">
          <div className="text-4xl font-bold">What Brings you to Dribble? </div>
          <div>
            Select the options the best describes you. Don't worry, you can
            explore other options later.
          </div>
        </div>
        <div className="m-10">
          <div className="flex flex-col gap-28 justify-center items-center lg:flex-row lg:gap-5">
            <div>
              <Card
                onCheckboxChange={check1Handler}
                image={cardStates[0].image}
                title={cardStates[0].title}
                description={cardStates[0].description}
              />
            </div>
            <div>
              <Card
                onCheckboxChange={check2Handler}
                image={cardStates[1].image}
                title={cardStates[1].title}
                description={cardStates[1].description}
              />
            </div>
            <div>
              <Card
                onCheckboxChange={check3Handler}
                image={cardStates[2].image}
                title={cardStates[2].title}
                description={cardStates[2].description}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-lg font-bold">
            Anything else? You can select multiple
          </div>
          <div>
            <button
              type="submit"
              className={`btn btn-primary bg-[#F7418F] px-10 py-2 rounded-lg text-white my-5 ${
                !(checkBox1 || checkBox2 || checkBox3) ? "opacity-50" : ""
              }`}
              disabled={!(checkBox1 || checkBox2 || checkBox3)}
            >
              Finish
            </button>
          </div>
          {(checkBox1 || checkBox2 || checkBox3) && (
            <div className="text-gray-400 font-bold">Or Press RETURN</div>
          )}
        </div>
      </form>
    </>
  );
};

export default Select;
