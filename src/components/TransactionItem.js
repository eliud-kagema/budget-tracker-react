import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Adding icons for income and expense

const TransactionItem = ({ transaction }) => {
  const { title, amount, type } = transaction;

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-all">
      <div>
        <p className="font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-500">{type}</p>
      </div>
      <div className="flex items-center">
        <p className={`font-semibold ${type === 'expense' ? 'text-red-600' : 'text-green-600'}`}>
          ${amount.toFixed(2)}
        </p>
        <div className="ml-3">
          {type === 'expense' ? (
            <FaArrowDown className="text-red-600" />
          ) : (
            <FaArrowUp className="text-green-600" />
          )}
        </div>
      </div>
    </div>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.object.isRequired,
};

export default TransactionItem;
