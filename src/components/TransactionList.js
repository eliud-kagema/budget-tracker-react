import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions }) => {
  return (
    <div className="mt-8">
      {/* Header for the transactions section */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Transactions
      </h2>
      <div className="space-y-4">
        {/* Mapping through the transactions array to display each transaction */}
        {transactions.length === 0 ? (
          // If no transactions, show a placeholder message
          <p className="text-gray-500 text-center">No transactions yet</p>
        ) : (
          // If transactions exist, display each using the TransactionItem component
          transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))
        )}
      </div>
    </div>
  );
};

TransactionList.propTypes = {
  // Prop validation to ensure transactions is an array
  transactions: PropTypes.array.isRequired,
};

export default TransactionList;
