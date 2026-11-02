import React, { useState } from "react";
import JewelleryData from "../Data/JewelleryData";

function Products() {
  // State for category selection
  const [category, setCategory] = useState("All");

  // Filter products based on category
  const filteredProducts =
    category === "All"
      ? JewelleryData
      : JewelleryData.filter((item) => item.category === category);

  return (
    <div>
      {/* Products Header */}
      <section className="container-fluid bg-light py-5">
        <div className="container text-center">
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">
            ✨ Our Exclusive Collection
          </span>

          <h1 className="display-4 fw-bold mt-3">
            Discover Our <span className="text-warning">Jewellery</span>
          </h1>

          <p className="lead text-secondary mt-3">
            Explore our beautiful collection of traditional, modern and bridal
            jewellery.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-4">Our Collections</h2>

          <div className="d-flex flex-wrap justify-content-center gap-2">
            {["All", "Traditional", "Modern", "Bridal"].map((item) => (
              <button
                key={item}
                className={`btn rounded-pill px-4 ${
                  category === item ? "btn-warning" : "btn-outline-warning"
                }`}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div className="col-sm-6 col-lg-3" key={item.id}>
                <div className="card border-0 shadow-sm h-100">
                  <div className="ratio ratio-1x1">
                    <img
                      src={item.image}
                      className="card-img-top object-fit-cover"
                      alt={item.name}
                    />
                  </div>

                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-warning text-dark align-self-start mb-2">
                      {item.category}
                    </span>

                    <h5 className="card-title fw-bold">{item.name}</h5>

                    <p className="card-text text-secondary">
                      {item.description}
                    </p>

                    <h5 className="text-warning fw-bold mt-auto">
                      ₹{item.price.toLocaleString("en-IN")}
                    </h5>

                    <button className="btn btn-outline-dark rounded-pill mt-2">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <h4 className="text-secondary">No Jewellery Found!</h4>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="container-fluid bg-warning py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Find Your Perfect Jewellery</h2>

          <p className="lead mt-3">
            Every design tells a story. Make yours beautiful with Aaranya
            Jewels.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Products;
