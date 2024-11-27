import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BudgetForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    type: 'expense',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.amount) {
      const newTransaction = {
        id: Date.now(),
        title: formData.title,
        amount: parseFloat(formData.amount),
        type: formData.type,
      };
      addTransaction(newTransaction);
      setFormData({ title: '', amount: '', type: 'expense' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Add a New Transaction</h2>
      
      <input
        type="text"
        name="title"
        placeholder="Transaction Title"
        value={formData.title}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-300"
      />
      
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-300"
      />
      
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ease-in-out duration-300"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300"
      >
        Add Transaction
      </button>
    </form>
  );
};

BudgetForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};

export default BudgetForm;
