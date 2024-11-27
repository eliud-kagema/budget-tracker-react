import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TransactionItem = ({ transaction, onDelete, onEdit }) => {
  // Handle click events with the relevant transaction data
  const handleEditClick = () => onEdit(transaction);
  const handleDeleteClick = () => onDelete(transaction.id);

  return (
    <div className="p-4 border border-gray-200 rounded-lg flex justify-between items-center shadow-sm hover:shadow-md transition-shadow">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{transaction.title}</h3>
        <p className="text-sm text-gray-500 capitalize">{transaction.type}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span
          className={`text-xl font-bold ${
            transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'
          }`}
        >
          ${transaction.amount.toFixed(2)}
        </span>
        <button
          onClick={handleEditClick}
          className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full transition-colors"
          aria-label="Edit"
          title="Edit this transaction"
        >
          <FaEdit />
        </button>
        <button
          onClick={handleDeleteClick}
          className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-full transition-colors"
          aria-label="Delete"
          title="Delete this transaction"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default TransactionItem;
