import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// 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