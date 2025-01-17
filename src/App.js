import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BudgetPage from "./pages/BudgetPage"; // Changed import here
import HomePage from "./pages/HomePage";

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={user ? <Navigate to="/home-page" /> : <LoginPage />}
        />
        
        {/* Register Route */}
        <Route
          path="/register"
          element={user ? <Navigate to="/home-page" /> : <RegisterPage />}
        />
        
        {/* Budget Page Route */}
        <Route
          path="/budget"
          element={
            user ? (
              <BudgetPage /> // Render BudgetPage component here
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        
        {/* Home Page Route */}
        <Route
          path="/home-page"
          element={user ? <HomePage /> : <Navigate to="/login" />}
        />
        
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
