import { GrLinkedinOption,GrGithub } from "react-icons/gr";
const Contact = () => {
    return <div className="about">
        <p className="title">Hello!</p>
            <h1 className="maintitle">
                Contact 
            </h1>
            <p className="bio">Are you looking to take your website, brand or idea to the next level ? I can give you some help, do not hesitate to get in touch.
             I'd love to build someting amazing with you ! Let's discuss your project ....
            </p>
            <div className="contact">
                <div className="directcontact">
                    <p className="title">Drop Me a Line</p>
                    <a href="mailto:odunolasamson@yahoo.com">odunolasamson@yahoo</a><br />  
                    <a href="tel:+2348108476499">(+234) 810 847 6499</a>
                </div>
                <div className="social">
                    <p className="title">Find Me On</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/samson-odunola-25171780/"><GrLinkedinOption/></a></li>
                        <li><a href="https://github.com/samsonOdunola"><GrGithub/></a></li>                        
                    </ul>
                </div>
            </div>
    </div>;
}


export default Contact;