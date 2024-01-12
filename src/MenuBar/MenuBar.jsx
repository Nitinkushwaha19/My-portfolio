import { useState } from "react";
import "./MenuBar.css";
import MenuOption from "./MenuOption";
import Cvv from '../SideBar/DownloadCV/NitinKushwaha.pdf'

export default function MenuBar({contactBtn,projectBtn}) {

    
  let [menuBarBtn, setMenuBarBtn] = useState(false);
  
  let showMenuBar = () => {
    setMenuBarBtn(!menuBarBtn);
  };

  return (
    <div
      className="menu-bar"
      style={{
        width: (menuBarBtn )? "240px" : "65px",
        transition: "linear 1s",
        display: menuBarBtn
      }}
    >
      <div className="menu-btn">
        {menuBarBtn ? (
          <i className="fa-solid fa-xmark" onClick={showMenuBar}></i>
        ) : (
          <i className="fa-solid fa-bars" onClick={showMenuBar}></i>
        )}
      </div>
      <div className="menubar-items" style={{display:menuBarBtn? "block":"none"}}>
            <MenuOption contactBtn={contactBtn} item={"Contact Me"}/>
            <MenuOption item={<a href={Cvv}  download={"Nitin's resume"}>Download CV <i className="fa-solid fa-download"></i></a>}/>
      </div>
    </div>
  );
}
