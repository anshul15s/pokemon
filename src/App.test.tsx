import { render, screen } from '@testing-library/react';
import RouteFile from './RouteFile';

test('renders learn react link', () => {
  render(<RouteFile />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
