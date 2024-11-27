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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title Input */}
      <div>
        <input
          type="text"
          name="title"
          placeholder="Transaction Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
        />
      </div>
      
      {/* Amount Input */}
      <div>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
        />
      </div>

      {/* Transaction Type */}
      <div>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition ease-in-out"
        >
          Add Transaction
        </button>
      </div>
    </form>
  );
};

BudgetForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};

export default BudgetForm;
