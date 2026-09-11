import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home value proposition', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /Bring AI into real work/i })
  ).toBeInTheDocument();
});
