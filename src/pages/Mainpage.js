import { Link } from "react-router-dom";
import Work from "../components/Work";
const Mainpage = () => {
  return (
    <>
      <header>
        <p className="title">FREELANCE</p>
        <h1 className="maintitle">
          Full Stack <br />
          Developer
        </h1>
        <p className="bio">
          I am Samson Odunola, a full stack MERN developer based in Nigeria, who
          loves to create beautiful and dynamic user interfaces using tools like
          React, HTML, CSS, and JavaScript. As a developer, I strongly believe
          there is tech solution to every problem and i am committed to solving
          problems and creating a better user experience
        </p>
        <button>
          <Link className="aboutlink" to="/about">
            More about Me-
          </Link>
        </button>
      </header>
      <Work />
    </>
  );
};

export default Mainpage;
