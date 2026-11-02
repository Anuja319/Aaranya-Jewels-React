import React from "react";

function About() {
  return (
    <div>
      {/* About Hero Section */}
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="badge bg-warning text-dark px-3 py-2 rounded-pill mb-3">
                ✨ About Aaranya
              </span>

              <h1 className="display-4 fw-bold">
                Every Jewel Has a <span className="text-warning">Story</span>
              </h1>

              <p className="lead text-secondary mt-4">
                At Aaranya Jewels, we believe jewellery is more than just an
                accessory. It represents beauty, tradition, emotions and
                unforgettable memories.
              </p>

              <p className="text-secondary">
                Our collection brings together the richness of traditional
                Indian craftsmanship and the elegance of modern designs. Every
                piece is thoughtfully selected to make your special moments even
                more beautiful.
              </p>
            </div>

            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=900"
                className="img-fluid rounded-4 shadow-lg"
                alt="Beautiful jewellery collection"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Our Purpose</h2>
          <p className="text-secondary">
            The values that inspire everything we create.
          </p>
        </div>

        <div className="row g-4">
          {/* Mission */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <div className="display-3 text-warning mb-3">♡</div>

              <h3 className="fw-bold">Our Mission</h3>

              <p className="text-secondary mt-3">
                Our mission is to make beautiful and elegant jewellery
                accessible to everyone while celebrating Indian traditions,
                creativity and quality craftsmanship.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="col-md-6">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <div className="display-3 text-warning mb-3">✨</div>

              <h3 className="fw-bold">Our Vision</h3>

              <p className="text-secondary mt-3">
                Our vision is to become a trusted jewellery destination known
                for timeless designs, customer satisfaction and a perfect blend
                of traditional and modern styles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6">Why Choose Aaranya Jewels?</h2>
            <p className="text-secondary">
              Discover what makes our jewellery special.
            </p>
          </div>

          <div className="row g-4 text-center">
            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div className="display-4 text-warning">💎</div>
                <h5 className="fw-bold mt-3">Unique Designs</h5>
                <p className="text-secondary">
                  Beautiful designs for every style and occasion.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div className="display-4 text-warning">👑</div>
                <h5 className="fw-bold mt-3">Royal Collection</h5>
                <p className="text-secondary">
                  Traditional jewellery inspired by Indian heritage.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div className="display-4 text-warning">⭐</div>
                <h5 className="fw-bold mt-3">Quality First</h5>
                <p className="text-secondary">
                  Attention to detail in every jewellery design.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div className="display-4 text-warning">♡</div>
                <h5 className="fw-bold mt-3">Customer Love</h5>
                <p className="text-secondary">
                  Your happiness and satisfaction matter to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="container py-5 text-center">
        <h2 className="fw-bold">Elegance That Never Goes Out of Style</h2>

        <p className="text-secondary lead mt-3">
          Celebrate your beauty, express your personality and create memories
          with Aaranya Jewels.
        </p>
      </section>
    </div>
  );
}

export default About;
