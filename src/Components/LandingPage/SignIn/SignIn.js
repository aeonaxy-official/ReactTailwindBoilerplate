import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {
  let navigate = useNavigate();
  const [message , setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password , setPassword ] = useState('');
  const [credential, setCredential] = useState('');

  const passwordHandler = (e)=>{
    setPassword(e.target.value);
  }
  const credentialHandler = (e)=>{
    setCredential(e.target.value);
  }

  const onSubmitHandler = (e)=>{
    e.preventDefault();

    console.log( e.target.credential.value);
    fetch("http://localhost:8080/auth/signin",{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            credential : credential,
            password : password
        })
    }).then((res) => {

        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Can't update status!");
        }
        return res.json({
          message: "post failed!",
        });
      })
      .then((resData) => {
          console.log(resData);
          setMessage(resData.message);
          setIsLoggedIn(true);
          setTimeout(()=>{
            navigate("/verify");
          }, 1000);

      })
      .catch(err=> console.log(err));

  }

  return (
    <>
      <div className="p-10 ">
        <div className="flex justify-end gap-4 pb-20">
            <div> Don't have an account </div>
            <div> <a href="#" className="text-blue-500"  onClick={props.manageAccount}> SignUp </a></div>
        </div>
        <div className="flex flex-col gap-5 pb-12 transition-all">
           <div className="text-2xl font-bold">Sign In to Dribble</div>
           <div> <h4 className="text-green-500 font-bold"> {message} </h4></div>
        </div>
        <form className="transition-all" onSubmit={onSubmitHandler}>
           
            <div className="flex flex-col">
              <label for="credential" className="block"> Username/Email </label>
              <input type="text" name="credential" id="credential"  className="px-2 rounded h-[2.5rem] bg-gray-200 outline-none" onChange={credentialHandler} required/>
            </div>
          <div className="my-5 flex flex-col" >
            <label for="password" > Password   </label>
            <input type="password" name="password" id="password" className="px-2 rounded h-[2.5rem] bg-gray-200 outline-none" onChange={passwordHandler} required/>
          </div>
          <button
            type="submit"
            className="btn btn-primary bg-[#F7418F] px-10 py-2 rounded-lg text-white my-5"
          >
            Sign In
          </button>
            <div className="my-5">
            This site is Protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-blue-600"> Privacy Policy</a> and <a href="#" className="text-blue-600"> Terms of Service </a>{" "}
            apply.
            </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
