import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import BudgetForm from "./components/BudgetForm";
import HomePage from "./pages/HomePage"; // Import HomePage

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [user]);

  // Handlers for BudgetForm (replace these with actual implementations)
  const addTransaction = (transaction) => {
    console.log("Add transaction:", transaction);
  };

  const editTransaction = (id, updatedTransaction) => {
    console.log("Edit transaction:", id, updatedTransaction);
  };

  const currentId = null; // Replace with logic to get the current transaction ID if applicable

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to="/home-page" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/home-page" /> : <RegisterPage />}
        />
        <Route
          path="/budget-form"
          element={
            user ? (
              <BudgetForm
                addTransaction={addTransaction}
                editTransaction={editTransaction}
                currentId={currentId}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/home-page"
          element={user ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
