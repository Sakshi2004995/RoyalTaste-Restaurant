import features from "../data/featuresData";

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          <span>WHY CHOOSE US</span>

          <h2>Why People Love RoyalTaste</h2>

          <p>
            We deliver exceptional dining experiences with premium ingredients,
            experienced chefs, and outstanding hospitality.
          </p>
        </div>

        <div className="features-grid">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div className="feature-card" key={item.id}>
                <i>
                  <Icon />
                </i>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;