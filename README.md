# Budget Tracker Application

A dynamic and user-friendly **Budget Tracker** application built with **React** and **Tailwind CSS**. This application helps users manage their financial transactions by adding, editing, and deleting entries, while ensuring user confirmations for sensitive actions.

---



## Features

### 🌟 Core Features
- **Add Transactions**: Easily add income or expense transactions with details like title, amount, category and type.
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
- **Redux**: For centralized state management, allowing efficient sharing of data across components, with actions and reducers handling financial data such as income and expenses.
- **Firestore**:: For user login and registration


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
      ```bash
    npm install

3. **Update the .env file with**
      ```bash
      REACT_APP_FIREBASE_API_KEY=
      REACT_APP_FIREBASE_AUTH_DOMAIN=
      REACT_APP_FIREBASE_PROJECT_ID=
      REACT_APP_FIREBASE_STORAGE_BUCKET=
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
      REACT_APP_FIREBASE_APP_ID=
      REACT_APP_FIREBASE_MEASUREMENT_ID=

4. **Start the application**
      ```bash
    npm run start




## License
This project is licensed under the MIT License.


## Copyright
© 2024 Eliud Kagema. All Rights Reserved.
