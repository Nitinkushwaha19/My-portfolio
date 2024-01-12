import "./Nav.css";
import Cvv from "../SideBar/DownloadCV/Cvv.pdf";

export default function Nav ({contactBtn,projectBtn}) {
    return (
        <div className="navBar-skills">
            <div className="nav-skills-items">
            <span onClick={projectBtn}>Projects</span>
            <span onClick={projectBtn}>Certificates</span>
            <span onClick={contactBtn}>Contact Me</span>
            <a href={Cvv}  download={"Nitin's Cvv"}>Download CV <i className="fa-solid fa-download"></i></a>
            </div>
        </div>
    );
}