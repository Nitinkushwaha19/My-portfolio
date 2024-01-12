import "./Avtar.css"
import image from "./image.jpg"
export default function Avtar ({name,professoion,sidebarBtn,showImageBtn}) {

    return(        
        <div className="avtarMain">
            <div className="close-sidebar"><i className="fa-solid fa-xmark" onClick={sidebarBtn} ></i></div>
            <div className="imgDiv">
                <img id="avatar-img" src={image} alt="Avtar" />
                <i className="fa-solid fa-expand image-fullscreen" onClick={showImageBtn}></i>
                <div className="lamp-light"></div>
            </div>
            <div className="avtar-info-div">
            <h4><a href="#">{name}</a></h4>
            <p>{professoion[0]} <br /> {professoion[1]}</p>
            </div>
        </div>
    );
    
}