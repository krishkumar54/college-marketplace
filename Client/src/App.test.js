import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders College Marketplace tagline', () => {
  render(<App />);
  const heading = screen.getByText(/Connecting Students, Empowering Deals!/i);
  expect(heading).toBeInTheDocument();
});

test('renders Get Started button', () => {
  render(<App />);
  const button = screen.getByText(/Get Started/i);
  expect(button).toBeInTheDocument();
});

test('renders Explore link', () => {
  render(<App />);
  const link = screen.getByText(/Explore/i);
  expect(link).toBeInTheDocument();
});
