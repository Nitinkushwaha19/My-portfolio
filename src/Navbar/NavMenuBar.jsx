import Cvv from '../SideBar/DownloadCV/NitinKushwaha.pdf';
import MenuOption from '../MenuBar/MenuOption';
import './NavMenuBar.css';

export default function NavMenuBar ({navMenuBar,navMenuBarBtn,contactBtn,projectBtn}) {
    return(
        <div className="nav-menu-bar" style={{display:navMenuBar? "block" : "none"}} >
            <div className="nav-menu-btn">
            <i className="fa-solid fa-xmark" onClick={navMenuBarBtn} ></i>
            </div>
            <div className="menu-items">
            <MenuOption item={<div onClick={projectBtn} style={{color:"#fff" , width:"100%"}}>Project</div>}/>
            <MenuOption contactBtn={contactBtn} item={"Contact Me"}/>
            <MenuOption item={<a href={Cvv}  download={"Nitin's resume"}>Download CV <i className="fa-solid fa-download"></i></a>}/>
            </div>
        </div>
    );
}