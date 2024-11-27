import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TransactionItem = ({ transaction, onDelete, onEdit }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short', // Shortened month (3-letter)
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-between shadow-sm hover:shadow-md transition-shadow mb-4 w-full">
      {/* Transaction Data in One Row */}
      <div className="flex items-center space-x-6 w-full overflow-x-auto">
        {/* Transaction ID (displayed with a dot) */}
        <div className="text-sm text-gray-600 font-medium w-1/6 truncate">
          {transaction.id}.
        </div>

        {/* Transaction Date (formatted with shortened month and no seconds) */}
        <div className="text-sm text-gray-500 w-1/4 truncate">
          {formatDate(transaction.createdAt)}
        </div>

        {/* Transaction Amount */}
        <div className="text-xl font-bold w-1/4 text-right">
          <span
            className={`${
              transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'
            }`}
          >
            ${transaction.amount.toFixed(2)}
          </span>
        </div>

        {/* Action Buttons (Edit and Delete) */}
        <div className="flex space-x-4">
          <button
            onClick={() => onEdit(transaction)}
            className="p-2 text-blue-600 hover:text-blue-800"
            aria-label="Edit"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(transaction.id)}
            className="p-2 text-red-600 hover:text-red-800"
            aria-label="Delete"
          >
            <FaTrash />
          </button>
        </div>
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
