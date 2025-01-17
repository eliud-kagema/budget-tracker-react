import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaWallet, FaPiggyBank, FaRegCreditCard } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen text-white">
      <div className="p-4">
        <h2 className="text-3xl font-bold">Finance Dashboard</h2>
      </div>
      <div className="mt-6">
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center space-x-2 p-4 hover:bg-blue-600 rounded-md">
              <FaHome className="text-xl" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/budget" className="flex items-center space-x-2 p-4 hover:bg-blue-600 rounded-md">
              <FaPiggyBank className="text-xl" />
              <span>Budget</span>
            </Link>
          </li>
          <li>
            <Link to="/expenses" className="flex items-center space-x-2 p-4 hover:bg-blue-600 rounded-md">
              <FaRegCreditCard className="text-xl" />
              <span>Expenses</span>
            </Link>
          </li>
          <li>
            <Link to="/savings" className="flex items-center space-x-2 p-4 hover:bg-blue-600 rounded-md">
              <FaWallet className="text-xl" />
              <span>Savings</span>
            </Link>
          </li>
          <li>
            <Link to="/reports" className="flex items-center space-x-2 p-4 hover:bg-blue-600 rounded-md">
              <FaChartBar className="text-xl" />
              <span>Reports</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
