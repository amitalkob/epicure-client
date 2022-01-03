import "./UserPage.scss";
import { useNavigate } from "react-router";

const UserPage = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("Token");
    navigate("/login");
  };

  return (
    <div className="logout-container">
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default UserPage;
