import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Welcome, {user ? user.email : "Guest"}!</h1>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>Please log in to access your account.</p>
      )}
    </div>
  );
};

export default HomePage;
