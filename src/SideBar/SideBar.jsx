import "./SideBar.css";
import Avtar from "./Avtar/Avtar";
import ScorllBox from "./ScrollBox/ScrollBox";
import SocialMedia from "./Social/SocialMedia";
export default function SideBar({sidebarBtn,showImageBtn}) {
  return (
    <>
      <div className="sideContainer">
        <Avtar  name={"NITIN KUSHWAHA"} professoion={["Software Engineer", "Full Stack Developer | Java DSA"]} sidebarBtn={sidebarBtn} showImageBtn={showImageBtn}/>
        <ScorllBox/>
        <SocialMedia/>
      </div>
    </>
  );
}
