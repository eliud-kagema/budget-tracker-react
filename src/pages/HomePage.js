import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../components/shared/Header';
import Sidebar from '../components/shared/Sidebar';
import Footer from '../components/shared/Footer';
import BudgetSummary from '../components/BudgetSummary'; 
import BudgetGraph from '../components/BudgetGraph';
import 'animate.css';
import { FaChartBar, FaWallet, FaPiggyBank, FaRegCreditCard } from 'react-icons/fa';

const HomePage = () => {
  const navigate = useNavigate(); 
  const [budget, setBudget] = useState(() => {
    const savedBudget = JSON.parse(localStorage.getItem('budget'));
    return savedBudget || { income: 0, expenses: 0, savingsGoal: 0, startDate: '', endDate: '' };
  });

  const handleLogout = () => {
    // Clear user session 
    localStorage.removeItem('user');
    localStorage.removeItem('budget');
    
    // Redirect to the login page
    navigate('/login');
    console.log('User logged out');
  };

  // Calculate current balance
  const currentBalance = budget.income - budget.expenses;

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen">
        {/* Header */}
        <Header onLogout={handleLogout} />

        <div className="container mx-auto p-8">
          {/* Welcome Section */}
          <header className="text-center mb-12 animate__animated animate__fadeIn">
            <h1 className="text-5xl font-bold text-white">Welcome to Your Personal Finance Dashboard</h1>
            <p className="text-lg text-white mt-3">Take control of your finances with our personalized budget planner!</p>
          </header>

          {/* Budget Summary Section */}
          <div className="mt-12">
            <BudgetSummary budget={budget} transactions={[]} /> {/* Pass the budget and transactions as props */}
          </div>

          {/* Finance Overview Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Current Balance Card */}
            <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-md shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 animate__animated animate__fadeInUp">
              <FaWallet className="text-4xl text-white mb-4" />
              <h3 className="text-xl font-bold text-white">Current Balance</h3>
              <p className="text-2xl text-white mt-2">{currentBalance.toFixed(2)}</p>
            </div>

            {/* Monthly Expenses Card */}
            <div className="bg-gradient-to-r from-red-400 to-red-600 p-6 rounded-md shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 animate__animated animate__fadeInUp">
              <FaRegCreditCard className="text-4xl text-white mb-4" />
              <h3 className="text-xl font-bold text-white">Monthly Expenses</h3>
              <p className="text-2xl text-white mt-2">{budget.expenses.toFixed(2)}</p>
            </div>

            {/* Savings Goal Card */}
            <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-md shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 animate__animated animate__fadeInUp">
              <FaPiggyBank className="text-4xl text-white mb-4" />
              <h3 className="text-xl font-bold text-white">Savings Goal</h3>
              <p className="text-2xl text-white mt-2">{budget.savingsGoal.toFixed(2)}</p>
            </div>
          </div>

          {/* Budget Graph Section */}
          <div className="mt-12 animate__animated animate__fadeIn">
            <BudgetGraph budget={budget} /> {/* Include the BudgetGraph component here */}
          </div>

          {/* Final Statement */}
          <div className="text-center mt-12 animate__animated animate__fadeIn">
            <p className="text-lg text-white">Track your spending and plan your future effectively.</p>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
