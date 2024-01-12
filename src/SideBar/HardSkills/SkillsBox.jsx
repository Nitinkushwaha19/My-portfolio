import HardSkills from "./HardSkills";

export default function SkillsBox() {
  return (
    <div>
      <div className="skills-box" >
        <HardSkills lang={"JAVA"} value={80} />
        <HardSkills lang={"C++"} value={70} />
        <HardSkills lang={"HTML"} value={95} />
        <HardSkills lang={"CSS"} value={85} />
        <HardSkills lang={"JAVASCRIPT"} value={90} />
        <HardSkills lang={"REACT"} value={85} />
        <HardSkills lang={"SQL"} value={75} />
        <HardSkills lang={"MONGODB"} value={80} />
        <HardSkills lang={"NODE JS"} value={90} />
      </div>
    </div>
  );
}
