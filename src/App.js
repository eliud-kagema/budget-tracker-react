import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import { TransactionList } from './components/TransactionList';
import ConfirmationModal from './components/ConfirmationModal';

const App = () => {
  // state to manage transaction list
  const [transactions, setTransactions] = useState([]);

  // state to track transaction to edit
  const [transactionToEdit, setTransactionToEdit] = useState(null);

  // tate to manage the confirmation modal's visibility and content
  const [modalState, setModalState] = useState({
    show: false, 
    type: null, // "delete" or "edit"
    transaction: null,
  });


  // Add a new transaction to the list
  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };


  // Update an existing transaction
  const editTransaction = (updatedTransaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    );
    setTransactionToEdit(null);
  };


  // Remove a transaction by its ID
  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };


  // Launch the delete confirmation modal
  const handleDeleteClick = (transaction) => {
    setModalState({ show: true, type: 'delete', transaction });
  };

  const handleEditClick = (transaction) => {
    setModalState({ show: true, type: 'edit', transaction });
  };

  const handleModalConfirm = () => {
    if (modalState.type === 'delete') {
      deleteTransaction(modalState.transaction.id);
    } else if (modalState.type === 'edit') {
      setTransactionToEdit(modalState.transaction);
    }
    setModalState({ show: false, type: null, transaction: null });
  };

  const handleModalCancel = () => {
    setModalState({ show: false, type: null, transaction: null });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-700">Budget Tracker</h1>
        <BudgetForm
          addTransaction={addTransaction}
          editTransaction={editTransaction}
          transactionToEdit={transactionToEdit}
        />
        <TransactionList
          transactions={transactions}
          onDelete={handleDeleteClick}
          onEdit={handleEditClick}
        />
      </div>
      {modalState.show && (
        <ConfirmationModal
          title={
            modalState.type === 'delete'
              ? 'Delete Transaction'
              : 'Edit Transaction'
          }
          message={
            modalState.type === 'delete'
              ? `Are you sure you want to delete "${modalState.transaction.title}"?`
              : `Are you sure you want to edit "${modalState.transaction.title}"?`
          }
          onConfirm={handleModalConfirm}
          onCancel={handleModalCancel}
        />
      )}
    </div>
  );
};

export default App;
