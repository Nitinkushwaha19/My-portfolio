import CertificateCard from "./CertificateCard";
import "./HrScrollBar.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import webDevImage from '../assets/webDevelopment.png'
import cImage from '../assets/C.jpg';
import cppImage from '../assets/Cpp.jpg';

export default function HrScrollBar()  {

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1565,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      
    ]
  };

  return (
    <div className="certificates-bar-main">
    <h5 className="Certificate-heading">Certificates</h5>
    <div className="certificates-bar">
      <div className="slider" >
      <Slider {...settings}>
        <CertificateCard courseName={"Full Stack Web Development"} imgLink={webDevImage} />
        <CertificateCard courseName="CPP Programming" imgLink={cImage}/>
        <CertificateCard courseName="C Programming" imgLink={cppImage} />
        <CertificateCard  />
      </Slider>
      </div>
    </div>
    </div>
  );
}
