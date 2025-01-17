import React, { useState, useEffect } from 'react';
import { FaPiggyBank, FaMoneyBillWave, FaCalendarAlt, FaTrash, FaEdit } from 'react-icons/fa';
import BudgetForm from '../components/BudgetForm';
import TransactionList from '../components/TransactionList';
import 'animate.css';

const BudgetPage = () => {
  const [budget, setBudget] = useState(() => {
    const savedBudget = JSON.parse(localStorage.getItem('budget'));
    return savedBudget || { income: 0, expenses: 0, savingsGoal: 0, startDate: '', endDate: '' };
  });

  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
    return savedTransactions || [];
  });

  const [transactionToEdit, setTransactionToEdit] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBudget((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveBudget = (e) => {
    e.preventDefault();
    localStorage.setItem('budget', JSON.stringify(budget));
    alert('Budget saved successfully!');
  };

  const addTransaction = (transaction) => {
    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  const editTransaction = (updatedTransaction) => {
    const updatedTransactions = transactions.map((t) =>
      t.id === updatedTransaction.id ? updatedTransaction : t
    );
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    setTransactionToEdit(null);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((t) => t.id !== id);
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget]);

  return (
    <div className="p-8">
      <header className="text-center mb-12 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-bold text-gray-800">Budget Planner</h1>
        <p className="text-lg text-gray-600 mt-3">Track your spending and achieve your goals.</p>
      </header>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto animate__animated animate__fadeInUp">
        <form onSubmit={handleSaveBudget}>
          {/* Budget form fields */}
          {/* ...same as current implementation... */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-8 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Save Budget
            </button>
          </div>
        </form>
      </div>

      {/* Add Transaction Form */}
      <BudgetForm
        addTransaction={addTransaction}
        editTransaction={editTransaction}
        transactionToEdit={transactionToEdit}
        currentId={transactions.length + 1}
      />

      {/* Transaction List */}
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        setTransactionToEdit={setTransactionToEdit}
      />

      {/* Budget Summary */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* ...same summary cards... */}
      </div>
    </div>
  );
};

export default BudgetPage;
