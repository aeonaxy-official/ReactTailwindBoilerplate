import logo from "../../images/company-logo.png";
import BackButton from "../BackButton/BackButton";
import { useNavigate } from 'react-router-dom'
const NavbarWithBackbutton = (props) => {
  const navigate = useNavigate();
  function clickHander(){
    navigate('/');
  }
  
  return (
    <>
      <div className="flex gap-2 items-center">
        <div onClick={clickHander} className="cursor-pointer">
          <img src={logo} />
        </div>
        <div>{!props.isWelcomePage && <BackButton link={'welcome'}/>}</div>
      </div>
    </>
  );
};

export default NavbarWithBackbutton;
