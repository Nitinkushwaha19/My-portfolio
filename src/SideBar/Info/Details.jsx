import "./Details.css";
export default function Details({ details, value }) {
  return (
    <>
     
        <div className="details">
          <h6>{details}:</h6>
          <span>{value}</span>
        </div>
      
    </>
  );
}
