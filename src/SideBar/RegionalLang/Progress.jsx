import "./Progress.css";
import ProgressBar from "./ProgressBar";
export default function Progress () {
    return(
        <div className="lang-skill-item">
           <ProgressBar value={100} lang={"Hindi"}/>
           <ProgressBar value={95} lang={"English"} />
           <ProgressBar value={75} lang={"Marathi"} />
        </div>
    );
}