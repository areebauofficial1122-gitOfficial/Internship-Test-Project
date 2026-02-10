import { useParams } from "react-router-dom";
import products from "../data/products";

import laptopImg from "../assets/laptop.jpg";
import mobileImg from "../assets/mobile.jpg";
import headphonesImg from "../assets/headphones.jpg";
import pinkBg from "../assets/pink.jpg";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="container mt-5">Product not found</div>;
  }

  /* choose image */
  let image;
  if (product.name === "Laptop") image = laptopImg;
  else if (product.name === "Mobile") image = mobileImg;
  else if (product.name === "Headphones") image = headphonesImg;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${pinkBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="glass p-5">

          <div className="row align-items-center">

            {/* IMAGE */}
            <div className="col-md-6 text-center">
              <img
                src={image}
                alt={product.name}
                style={{
                  width: "100%",
                  maxHeight: "350px",
                  objectFit: "contain",
                  background: "white",
                  padding: "20px",
                  borderRadius: "16px"
                }}
              />
            </div>

            {/* DETAILS */}
            <div className="col-md-6">
              <h2 className="fw-bold mb-3">{product.name}</h2>

              <p className="text-muted">
                {product.description}
              </p>

              <h3 className="my-3">${product.price}</h3>

              {/* extra info */}
              <ul className="text-muted">
                <li>Brand: LuxeStore</li>
                <li>Category: Electronics</li>
                <li>Availability: In Stock</li>
                <li>Delivery: 2–4 working days</li>
                <li>Warranty: 1 year official</li>
              </ul>

              <button
                className="btn btn-primary mt-3 px-4"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
