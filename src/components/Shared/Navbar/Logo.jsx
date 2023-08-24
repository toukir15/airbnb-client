import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
export default function Logo() {
  return (
    <Link to="/">
      <img
        className="hidden md:block"
        src={logo}
        alt=""
        width="100"
        height="100"
      />
    </Link>
  );
}
