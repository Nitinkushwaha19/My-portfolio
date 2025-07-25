import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";
import portfolio from '../assets/portfolio.png'
import newsapp from '../assets/newsapp.png'
import HavenHub from '../assets/HavenHub.png'
import chatApp from "../assets/chatApp.png";
import prepwise from "../assets/image.png"

export default function Projects() {
  return (
    <div className="project-collection">
      <h5>My Projects</h5>
      <div className="project-items">

         <ProjectCard
          Title="AI-Powered Interview Practice Platform"
          Description="AI interview web app with voice input, resume upload, and personalized question generation using Vapi AI, Gemini AI, and a responsive UI with shadcn/ui."
          useTech="Next.js, TypeScript, Firebase, Vapi Ai, Gemini"
          gitHubLink="https://github.com/Nitinkushwaha19/PrepWise"
          projectLink="https://my-portfolio-git-main-nitin-kushwahas-projects.vercel.app/"
          projectImage={prepwise}
        />
        
        <ProjectCard
          Title="HavenHub"
          Description="HavenHub is a full-stack rental PG platform where users can explore PG options, check prices, and connect with owners."
          useTech="EJS, Node.js, Express.js, MongoDB, Bootstrap and Nodemailer"
          gitHubLink="https://github.com/Nitinkushwaha19/Rental-home"
          projectLink="https://rental-home-mm4m.onrender.com/"
          projectImage={HavenHub}
        />
        <ProjectCard
          Title="Chat App"
          Description="Chat App: A real-time chatting application enabling instant communication...."
          useTech="React.js, Node.js, Express.js, WebSockets, MUI, Authentication, and Authorization."
          gitHubLink="https://github.com/Nitinkushwaha19/Chat-App" 
          projectImage={chatApp}
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
          projectLink="https://prep-wise-coral-psi.vercel.app/home/"
          projectImage={portfolio}
        />
        
      </div>
    </div>
  );
}
