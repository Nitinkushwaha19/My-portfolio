import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import "./ProjectCard.css";

export default function ProjectCard({ Title, Description , projectLink }) {
  return (
    <div className="cards">
      <Card
        sx={{
          maxWidth: 4000,
          maxHeight: 300,
          backgroundColor: "rgba(37, 37, 50, 0.98)",
          color: "#fff",
        }
      }
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="p" style={{fontSize:"1rem", paddingTop:"0.5rem"}} component="div">
              {Title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary2"
              style={{ color: "#8c8c8e", fontSize: "0.75rem", paddingTop:"0.5rem"}}
            >
              {Description} 
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <a className="view-code" href={projectLink} style={{color:"#ffc107"}}>
            View Code
            <i className="fa-solid fa-arrow-up-right-from-square view-code" style={{color:"#ffc107"}}></i>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}
