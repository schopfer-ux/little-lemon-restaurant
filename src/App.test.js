import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon Restaurant header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Little Lemon Restaurant/i);
  expect(headerElement).toBeInTheDocument();
});
