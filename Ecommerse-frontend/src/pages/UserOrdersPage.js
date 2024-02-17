import Navbar from "../features/navbar/Navbar";
import UserOrders from "../features/user/component/userOrders";
function UserOrdersPage() {
  return (
    <div>
      <Navbar>
        <UserOrders />
      </Navbar>
    </div>
  );
}

export default UserOrdersPage;
