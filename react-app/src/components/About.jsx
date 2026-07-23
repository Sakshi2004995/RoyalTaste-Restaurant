function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900"
            alt="Restaurant"
          />
        </div>

        <div className="about-content">
          <span>ABOUT US</span>

          <h2>We Create Delicious Memories</h2>

          <p>
            At RoyalTaste, every dish is prepared with premium ingredients,
            expert chefs and years of culinary experience.
            We believe dining is more than eating—it is an unforgettable
            experience.
          </p>

          <a href="#" className="btn">
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;