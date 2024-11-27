import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BudgetForm = ({ addTransaction }) => {
  
  // state to hold the form data
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Transaction Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <select name="type" value={formData.type} onChange={handleChange}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

BudgetForm.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};

export default BudgetForm;
