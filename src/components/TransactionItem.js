import React from 'react';
import PropTypes from 'prop-types';

const TransactionItem = ({ transaction, onDelete, onEdit }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-md flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{transaction.title}</h3>
        <p className="text-sm text-gray-500">{transaction.type}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className={`text-xl font-semibold ${transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
          ${transaction.amount.toFixed(2)}
        </span>
        <button
          onClick={onEdit}
          className="text-blue-600 hover:text-blue-800 focus:outline-none"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="text-red-600 hover:text-red-800 focus:outline-none"
        >
          Delete
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
