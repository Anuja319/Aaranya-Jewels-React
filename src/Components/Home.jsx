import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            {/* Left Content */}
            <div className="col-lg-6 text-center text-lg-start py-5">
              <span className="badge bg-warning text-dark rounded-pill px-3 py-2 mb-3">
                ✨ Timeless Elegance
              </span>

              <h1 className="display-3 fw-bold text-dark">
                Jewellery That
                <span className="text-warning"> Tells Your Story</span>
              </h1>

              <p className="lead text-secondary mt-4">
                Discover the beauty of traditional craftsmanship and modern
                elegance. Explore our exclusive collection of handcrafted
                jewellery made to celebrate every moment.
              </p>

              <div className="mt-4">
                <NavLink
                  to="/products"
                  className="btn btn-warning btn-lg rounded-pill px-4 me-3"
                >
                  Explore Collection
                </NavLink>

                <NavLink
                  to="/about"
                  className="btn btn-outline-dark btn-lg rounded-pill px-4"
                >
                  Know More
                </NavLink>
              </div>

              <div className="row mt-5 text-center">
                <div className="col-4">
                  <h3 className="fw-bold text-warning">500+</h3>
                  <p className="text-secondary">Designs</p>
                </div>

                <div className="col-4">
                  <h3 className="fw-bold text-warning">1000+</h3>
                  <p className="text-secondary">Happy Clients</p>
                </div>

                <div className="col-4">
                  <h3 className="fw-bold text-warning">100%</h3>
                  <p className="text-secondary">Elegance</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=900"
                className="img-fluid rounded-4 shadow-lg"
                alt="Elegant Gold Jewellery"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">Explore Our Collections</h2>
          <p className="text-secondary">
            Discover jewellery for every style and occasion.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 text-center">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600"
                className="card-img-top"
                alt="Traditional Necklace"
              />
              <div className="card-body">
                <h4 className="fw-bold">Traditional Jewellery</h4>
                <p className="text-secondary">
                  Celebrate Indian heritage with timeless designs.
                </p>
                <NavLink to="/products" className="btn btn-outline-warning">
                  Explore More
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 text-center">
              <img
                src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600"
                className="card-img-top"
                alt="Modern Earrings"
              />
              <div className="card-body">
                <h4 className="fw-bold">Modern Jewellery</h4>
                <p className="text-secondary">
                  Elegant jewellery for your everyday fashion.
                </p>
                <NavLink to="/products" className="btn btn-outline-warning">
                  Explore More
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 text-center">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600"
                className="card-img-top"
                alt="Beautiful Rings"
              />
              <div className="card-body">
                <h4 className="fw-bold">Elegant Rings</h4>
                <p className="text-secondary">
                  Make every special moment unforgettable.
                </p>
                <NavLink to="/products" className="btn btn-outline-warning">
                  Explore More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="container-fluid bg-warning py-5">
        <div className="container text-center">
          <h2 className="fw-bold display-6">
            Celebrate Every Moment With Aaranya Jewels
          </h2>

          <p className="lead mt-3">
            Beautiful jewellery, timeless memories and endless elegance.
          </p>

          <NavLink
            to="/products"
            className="btn btn-dark btn-lg rounded-pill px-5 mt-3"
          >
            Shop Collection
          </NavLink>
        </div>
      </section>
    </div>
  );
}

export default Home;
