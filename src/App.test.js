import { render, screen } from '@testing-library/react';
import RootApp from "./App";

test('renders learn react link', () => {
  render(<RootApp />);
  const linkElement = screen.getByText('Log Out');
  expect(linkElement).toBeInTheDocument();
});
