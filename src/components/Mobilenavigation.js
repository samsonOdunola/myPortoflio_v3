import { Link } from "react-router-dom";
const Mobilenavigation = () => {
    return <nav className="mobilenav">
        <ul>
            <li><Link className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/work">Projects</Link></li>
            <li><Link className="link" to="/contact">Contact</Link></li>
        </ul>
    </nav>;
}



export default Mobilenavigation;