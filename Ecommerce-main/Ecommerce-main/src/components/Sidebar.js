import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar p-3">
      <h4>Admin</h4>
      <Link to="/admin"><span className="material-icons">dashboard</span>Dashboard</Link>
      <Link to="/products"><span className="material-icons">inventory</span>Products</Link>
    </div>
  );
};

export default Sidebar;
