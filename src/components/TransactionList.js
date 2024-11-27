import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, editTransaction }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            editTransaction={editTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
  editTransaction: PropTypes.func.isRequired,
};

export default TransactionList;
