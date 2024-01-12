import './ImageBox.css'

export default function ImageBox({showImageBtn,showImage}) {
  return (
    <div className="container image-box" style={{display:showImage? "block":"none"}} >
      <div className="image-nav">
        <div></div>
        <i className="fa-solid fa-xmark" onClick={showImageBtn}></i>
      </div>
      <div className="image-container">
       
      </div>

    </div>
  );
}
