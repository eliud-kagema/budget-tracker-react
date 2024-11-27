import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import TransactionList from './components/TransactionList';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };

  const editTransaction = (updatedTransaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    );
    setTransactionToEdit(null); // Reset the edit form after updating
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-5">
      <div className="max-w-5xl md:w-11/12 w-full bg-white shadow-xl rounded-lg p-8 space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-700">Budget Tracker</h1>
        
        <BudgetForm
          addTransaction={addTransaction}
          editTransaction={editTransaction}
          transactionToEdit={transactionToEdit}
        />
        
        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
          onEdit={setTransactionToEdit}
        />
      </div>
    </div>
  );
};

export default App;
