import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio owner name', () => {
  render(<App />);
  const linkElement = screen.getByText(/Godlove Damian/i);
  expect(linkElement).toBeInTheDocument();
});
