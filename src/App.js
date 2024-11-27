import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import TransactionList from './components/TransactionList';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-5">
      {/* Main Container */}
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Budget Tracker
        </h1>
        
        {/* Budget Form Section */}
        <BudgetForm addTransaction={addTransaction} />
        
        {/* Transaction List Section */}
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
};

export default App;
