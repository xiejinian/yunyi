import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Xie Jinian/i })).toBeInTheDocument();
});
