import Sidebar from "../components/Sidebar";
import bg from "../assets/pink.jpg";

const AdminDashboard = () => {
  return (
    <div
      className="admin-wrapper"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",   // ⭐ VERY IMPORTANT
        width: "100%",
      }}
    >
      <Sidebar />

      <div className="admin-content">
        <h2 className="fw-bold mb-4">Dashboard Overview</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="dashboard-card">
              <p>Products</p>
              <h3>3</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-card">
              <p>Orders</p>
              <h3>15</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="dashboard-card">
              <p>Users</p>
              <h3>8</h3>
            </div>
          </div>
        </div>

        <div className="table-section mt-5">
          <h5 className="mb-3">Recent Orders</h5>

          <div className="dashboard-card">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mobile</td>
                  <td>$800</td>
                  <td>Delivered</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Laptop</td>
                  <td>$1400</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
