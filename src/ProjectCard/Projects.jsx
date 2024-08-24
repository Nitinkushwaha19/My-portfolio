import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";
import portfolio from '../assets/portfolio.png';
import newsapp from '../assets/newsapp.png';
import HavenHub from "../assets/HavenHub.png"

export default function Projects() {
  return (
    <div className="project-collection">
      <h5>My Projects</h5>
      <div className="project-items">
        <ProjectCard
          Title="HavenHub"
          Description="HavenHub is a full-stack rental PG platform where users can explore PG options, check prices, and connect with owners."
          useTech="EJS, Node.js, Express.js, MongoDB, Bootstrap and Nodemailer"
          gitHubLink="https://github.com/Nitinkushwaha19/Rental-home"
          projectLink="https://rental-home-mm4m.onrender.com/"
          projectImage={HavenHub}
        />
        <ProjectCard
          Title="NewsApp Website"
          Description="NewApp is a user-friendly news platform providing updates across various fields, featuring both dark and light modes for enhanced readability..."
          useTech="React js, MUI, bootstrap"
          gitHubLink="https://github.com/Nitinkushwaha19/NewApp"
          projectImage={newsapp}
        />
        <ProjectCard
          Title="Portfolio Website"
          Description="Discover my responsive portfolio website, crafted with React.js, HTML, CSS, JavaScript, and MUI icons, showcasing my work in a dynamic, user-friendly interface."
          useTech="React js, Nodemailer, MUI, Tailwind css"
          gitHubLink="https://github.com/Nitinkushwaha19/My-portfolio"
          projectLink="https://my-portfolio-git-main-nitin-kushwahas-projects.vercel.app/"
          projectImage={portfolio}
        />
        <ProjectCard
          Title="Spotify Clone"
          Description="Spotify clone: A frontend project meticulously crafted using pure HTML and CSS to replicate Spotify’s user interface..."
          gitHubLink="https://github.com/Nitinkushwaha19/Spotify-Clone" 
        />
      </div>
    </div>
  );
}
