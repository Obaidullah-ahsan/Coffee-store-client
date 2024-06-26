import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;