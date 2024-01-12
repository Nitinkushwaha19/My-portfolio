import "./CertificateCard.css";
import Rating from "@mui/material/Rating";


export default function CertificateCard({imgLink, courseName = "web development" }) {
  return (
    
    <div className="certificate-card">
      <div className="card-info">
        <h5>{courseName}</h5>
        <p>Nitin Kushwaha</p>
        <Rating
          name="read-only"
          style={{ fontSize: "1rem" }}
          value={5}
          readOnly
        />
      </div>
      <div className="card-img">
        <img id="certificate-img" src={imgLink} alt={courseName} />
      </div>
    </div>
    
  );
}
