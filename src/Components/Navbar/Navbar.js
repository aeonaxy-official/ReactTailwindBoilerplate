import navLogo from "../../images/navLogo.png";
import ProfilePhoto from "../../images/ProfilePhoto.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faNavicon,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [photo, setProfilePhoto] = useState("");
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const clickHandler = (e) => {
    navigate("/");
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}makeprofile/load-photo`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((resData) => {
        return resData.json();
      })
      .then((photo) => {
        setProfilePhoto(photo.profilePhoto);
      });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center px-5 border-b gap-2">
        <div className="cursor-pointer " onClick={clickHandler}>
          <img src={navLogo} />
        </div>
        <div
          className="lg:hidden cursor-pointer"
          onClick={props.hamburgerMenuHandler}
        >
          <FontAwesomeIcon icon={props.navIcon} />
        </div>

        <div className="w-[100%] hidden lg:block">
          <div className="flex justify-between ">
            <div className="flex items-center gap-6 font-normal text-gray-400">
              <div className="cursor-pointer"> Inspiration</div>
              <div className="cursor-pointer"> Find Work</div>
              <div className="cursor-pointer"> Learn Design</div>
              <div className="cursor-pointer"> Go Pro</div>
              <div className="cursor-pointer"> Hire Designers</div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex justify-center bg-gray-200  rounded-lg p-2">
                <div className="flex items-center justify-center bg-gray-200 gap-1 cursor-pointer">
                  <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="outline-none bg-gray-200 w-[100px]"
                  />
                </div>
              </div>
              <div className="cursor-pointer">
                <FontAwesomeIcon icon={faShoppingBag} />
              </div>
              <div className="cursor-pointer">
                <div className="w-[60px] rounded-full ">
                  <img
                    src={`${process.env.REACT_APP_API_URL}${photo}`}
                    className="rounded-full h-[60px] p-4"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary bg-[#F7418F] px-5 py-2 rounded-lg text-white my-3"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
