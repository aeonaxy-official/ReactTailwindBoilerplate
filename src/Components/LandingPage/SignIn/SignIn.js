import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../Store/auth";

const SignIn = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [credential, setCredential] = useState("");

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setWrongPassword(false);
    setMessage("");
  };
  const credentialHandler = (e) => {
    setCredential(e.target.value);
    setWrongPassword(false);
    setMessage("");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // ${process.env.REACT_APP_API_URL}
    console.log(e.target.credential.value);
    fetch(`${process.env.REACT_APP_API_URL}auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        credential: credential,
        password: password,
      }),
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          setMessage("Wrong Password!");
          setWrongPassword(true);
          throw new Error("Wrong Password");
        }
        return res.json({
          message: "Wrong Pass!",
        });
      })
      .then(async (resData) => {
        console.log(resData);
        setMessage(resData.message);
        setIsLoggedIn(true);
        dispatch(authAction.setAuthentication({ token: resData.token }));

        const user = await fetch(
          `${process.env.REACT_APP_API_URL}makeprofile/personal-details/datataken`,
          {
            headers: {
              Authorization: "Bearer " + resData.token,
            },
          }
        );
        const userData = await user.json();
        console.log(userData);
        setTimeout(() => {
          if (!userData.isDataTaken) navigate("/welcome");
          else navigate("/verify");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="p-10 ">
        <div className="flex justify-end gap-4 pb-20">
          <div> Don't have an account </div>
          <div>
            <Link to="#" className="text-blue-500" onClick={props.manageAccount}>
              SignUp
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 pb-12 transition-all">
          <div className="text-2xl font-bold">Sign In to Dribble</div>
          <div>
            {" "}
            <h4
              className={`${
                wrongPassword ? "text-red-500" : "text-green-500"
              } font-normal`}
            >
              {" "}
              {message}{" "}
            </h4>
          </div>
        </div>
        <form className="transition-all" onSubmit={onSubmitHandler}>
          <div className="flex flex-col">
            <label for="credential" className="block">
              {" "}
              Username/Email{" "}
            </label>
            <input
              type="text"
              name="credential"
              id="credential"
              className="px-2 rounded h-[2.5rem] bg-gray-200 outline-none"
              onChange={credentialHandler}
              required
            />
          </div>
          <div className="my-5 flex flex-col">
            <label for="password"> Password </label>
            <input
              type="password"
              name="password"
              id="password"
              className="px-2 rounded h-[2.5rem] bg-gray-200 outline-none"
              onChange={passwordHandler}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-[#F7418F] px-10 py-2 rounded-lg text-white my-5"
          >
            Sign In
          </button>
          <div className="my-5">
            This site is Protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-blue-600">
              {" "}
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600">
              {" "}
              Terms of Service{" "}
            </a>{" "}
            apply.
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
