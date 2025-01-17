import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TransactionList = ({ transactions, deleteTransaction, setTransactionToEdit }) => (
  <div className="mt-8">
    <h2 className="text-xl font-bold text-gray-700">Transactions</h2>
    <ul className="mt-4 space-y-4">
      {transactions.map((transaction) => (
        <li
          key={transaction.id}
          className={`flex justify-between p-4 rounded-lg shadow-md ${
            transaction.type === 'income' ? 'bg-green-100' : 'bg-red-100'
          }`}
        >
          <span className="font-bold">{transaction.title}</span>
          <span>${transaction.amount.toFixed(2)}</span>
          <div className="flex space-x-2">
            <button
              onClick={() => setTransactionToEdit(transaction)}
              className="text-blue-600 hover:text-blue-800"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="text-red-600 hover:text-red-800"
            >
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
  setTransactionToEdit: PropTypes.func.isRequired,
};

export default TransactionList;
