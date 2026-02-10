import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg px-4">
      <Link className="navbar-brand fw-bold" to="/">
        ShopQuest
      </Link>

      <div className="ms-auto d-flex align-items-center gap-3">
        <Link to="/" className="text-dark text-decoration-none">Home</Link>
        <Link to="/products" className="text-dark text-decoration-none">Products</Link>

        <Link to="/cart" className="text-dark text-decoration-none">
          <span className="material-icons">shopping_cart</span>
          {cartCount}
        </Link>

        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
