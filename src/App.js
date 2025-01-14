import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BudgetForm from "./components/BudgetForm"; // Assuming BudgetForm is in components

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user !== null || user === null) {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/budget-form" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/budget-form" /> : <RegisterPage />}
        />
        <Route
          path="/budget-form"
          element={user ? <BudgetForm /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
