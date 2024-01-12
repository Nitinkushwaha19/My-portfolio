import "./App.css";
import Component from "./Component";
import PreLoader from "./PreLoader/PreLoader";
import { useState,useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return ( isLoading ? <PreLoader/> : <Component/>);
}

export default App;
