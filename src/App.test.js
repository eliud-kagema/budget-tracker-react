import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Budget Tracker title', () => {
  render(<App />);
  const linkElement = screen.getByText(/budget tracker/i);  // Update this to match the text
  expect(linkElement).toBeInTheDocument();
});
