import React, { useState } from 'react';

const BudgetPlanner = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);

  const handleAddExpense = () => {
    if (expenseName && expenseAmount > 0) {
      setExpenses([...expenses, { name: expenseName, amount: expenseAmount }]);
      setExpenseName('');
      setExpenseAmount(0);
    }
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  const remainingBudget = income - totalExpenses;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Budget Planner</h2>

      {/* Income Input */}
      <div className="mb-6">
        <label className="text-lg text-gray-600">Monthly Income</label>
        <input
          type="number"
          className="mt-2 p-2 border rounded-md w-full"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          placeholder="Enter your monthly income"
        />
      </div>

      {/* Expenses Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Add Expenses</h3>
        <input
          type="text"
          className="p-2 border rounded-md w-full mb-3"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="Expense name"
        />
        <input
          type="number"
          className="p-2 border rounded-md w-full mb-3"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(Number(e.target.value))}
          placeholder="Expense amount"
        />
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
          onClick={handleAddExpense}
        >
          Add Expense
        </button>
      </div>

      {/* Expense List */}
      <div className="mb-6">
        <h4 className="text-xl font-semibold text-gray-700 mb-4">Your Expenses</h4>
        <ul className="space-y-4">
          {expenses.map((expense, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{expense.name}</span>
              <span>${expense.amount}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Budget Summary */}
      <div className="mt-6 p-4 border rounded-md bg-gray-50">
        <h3 className="text-xl font-semibold text-gray-700">Budget Summary</h3>
        <div className="flex justify-between mt-4">
          <span>Total Income: </span>
          <span>${income}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Total Expenses: </span>
          <span>${totalExpenses}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Remaining Budget: </span>
          <span>${remainingBudget}</span>
        </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;
