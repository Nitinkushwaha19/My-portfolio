import "./ScrollBox.css";
import Info from "../Info/Info";
import Progress from "../RegionalLang/Progress.jsx";
import SkillsBox from "../HardSkills/SkillsBox.jsx";
import KnowledgeList from "../KnowledgeList/KnowlegeList";
import DownloadCv from "../DownloadCV/DownloadBtn";

export default function ScorllBox() {
  return (
    <div className="scrollBar">
      <div className="ul-content">
        <Info />
        <div className="divider"></div>
        <Progress/>
        <div className="divider"></div>
        <SkillsBox/>
        <div className="divider"></div>
        <KnowledgeList/>
        <div className="divider"></div>
        <DownloadCv/>
      </div>
    </div>
  );
}
