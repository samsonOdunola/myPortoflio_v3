import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
    return <nav className="desktopnav">
        <Link to="/"><img className="img" src={require("../image/barn-owl.png")} alt="barn owl logo" /></Link>
        <ul>
            <li><Link className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/work">Projects</Link></li>
            <li><Link className="link" to="/contact">Contact</Link></li>
        </ul>
        <Link className="mobileonly" to="/menu"><AiOutlineMenu className=" menuicon"/></Link>
    </nav>;
}

export default Navbar;