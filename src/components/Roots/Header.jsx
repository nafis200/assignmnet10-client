import { Outlet } from "react-router";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


const Header = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Header;