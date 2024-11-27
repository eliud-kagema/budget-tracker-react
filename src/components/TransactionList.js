import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, onDelete, onEdit }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transactions</h2>
      <div className="space-y-4">
        {transactions.length === 0 ? (
          <p className="text-center text-gray-500">No transactions yet</p>
        ) : (
          transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onDelete={() => onDelete(transaction.id)}  // Delete button
              onEdit={() => onEdit(transaction)}         // Edit button
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

export default TransactionList;
