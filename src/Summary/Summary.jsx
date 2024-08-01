import "./Summary.css";

export default function Summary({ showSummary , summaryBtn }) {
  return (
    <div
      className="summary"
      style={{ display: showSummary ? "block" : "none" }}
    >
      <div className="summary-nav ">
        <h3>SUMMARY</h3>
        <div className="summary-closeBtn" onClick={summaryBtn}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div className="container summary-container offset-1 ">
        <p className="summary-section-intro">
        Hello! I'm Nitin Kushwaha, a 1st-year Master of computer application student at Shri Ramdeobaba College of Engineering and Management. I'm passionate about web development and have honed my skills as a MERN stack developer.
        </p>
        <p className="summary-sectionn-tool-skills">
          - My technical skills include:
        </p>
        <ul>
          <li>Programming in Java with a focus on data structures and algorithms</li>
          <li>Proficiency in HTML, CSS, JavaScript, and React.js</li>
          <li>Experience with Bootstrap and Tailwind CSS for responsive design</li>
          <li>Backend development with Node.js and Express.js</li>
          <li>Database management with MongoDB and MySQL</li>
        </ul>

        {/* <h5>Objective</h5> */}
        <p className="summary-section-objective">
        I'm always eager to learn and grow, seeking opportunities that will allow me to apply and expand my skill set. Feel free to reach out to me for collaborations or just to connect!
        </p>
      </div>
    </div>
  );
}
