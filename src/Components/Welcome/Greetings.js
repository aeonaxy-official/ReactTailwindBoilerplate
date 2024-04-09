import { useState } from "react";
import NavbarWithBackbutton from "../NavbarWithBackbutton/NavbarWithBackbutton";
import Select from "../SelectOptions/Select";
import Welcome from "./Welcome";

function Greetings() {
  const [isWelcomePage, setIsWelcomePage] = useState(true);
  const nextPageHandler = ()=>{

  }

  
  return (
    <>
      <div className="flex flex-col p-10 sm:p-5 md:p-8 lg:p-10 gap-8">
        <div>
          <NavbarWithBackbutton isWelcomePage = {isWelcomePage} />
        </div>
        <div>
          { !isWelcomePage  && <Select /> }
          { isWelcomePage && <Welcome nextPageHandler={nextPageHandler}/> }
        </div>
      </div>
    </>
  );
}

export default Greetings;
