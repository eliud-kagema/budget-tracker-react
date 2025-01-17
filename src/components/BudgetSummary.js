import React from 'react';

const BudgetSummary = ({ budget, transactions }) => {
  const totalExpenses = transactions.reduce((total, transaction) => {
    if (transaction.type === 'expense') return total + transaction.amount;
    return total;
  }, 0);

  const remainingBudget = budget.income - totalExpenses;

  return (
    <div className="mt-12 p-6 border rounded-md bg-gray-50">
      <h3 className="text-xl font-semibold text-gray-700">Budget Summary</h3>
      <div className="flex justify-between mt-4">
        <span>Total Income: </span>
        <span>${budget.income}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>Total Expenses: </span>
        <span>${totalExpenses}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>Savings Goal: </span>
        <span>${budget.savingsGoal}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>Remaining Budget: </span>
        <span>${remainingBudget}</span>
      </div>
    </div>
  );
};

export default BudgetSummary;
