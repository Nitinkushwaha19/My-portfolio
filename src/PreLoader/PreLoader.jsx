import { useState,useEffect } from "react";
import './PreLoader.css'
import Loader from "./Loader";



export default function LinearWithValueLabel() {
  const [progress, setProgress] = useState(0);

    useEffect( () => {
    setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1));
    }, 20);
    
  }, []);

  return (
    <div className="preloader">
        <div className="preloader-box">
        <h4>NITIN KUSHWAHA</h4>
        <Loader value={progress} />
        <p>{progress} %</p>
        </div>
    </div>
  );
}