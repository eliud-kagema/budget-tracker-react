import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BudgetGraph = ({ budget }) => {
  const data = {
    labels: ['Income', 'Expenses', 'Savings Goal'], 
    datasets: [
      {
        label: 'Amount',
        data: [budget.income, budget.expenses, budget.savingsGoal],
        backgroundColor: ['#34D399', '#F87171', '#60A5FA'], 
        borderColor: ['#10B981', '#EF4444', '#3B82F6'], 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Budget Overview',
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `$${tooltipItem.raw.toFixed(2)}`; 
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Category',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Amount ($)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 animate__animated animate__fadeInUp">
      <h3 className="text-xl font-bold text-center mb-4">Budget Overview</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BudgetGraph;
