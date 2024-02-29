import { FaRegBell } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { RiEqualizerLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import "./navbar.css"
import logo from "../../../assistant/best-wishes.png"


const Navbar = () => {
    return (
         <div className="navbar">
           <div className="containerNav">
           <div className="navbarLogo">
             
                <h1>Overview</h1>
            </div>

            <div className="navbarLink">
                <a><FaRegBell size={20}/></a>
                <a><FaRegEnvelope size={20} /></a>
                <a> <RiEqualizerLine size={20}/></a>
                <a> <FiLogOut size={20}/></a>
            
            </div>
           </div>
          
    </div>
     );
}
 
export default Navbar;