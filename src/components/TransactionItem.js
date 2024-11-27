import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TransactionItem = ({ transaction, editTransaction }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...transaction });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTransaction(transaction.id, formData);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleEditChange}
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleEditChange}
          />
          <select
            name="type"
            value={formData.type}
            onChange={handleEditChange}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>{transaction.title}</p>
          <p>{transaction.amount}</p>
          <p>{transaction.type}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </li>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
  editTransaction: PropTypes.func.isRequired,
};

export default TransactionItem;
