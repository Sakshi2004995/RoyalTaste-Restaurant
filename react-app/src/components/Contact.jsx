import contactData from "../data/contactData";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <span>CONTACT US</span>

          <h2>Get in Touch</h2>

          <p>
            We'd love to hear from you. Visit us, call us, or send us a message
            for reservations and inquiries.
          </p>
        </div>

        <div className="contact-container">

          {/* Contact Information */}

          <div className="contact-info">
            {contactData.map((item) => (
              <ContactCard key={item.id} item={item} />
            ))}
          </div>

          {/* Google Map */}

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=Jaipur,Rajasthan&output=embed"
              title="RoyalTaste Location"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;