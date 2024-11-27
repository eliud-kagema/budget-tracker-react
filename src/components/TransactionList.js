// src/components/TransactionList.js
import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem'; // Import the TransactionItem component

export const TransactionList = ({ transactions, onDelete, onEdit }) => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
        Transactions
      </h2>
      <div className="space-y-4">
        {transactions.length === 0 ? (
          <p className="text-center text-gray-500 italic">No transactions available. Start by adding a new one!</p>
        ) : (
          transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </div>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
