import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import TransactionList from './components/TransactionList';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  const editTransaction = (id, updatedTransaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === id ? updatedTransaction : transaction
      )
    );
  };

  return (
    <div className="app">
      <h1>Budget Tracker</h1>
      <BudgetForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} editTransaction={editTransaction} />
    </div>
  );
};

export default App;
