import React, { useState, useEffect } from 'react';
import Header from '../components/shared/Header';
import Sidebar from '../components/shared/Sidebar';
import Footer from '../components/shared/Footer';
import BudgetForm from '../components/BudgetForm';
import TransactionList from '../components/TransactionList';
import BudgetSummary from '../components/BudgetSummary';
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

  const [currentId, setCurrentId] = useState(() => {
    const savedId = localStorage.getItem('currentId');
    return savedId ? parseInt(savedId) : transactions.length + 1;
  });

  useEffect(() => {
    localStorage.setItem('budget', JSON.stringify(budget));
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('currentId', currentId);
  }, [currentId]);

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
    setCurrentId(currentId + 1); // Increment the ID counter
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

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen">
        <Header />
        <header className="text-center mb-12 animate__animated animate__fadeIn">
          <h1 className="text-5xl font-bold text-white">Budget Planning</h1>
          <p className="text-lg text-white mt-3">Manage your budget and track your expenses!</p>
        </header>

        <div className="container mx-auto p-8">
          <BudgetForm
            addTransaction={addTransaction}
            editTransaction={editTransaction}
            transactionToEdit={transactionToEdit}
            currentId={currentId}
          />
        </div>

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          setTransactionToEdit={setTransactionToEdit}
        />

        <BudgetSummary budget={budget} transactions={transactions} />

        <Footer />
      </div>
    </div>
  );
};

export default BudgetPage;
