import products from "../data/products";
import { Link } from "react-router-dom";
import bg from "../assets/products-bg.jpg";

import laptopImg from "../assets/laptop.jpg";
import mobileImg from "../assets/mobile.jpg";
import headphonesImg from "../assets/headphones.jpg";

const Products = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "60px 0",
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-4">Our Products</h2>

        <div className="row">
          {products.map((p) => {
            let image;

            if (p.name === "Laptop") image = laptopImg;
            else if (p.name === "Mobile") image = mobileImg;
            else if (p.name === "Headphones") image = headphonesImg;

            return (
              <div className="col-md-4 mb-4" key={p.id}>
                <div className="glass p-4 h-100 text-center">

                  {/* ✅ PRODUCT IMAGE FIXED */}
                  <img
                    src={image}
                    alt={p.name}
                    style={{
                      height: "150px",
                      width: "100%",
                      objectFit: "contain",
                      background: "white",
                      padding: "10px",
                      borderRadius: "12px",
                      marginBottom: "15px"
                    }}
                  />

                  <h5 className="fw-semibold">{p.name}</h5>
                  <p className="text-muted">${p.price}</p>

                  <Link to={`/products/${p.id}`} className="btn btn-primary w-100">
                    View Details
                  </Link>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Products;
