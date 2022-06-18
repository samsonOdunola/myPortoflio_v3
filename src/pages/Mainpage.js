
import {Link} from "react-router-dom";
import Work from "../components/Work";
const Mainpage = () => {
    return <>
    <header>            
            <p className="title">FREELANCE</p>
            <h1 className="maintitle">
                Front-End <br />
                Developer
            </h1>
            <p className="bio">I am Samson Odunola, a front-end developer based in Nigeria, who loves to create beautifull
                and dynmaic user interfaces using tools like React, HTML, CSS, and JavaScript.
                As a developer, i strongly believe there is tech solution to every problem and i am commited to
                solving problems and creating a better user experience.
            </p>
            <button><Link className="aboutlink" to="/about">More about Me-</Link></button>
            
    </header>
    <Work/>
    
    </>;
}



export default Mainpage;