import Navbar from "../features/navbar/Navbar";
import AdminOrders from "../features/admin/AdminOrders";

function AdminOrdersPage() {
  return (
    <div>
      <Navbar>
        <AdminOrders />
      </Navbar>
    </div>
  );
}

export default AdminOrdersPage;