import "./Navbar.css"
import logo from "../../assets/images/more/logo1.png"
const Navbar = () => {
  return (
    <div className="navbg h-24">
      <div className="flex items-center justify-center pt-3 h-20 w-full">
        <img className="h-full" src={logo} alt="" />
        <h2 className="text-5xl text-white font-Rancho">Espresso Emporium</h2>
      </div>
    </div>
  );
};

export default Navbar;
