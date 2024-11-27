
import { render, screen, fireEvent } from '@testing-library/react';
import { TransactionList } from '../components/TransactionList'; 

// Sample transactions for testing
const mockTransactions = [
  { id: 1, title: 'Groceries', amount: 50, type: 'expense', createdAt: '2024-11-28T14:30:00Z' },
  { id: 2, title: 'Salary', amount: 1000, type: 'income', createdAt: '2024-11-28T09:00:00Z' },
];

// Mock functions for onDelete and onEdit
const mockOnDelete = jest.fn();
const mockOnEdit = jest.fn();

describe('TransactionList', () => {
  it('displays a message when there are no transactions', () => {
    render(<TransactionList transactions={[]} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
    
    const noTransactionsMessage = screen.getByText(/No transactions available/i);
    expect(noTransactionsMessage).toBeInTheDocument();
  });

  it('renders transaction items when transactions are provided', () => {
    render(<TransactionList transactions={mockTransactions} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
    
    // Check if the title of the transactions is displayed
    expect(screen.getByText('Groceries')).toBeInTheDocument();
    expect(screen.getByText('Salary')).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    render(<TransactionList transactions={mockTransactions} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
    
    // Trigger a delete on the first transaction
    const deleteButton = screen.getAllByRole('button', { name: /delete/i })[0]; // Assuming the button has 'Delete' as text
    fireEvent.click(deleteButton);
    
    // Verify that the onDelete function was called
    expect(mockOnDelete).toHaveBeenCalledWith(mockTransactions[0].id);
  });

  it('calls onEdit when edit button is clicked', () => {
    render(<TransactionList transactions={mockTransactions} onDelete={mockOnDelete} onEdit={mockOnEdit} />);
    
    // Trigger an edit on the first transaction
    const editButton = screen.getAllByRole('button', { name: /edit/i })[0]; // Assuming the button has 'Edit' as text
    fireEvent.click(editButton);
    
    // Verify that the onEdit function was called
    expect(mockOnEdit).toHaveBeenCalledWith(mockTransactions[0]);
  });
});
