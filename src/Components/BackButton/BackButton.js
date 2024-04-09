import { Link } from "react-router-dom";

function BackButton(props) {
  return (
    <>
      <Link className="font-bold bg-gray-200 px-4 py-2 rounded-lg" to={`/${props.link}`}>
        {"<"}
      </Link>
    </>
  );
}

export default BackButton;
