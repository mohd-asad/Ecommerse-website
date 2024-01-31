import Navbar from "../features/navbar/Navbar";
import UserProfile from "../features/user/component/userProfile";
function UserProfilePage() {
  return (
    <div>
      <Navbar>
        <UserProfile />
      </Navbar>
    </div>
  );
}

export default UserProfilePage;
