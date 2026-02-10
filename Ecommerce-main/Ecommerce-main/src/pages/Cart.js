import bg from "../assets/products-bg.jpg";

import laptopImg from "../assets/laptop.jpg";
import mobileImg from "../assets/mobile.jpg";
import headphonesImg from "../assets/headphones.jpg";

const Cart = ({ cartItems = [], removeFromCart }) => {

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-4">Your Cart</h2>

        {cartItems.length === 0 ? (
          <div className="glass p-4 text-center">
            <p>No items in cart</p>
          </div>
        ) : (
          <>
            {/* PRODUCTS */}
            <div className="row">
              {cartItems.map((item, index) => {
                let image;

                if (item.name === "Laptop") image = laptopImg;
                else if (item.name === "Mobile") image = mobileImg;
                else if (item.name === "Headphones") image = headphonesImg;

                return (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className="glass p-4 text-center h-100">

                      <img
                        src={image}
                        alt={item.name}
                        style={{
                          height: "150px",
                          width: "100%",
                          objectFit: "contain",
                          background: "white",
                          padding: "15px",
                          borderRadius: "12px",
                          marginBottom: "15px",
                        }}
                      />

                      <h5 className="fw-semibold">{item.name}</h5>
                      <p className="text-muted">${item.price}</p>

                      {/* REMOVE BUTTON */}
                      <button
                        className="btn btn-danger mt-2"
                        onClick={() => removeFromCart(index)}
                      >
                        Remove
                      </button>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* TOTAL */}
            <div className="glass p-4 mt-4">
              <h4>Total Items: {cartItems.length}</h4>
              <h3 className="mt-2">Total Price: ${totalAmount}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
