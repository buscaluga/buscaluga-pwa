import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

test('renders learn react link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/imóveis de todos os lugares!/i);
  expect(linkElement).toBeInTheDocument();
});
