import React, { useEffect, useState } from "react";
import imagePicker from "../../images/dottedImagePicker.png";
import { Link } from "react-router-dom";



const Welcome = (props) => {
  const myfile = document.getElementById("myfile");
  const [pickImage, setPickImage] = useState(imagePicker);
  const reader = new FileReader();

  useEffect(()=>{
    const fileInput = document.getElementById("fileInput");
    const imagePreview = document.getElementById("imagePreview");

    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];

      if (!file) return; // No file selected or canceled

      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }

      const reader = new FileReader();

      reader.onload = function (e) {
        console.log(e.target.result);
        imagePreview.src = e.target.result;
        // setPickImage(e.target.value);
        imagePreview.style.display = "block";
      };

      reader.readAsDataURL(file);
    });

  });

  return (
    <>
      <div className="m-auto flex flex-col space-y-5 min-h-screen">
        <div className="flex flex-col gap-3">
          <div className="text-3xl sm:text-4xl font-bold">
            Welcome! Let's Create Your Profile
          </div>
          <div className="text-lg text-gray-500">
            {" "}
            Let Others get to know you better! You can do these later
          </div>
        </div>
        <div className="flex flex-col space-y-7">
          <div className="text-xl sm:text-2xl font-bold">Add an avatar</div>
          <div className="flex  items-center">
            <div className="w-[60%] sm:w-[35%] md:w-[25%] lg:w-[16%]">
              <div className="w-[100%] ">
                <img id="imagePreview" src={pickImage} className="w-[100%] rounded-full" />
              </div>
            </div>
            <div className="p-5 flex flex-col gap-6">
              <div>
                <label
                  htmlFor="fileInput"
                  className="custom-file-input cursor-pointer border border-gray-300 p-3 rounded-lg font-bold"
                >
                  Choose image
                </label>
                <input id="fileInput" type="file" className="hidden" />
              </div>
              <div>
                <button className="cursor-pointer text-gray-400">
                  {" "}
                  {">"} Or choose one of your defaults
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[100%]">
          <div className="text-xl sm:text-2xl font-bold">
            {" "}
            Add your location{" "}
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter a Location"
              className="outline-none border-b-2 w-[100%] text-xl pb-2"
              req
            />
          </div>
        </div>

        <div className="flex flex-end">
          <Link
            type="submit"
            className="btn btn-primary bg-[#F7418F] px-12 sm:px-24 py-2 rounded-lg text-white mt-5"
            to={"/select_options"}
            onClick={props.nextPageHandler}
          >
            Next
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
