import "./ContactCard.css";
export default function ContactCard({
  record1,
  record2,
  record3,
  value1,
  value2,
  value3,
}) {
  return (
      
      <div className="contact-card">
        <ul>
          <li>
            <h6>{record1}</h6> <p>{value1}</p>
          </li>
          <li>
            <h6>{record2}</h6> <p>{value2}</p>
          </li>
          <li>
            <h6>{record3}</h6> <p>{value3}</p>
          </li>
        </ul>
      </div>
   
  );
}
