import { useState } from "react";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("🎉 Your table has been reserved successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
    });
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="section-title">
          <span>BOOK A TABLE</span>

          <h2>Reserve Your Dining Experience</h2>

          <p>
            Enjoy a memorable meal with your family and friends.
            Reserve your table in advance for a hassle-free experience.
          </p>
        </div>

        <div className="reservation-container">
          <form className="reservation-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                <option value="">Guests</option>
                <option>1 Person</option>
                <option>2 Persons</option>
                <option>3 Persons</option>
                <option>4 Persons</option>
                <option>5 Persons</option>
                <option>6+ Persons</option>
              </select>
            </div>

            <button type="submit" className="btn">
              Book Table
            </button>

            {message && (
              <p
                style={{
                  color: "green",
                  marginTop: "20px",
                  fontWeight: "600",
                }}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Reservation;