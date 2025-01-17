import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TransactionItem = ({ transaction, onDelete, onEdit }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm mb-4">
      <div className="flex-1">
        <p className="text-lg font-semibold">{transaction.title}</p>
        <p className="text-sm text-gray-600">{formatDate(transaction.createdAt)}</p>
        <p className="text-sm text-gray-500">Category: {transaction.category}</p>
        {transaction.recurring && <p className="text-sm text-green-500">Recurring</p>}
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => onEdit(transaction)} className="text-blue-600">
          <FaEdit />
        </button>
        <button onClick={() => onDelete(transaction.id)} className="text-red-600">
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
