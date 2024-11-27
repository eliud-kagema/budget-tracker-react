import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

import { IoIosPaper } from 'react-icons/io';


const TransactionList = ({ transactions }) => {
  return (
    <div className="mt-8 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Transactions</h2>
      
      {/* If there are no transactions, display a message */}
      {transactions.length === 0 ? (
        <p className="text-gray-600 text-lg font-semibold text-center bg-gray-100 p-6 rounded-md border border-gray-300 shadow-sm">
  <IoIosPaper className="inline-block mr-2 text-gray-400" />
  No transactions yet
</p>
      ) : (
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      )}
    </div>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionList;
