import React, { useState } from 'react';
import BudgetForm from './components/BudgetForm';
import { TransactionList } from './components/TransactionList';
import ConfirmationModal from './components/ConfirmationModal';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionToEdit, setTransactionToEdit] = useState(null);
  const [modalState, setModalState] = useState({
    show: false,
    type: null,
    transaction: null,
  });

  // State to track the auto-incrementing id
  const [currentId, setCurrentId] = useState(1);

  // Add a new transaction to the list
  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
    // Increment the id for the next transaction
    setCurrentId((prevId) => prevId + 1);
  };

  // Update an existing transaction
  const editTransaction = (updatedTransaction) => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    );
    setTransactionToEdit(null);  // Reset the form after editing
  };

  // Remove a transaction by its ID
  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
    setCurrentId((prevId) => prevId - 1);  // Decrease the ID if needed (optional)
  };

  // Handle delete click
  const handleDeleteClick = (transaction) => {
    setModalState({ show: true, type: 'delete', transaction });
  };

  // Handle edit click
  const handleEditClick = (transaction) => {
    setModalState({ show: true, type: 'edit', transaction });
  };

  // Handle modal confirmation
  const handleModalConfirm = () => {
    if (modalState.type === 'delete') {
      deleteTransaction(modalState.transaction.id);
    } else if (modalState.type === 'edit') {
      setTransactionToEdit(modalState.transaction);
    }
    setModalState({ show: false, type: null, transaction: null });
  };

  // Handle modal cancellation
  const handleModalCancel = () => {
    setModalState({ show: false, type: null, transaction: null });
  };

  // Modal title and message logic
  const modalTitle = modalState.type === 'delete' ? 'Delete Transaction' : 'Edit Transaction';
  const modalMessage = modalState.type === 'delete'
    ? `Are you sure you want to delete "${modalState.transaction?.title}"?`
    : `Are you sure you want to edit "${modalState.transaction?.title}"?`;

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-700">Budget Tracker</h1>
        <BudgetForm
          addTransaction={addTransaction}
          editTransaction={editTransaction}
          transactionToEdit={transactionToEdit}
          currentId={currentId} // Pass currentId to BudgetForm
        />
        <TransactionList
          transactions={transactions}
          onDelete={handleDeleteClick}
          onEdit={handleEditClick}
        />
      </div>
      {modalState.show && (
        <ConfirmationModal
          title={modalTitle}
          message={modalMessage}
          onConfirm={handleModalConfirm}
          onCancel={handleModalCancel}
        />
      )}
    </div>
  );
};

export default App;
