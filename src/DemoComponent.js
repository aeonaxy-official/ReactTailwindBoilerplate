import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const DemoComponent =  () => {
  const [filePick, setFilePick] = useState();
  const [loc, setLoc] = useState("");

  // const token = useSelector((state) => state.auth.token);
  // const profilePhoto = useSelector((state) => state.userData.profilePhoto);
  // const location = useSelector((state) => state.userData.location);

  const formData = new FormData();
  formData.append("profilePhoto", filePick);
  formData.append("location", loc);

  function fileHaldler(e) {
    setFilePick(e.target.files[0]);
  }
  function locationHandler(e) {
    console.log(e.target.value);
    setLoc(e.target.value);
  }
  async function submitHandler(e) {
    e.preventDefault();
    const config = {
      headers: {
        // Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    };

    const url = "http://localhost:8080/makeprofile/personal-details";

    try{

      // const data = await axios.post(url,  formData, config);
      const data =  await fetch(url, {
        method : 'POST',
        body : formData
      });

      const resData = await data.json();
      console.log(resData);
    }
    catch(err){
      console.log(err);
    }

      // .then((res) => {
      //   if (res.status != 201 && res.status != 200) {
      //     const error = "Unable to Process your Data";
      //     alert(error);
      //     // throw Error(error);
      //   }
      //   return res.json();
      // })
      // .then((data) => {
      //   console.log(data);
      // });
  }
  return (
    <div className=" flex flex-col justify-top items-center mt-16">
      <div className="max-w-7xl w-full p-8 text-left">
        <h1 className="text-5xl font-bold text-stone-700 mb-4">
          Hello <span className="text-stone-600">World!</span>
        </h1>
        <p className="text-base text-gray-700">
          {" "}
          Cheers,
          <br />
          Start your project 🚀
        </p>
      </div>
      <div>
        <form method="POST" onSubmit={submitHandler} encType="multipart/form-data">
          <input type="file" name="profilePhoto" onChange={fileHaldler} />
          <br></br>
          <input type="text" name="location" onChange={locationHandler} />
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DemoComponent;
