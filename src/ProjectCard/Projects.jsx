import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="project-collection">
      <h5>My Projects</h5>
      <div className="project-items">
        <ProjectCard
          Title="Portfolio Website"
          Description="Discover my responsive portfolio website, crafted with React.js, HTML, CSS, JavaScript, and MUI icons, showcasing my work in a dynamic, user-friendly interface."
          projectLink="https://github.com/Nitinkushwaha19/My-portfolio"
        />
        <ProjectCard
          Title="NewsApp Website"
          Description="A versatile ReactJS and Bootstrap application, featuring light/dark modes and sections for technology, science, and general news...."
          projectLink="https://github.com/Nitinkushwaha19/NewApp"
        />
        <ProjectCard
          Title="Airbnb Clone"
          Description="Airbnb clone: A full-stack project using HTML, CSS, JavaScript (frontend), Node.js (backend), MongoDB (database), and Bootstrap (technology)..."
          projectLink="https://github.com/Nitinkushwaha19/Airbnb-clone"
        />
        <ProjectCard
          Title="Spotify Clone"
          Description="Spotify clone: A frontend project meticulously crafted using pure HTML and CSS to replicate Spotify’s user interface..."
          projectLink="https://github.com/Nitinkushwaha19/Spotify-Clone" 
        />
      </div>
    </div>
  );
}
