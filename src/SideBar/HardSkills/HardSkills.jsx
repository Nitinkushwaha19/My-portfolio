import "./HardSkills.css";
import LinearProgress from "@mui/material/LinearProgress";

export default function HardSkills({ lang, value }) {
  return (
    <div className="hard-skill-lang">
      <div className="lang-name">
        <span className="lang">{lang}</span>
        <span>{value}%</span>
      </div>
      <LinearProgress
        sx={{
          backgroundColor: "#171515",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#ffc107",
          },
        }}
        variant="determinate"
        value={value}
      />
    </div>
  );
}
