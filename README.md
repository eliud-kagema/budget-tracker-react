# Budget Tracker Application

A dynamic and user-friendly **Budget Tracker** application built with **React** and **Tailwind CSS**. This application helps users manage their financial transactions by adding, editing, and deleting entries, while ensuring user confirmations for sensitive actions.

---

## Features

### 🌟 Core Features
- **Add Transactions**: Easily add income or expense transactions with details like title, amount, and type.
- **Edit Transactions**: Update existing transaction details with confirmation prompts.
- **Delete Transactions**: Remove unwanted transactions securely after confirmation.
- **Real-time Updates**: Transactions are dynamically displayed without refreshing the page.
- **Responsive Design**: Fully responsive layout optimized for all devices using Tailwind CSS.

### 🛠️ Technical Features
- **State Management**: Managed with React's `useState` hook.
- **Reusable Components**: Modularized components like `BudgetForm`, `TransactionList`, and `ConfirmationModal`.
- **Custom Modals**: Confirm sensitive actions (e.g., delete or edit) using customizable modal pop-ups.
- **Dynamic Styling**: Designed using Tailwind CSS for a clean and professional look.

---

## Technologies Used

- **React**: For building the user interface and managing state.
- **Tailwind CSS**: For responsive and modern styling.
- **React Icons**: For visually appealing icons in the application.

---

## Screenshots

![Budget Tracker Screenshot](https://via.placeholder.com/800x400.png?text=Budget+Tracker+App)

---

## Getting Started

Follow these steps to run the project locally:

### Prerequisites
- **Node.js** and **npm** installed.
- Basic knowledge of React and JavaScript.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eliud-kagema/budget-tracker-frontend.git
   cd budget-tracker-frontend


2. **Install dependencies**
    npm install



2. **Start the application**
    npm install


## File Structure

src/
│
├── components/
│   ├── BudgetForm.js        # Component for adding and editing transactions
│   ├── TransactionList.js   # Component for displaying transactions
│   ├── TransactionItem.js   # Component for individual transaction details
│   ├── ConfirmationModal.js # Reusable modal component for confirmations
│
├── App.js                   # Main application logic
├── index.js                 # Application entry point
├── index.css                # Global styles
│
├── tailwind.config.js       # Tailwind CSS configuration
