import { render, screen } from '@testing-library/react';
import { HelloWorld } from './HelloWorld';

test('renders greeting', () => {
  render(<HelloWorld name="Coach" />);
  expect(screen.getByText('Hello, Coach!')).toBeInTheDocument();
});
