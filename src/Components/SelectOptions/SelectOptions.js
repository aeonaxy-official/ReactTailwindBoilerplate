
import NavbarWithBackbutton from "../NavbarWithBackbutton/NavbarWithBackbutton";
import Select from "./Select";
const SelectOptions = (props) => {
  
  return (
    <>
      <div className="flex flex-col p-10 gap-8 lg:gap-2 ">
        <div>
          <NavbarWithBackbutton />
        </div>
        <div>
          <Select/>
        </div>
      </div>
    </>
  );
};

export default SelectOptions;
