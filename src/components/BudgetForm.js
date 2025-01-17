import React, { useState, useEffect } from 'react';

const BudgetForm = ({ addTransaction, editTransaction, transactionToEdit, currentId }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');
  const [recurring, setRecurring] = useState(false);

  useEffect(() => {
    if (transactionToEdit) {
      setTitle(transactionToEdit.title);
      setAmount(transactionToEdit.amount);
      setType(transactionToEdit.type);
      setCategory(transactionToEdit.category);
      setRecurring(transactionToEdit.recurring);
    }
  }, [transactionToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: transactionToEdit ? transactionToEdit.id : currentId,
      title,
      amount,
      type,
      category,
      recurring,
      createdAt: new Date().toISOString(),
    };

    if (transactionToEdit) {
      editTransaction(transaction);
    } else {
      addTransaction(transaction);
    }

    setTitle('');
    setAmount(0);
    setCategory('');
    setRecurring(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">{transactionToEdit ? 'Edit' : 'Add'} Transaction</h3>

      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded-md w-full"
          placeholder="Transaction Title"
        />
      </div>

      <div className="mb-4">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="p-2 border rounded-md w-full"
          placeholder="Amount"
        />
      </div>

      <div className="mb-4">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border rounded-md w-full"
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-md w-full"
          placeholder="Category (e.g., Food, Rent)"
        />
      </div>

      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={recurring}
            onChange={() => setRecurring(!recurring)}
            className="mr-2"
          />
          Recurring
        </label>
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-md">
        {transactionToEdit ? 'Save Changes' : 'Add Transaction'}
      </button>
    </form>
  );
};

export default BudgetForm;
