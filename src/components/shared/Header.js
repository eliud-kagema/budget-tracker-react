import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onLogout }) => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Personal Finance Dashboard</h1>
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        onClick={onLogout}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
