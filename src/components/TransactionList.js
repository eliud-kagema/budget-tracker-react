import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionList;
