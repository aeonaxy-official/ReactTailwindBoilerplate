import { Link } from "react-router-dom";

function MobileNav(props) {

  return (
    <>
      {props.toggle && (
        <div className={`flex flex-col justify-center items-center py-10  relative transition-transform duration-500 ' } `}>
          <div className={`flex flex-col justify-between h-[30rem] transition-opacity duration-1500 ${props.toggle ? 'opacity-1' : 'opacity-0' }  `}>
            <Link to={"#"}>Inspiration</Link>
            <Link to={"#"}>Find Work</Link>
            <Link to={"#"}>Learn Design</Link>
            <Link to={"#"}>Go Pro</Link>
            <Link to={"#"}>Hire Designers</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileNav;
