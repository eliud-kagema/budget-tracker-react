import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, deleteTransaction, setTransactionToEdit }) => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-700">Transaction History</h3>
      <div className="mt-4">
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDelete={deleteTransaction}
            onEdit={setTransactionToEdit}
          />
        ))}
      </div>
    </div>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  setTransactionToEdit: PropTypes.func.isRequired,
};

export default TransactionList;
