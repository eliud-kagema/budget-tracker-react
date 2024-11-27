import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BudgetForm = ({ addTransaction, editTransaction, transactionToEdit, currentId }) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    type: 'expense',
  });

  useEffect(() => {
    if (transactionToEdit) {
      setFormData({
        title: transactionToEdit.title,
        amount: transactionToEdit.amount.toString(),
        type: transactionToEdit.type,
      });
    }
  }, [transactionToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.amount) {
      const newTransaction = {
        id: transactionToEdit ? transactionToEdit.id : currentId, // Use the passed currentId
        title: formData.title,
        amount: parseFloat(formData.amount),
        type: formData.type,
        createdAt: new Date().toISOString(), // Add the current date and time
      };

      if (transactionToEdit) {
        editTransaction(newTransaction);
      } else {
        addTransaction(newTransaction);
      }

      setFormData({ title: '', amount: '', type: 'expense' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
      <input
        type="text"
        name="title"
        placeholder="Transaction Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button
        type="submit"
        className={`w-full py-3 rounded-md text-white font-bold ${
          transactionToEdit
            ? 'bg-yellow-500 hover:bg-yellow-600'
            : 'bg-blue-600 hover:bg-blue-700'
        } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500`}
      >
        {transactionToEdit ? 'Update Transaction' : 'Add Transaction'}
      </button>
    </form>
  );
};

BudgetForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,
  editTransaction: PropTypes.func.isRequired,
  transactionToEdit: PropTypes.object,
  currentId: PropTypes.number.isRequired,
};

BudgetForm.defaultProps = {
  transactionToEdit: null,
};

export default BudgetForm;
