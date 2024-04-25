import "./Navbar.css";
import logo from "../../assets/images/more/logo1.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbg flex items-center h-24">
      <div className="flex items-center justify-center h-20 w-full">
        <img className="h-full" src={logo} alt="" />
        <h2 className="text-5xl text-white font-Rancho">Espresso Emporium</h2>
      </div>
      <Link
        to="signin"
        className="btn text-black bg-[#E3B577] hover:bg-[#E3B577] text-xl font-Rancho border-0 rounded-none hover:rounded-full mr-5"
      >
        Sign in
      </Link>
    </div>
  );
};

export default Navbar;
