import "./NavBar.css";

export default function NavBar({sidebarBtn,showSidebar,navMenuBarBtn,navMenuBar}) {
 
  return (
    <div className="navbar" style={{opacity:showSidebar? "0.7":"1"}}>
      <div className="navbar-slide">
        <div className="slidbar-btn">
          <i className="fa-solid fa-ellipsis-vertical" onClick={sidebarBtn} style={{display:navMenuBar? "none" : "block"}} ></i>
        </div>
        <div className="home-bar">
          <i className="fa-solid fa-bars home-bar-icon" onClick={navMenuBarBtn}  style={{display: showSidebar  ? "none" : "block"}}></i>
        </div>
      </div>
    </div>
  );
}

