import "./Contact.css";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

export default function Contact({showContact}) {
  return (
    <div className="contact" style={{display:showContact ? "block":"none"}}>
      <div className="contact-details">
        <h3>Contact Information </h3>
        <div className="contact-cards">
          <ContactCard
            record1={"Name"}
            value1={"Nitin Kushwaha"}
            record2={"City"}
            value2={"Nagpur"}
            record3={"Country"}
            value3={"India"}
          />
          <ContactCard 
          record1={"Email"}
          value1={"nitinkushwaha706@gmail.com"}
          record2={"Telegram"}
          value2={"@nitinkushwa"}
          record3={"Instagram"}
          value3={"nitinkushwaha19"}
          />
         
        </div>
      <div className="contact-form-box">
      <h3>Get in touch</h3>
      <ContactForm/>
      </div>
      </div>
    </div>
  );
}
