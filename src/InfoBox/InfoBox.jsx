import "./InfoBox.css";
import TypingBox from "./TypingBox";
import Typography from "@mui/material/Typography";
import '@fontsource/roboto/700.css';
import SummaryBtn from "./SummaryBtn";



export default function IntroDiv({summaryBtn}) {
  return (
    <div className="main-info " >
      <div className="main-info-banner">
        <h1>
        NITIN KUSHWAHA'S <br /> Portfolio Space!
        </h1>
        <TypingBox/>
        <SummaryBtn summaryBtn={summaryBtn}/>
      </div>
    </div>
  );
}
