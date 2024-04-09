
import NavbarWithBackbutton from "../NavbarWithBackbutton/NavbarWithBackbutton";
import Select from "./Select";
import Welcome from '../Welcome/Welcome';

const SelectOptions = () => {
  return (
    <>
      <div className="flex flex-col p-10 gap-8 border border-blue-500">
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
