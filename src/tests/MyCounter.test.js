import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {MyCounter} from '../components/MyCounter';

test('increments counter on button click', () => {
  render(<MyCounter />);
  
  const button = screen.getByRole('button', { name: /increment/i });
  
  fireEvent.click(button);
  
  expect(screen.getByText(/1/i)).toBeInTheDocument();  // Verifies that "1" is now rendered
});
