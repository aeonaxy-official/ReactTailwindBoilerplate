import React from "react";
import imagePicker from '../../images/dottedImagePicker.png';


const Welcome = () => {
  return (
    <>
      <div className="w-[70%] m-auto flex flex-col space-y-10 min-h-screen  p-10 ">
        <div className="flex flex-col gap-3">
          <div className="text-4xl font-bold">Welcome! Let's Create Your Profile</div>
          <div className="text-lg text-gray-500"> Let Others get to know you better! You can do these later</div>
        </div>
        <div className="flex flex-col space-y-7">
          <div className="text-2xl font-bold">Add an avatar</div>
          <div className="flex  items-center">
            <div className="w-[30%]">
                <div className="rounded-[59rem] w-[70%]">
                    <img src={imagePicker} className="w-[100%]"/>
                </div>
            </div>
            <div className="p-5 flex flex-col gap-6"> 
              <div>
                <label for="fileInput" className="custom-file-input cursor-pointer border border-gray-300 p-3 rounded-lg font-bold">
                  Choose image
                </label>
                <input id="fileInput" type="file" className="hidden"/>

              </div>
              <div>
                 <button className="cursor-pointer text-gray-400"> {'>'} Or choose one of your defaults</button>
              </div>

            </div>
          </div>

        </div>
        <div className="flex flex-col gap-6 w-[100%]">
            <div  className="text-2xl font-bold"> Add your location </div>
            <div> 
                <input type="text" placeholder="Enter a Location" className="outline-none border-b-2 w-[100%] text-xl pb-2"/> 
            </div>
        </div>

        <div>
            <button  type="submit"
            className="btn btn-primary bg-[#F7418F] px-24 py-2 rounded-lg text-white my-5">Next</button>
        </div>
      </div>
    </>
  );
};


export default Welcome;