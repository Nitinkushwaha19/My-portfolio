import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import "./ProjectCard.css";

export default function ProjectCard({ Title, Description , gitHubLink, projectLink, projectImage, useTech }) {
  return (
    <div className="cards">
      <Card
        sx={{
          maxWidth: 4000,
          maxHeight: 400,
          backgroundColor: "rgba(37, 37, 50, 0.98)",
          color: "#fff",
        }
      }
      >
        <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          width="50"
          image={projectImage}
          alt="Project image"
          style={{objectFit: "fill"}}
        />
          <CardContent style={{padding:"0.5rem 1rem 0.5rem 1rem"}}>
            <Typography gutterBottom variant="p" style={{fontSize:"1rem", paddingTop:"0.5rem", marginBottom:"0rem"}} component="div">
              {Title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary2"
              style={{ color: "#8c8c8e", fontSize: "0.75rem", paddingTop:"0.5rem"}}
            >
              {Description} 
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary2"
              style={{ color: "#8c8c8e", fontSize: "0.75rem", paddingTop:"0.5rem"}}
            >
             <b style={{color:"#c8cfdb"}}>Technology : </b>{useTech} 
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions style={{display:"flex", alignItems:"center"}}>
          {projectLink ? <a className="view-code" href={projectLink} target="_blank" style={{color:"#ffc107"}}>
            View Project
            <i className="fa-solid fa-arrow-up-right-from-square view-code" style={{color:"#ffc107", marginRight:"2rem"}}></i>
          </a>:""}
          <a className="view-code" href={gitHubLink} style={{color:"#ffc107"}}>
          View Code
            <i className="fa-solid fa-arrow-up-right-from-square view-code" style={{color:"#ffc107"}}></i>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}
