import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BudgetForm from '../components/BudgetForm';  // Adjust the path based on your structure

// Mock functions for addTransaction and editTransaction
const mockAddTransaction = jest.fn();
const mockEditTransaction = jest.fn();

describe('BudgetForm', () => {
  beforeEach(() => {
    // Clear all mock function calls before each test
    mockAddTransaction.mockClear();
    mockEditTransaction.mockClear();
  });

  test('renders correctly when no transaction is being edited', () => {
    render(<BudgetForm addTransaction={mockAddTransaction} editTransaction={mockEditTransaction} currentId={1} />);

    // Check if the form fields are rendered correctly
    expect(screen.getByPlaceholderText('Transaction Title')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Add Transaction')).toBeInTheDocument();
  });

  test('handles input changes correctly', () => {
    render(<BudgetForm addTransaction={mockAddTransaction} editTransaction={mockEditTransaction} currentId={1} />);

    // Simulate typing in the form fields
    fireEvent.change(screen.getByPlaceholderText('Transaction Title'), { target: { value: 'Groceries' } });
    fireEvent.change(screen.getByPlaceholderText('Amount'), { target: { value: '50' } });

    // Check if the state is updated correctly
    expect(screen.getByPlaceholderText('Transaction Title').value).toBe('Groceries');
    expect(screen.getByPlaceholderText('Amount').value).toBe('50');
  });

  test('calls addTransaction when submitting a new transaction', async () => {
    render(<BudgetForm addTransaction={mockAddTransaction} editTransaction={mockEditTransaction} currentId={1} />);

    // Fill out the form fields
    fireEvent.change(screen.getByPlaceholderText('Transaction Title'), { target: { value: 'Groceries' } });
    fireEvent.change(screen.getByPlaceholderText('Amount'), { target: { value: '50' } });

    // Submit the form
    fireEvent.click(screen.getByText('Add Transaction'));

    // Check if the addTransaction function was called with the correct data
    await waitFor(() => {
      expect(mockAddTransaction).toHaveBeenCalledWith({
        id: 1, // currentId
        title: 'Groceries',
        amount: 50,
        type: 'expense',
        createdAt: expect.any(String), // Created at should be a valid string (ISO date)
      });
    });
  });

  test('calls editTransaction when submitting an edited transaction', async () => {
    const transactionToEdit = {
      id: 1,
      title: 'Old Transaction',
      amount: 30,
      type: 'expense',
    };

    render(
      <BudgetForm
        addTransaction={mockAddTransaction}
        editTransaction={mockEditTransaction}
        transactionToEdit={transactionToEdit}
        currentId={2} // new ID will be ignored since it's editing
      />
    );

    // Edit the form fields
    fireEvent.change(screen.getByPlaceholderText('Transaction Title'), { target: { value: 'New Transaction' } });
    fireEvent.change(screen.getByPlaceholderText('Amount'), { target: { value: '100' } });

    // Submit the form
    fireEvent.click(screen.getByText('Update Transaction'));

    // Check if the editTransaction function was called with the correct data
    await waitFor(() => {
      expect(mockEditTransaction).toHaveBeenCalledWith({
        id: 1, // ID should remain the same as the transactionToEdit
        title: 'New Transaction',
        amount: 100,
        type: 'expense',
        createdAt: expect.any(String), // Created at should be a valid string (ISO date)
      });
    });
  });

  test('clears form after submitting', async () => {
    render(<BudgetForm addTransaction={mockAddTransaction} editTransaction={mockEditTransaction} currentId={1} />);

    // Fill out the form fields
    fireEvent.change(screen.getByPlaceholderText('Transaction Title'), { target: { value: 'Groceries' } });
    fireEvent.change(screen.getByPlaceholderText('Amount'), { target: { value: '50' } });

    // Submit the form
    fireEvent.click(screen.getByText('Add Transaction'));

    // Check if the form is cleared after submit
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Transaction Title').value).toBe('');
      expect(screen.getByPlaceholderText('Amount').value).toBe('');
    });
  });
});
