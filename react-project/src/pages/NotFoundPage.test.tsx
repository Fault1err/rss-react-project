import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage'; // Adjust the path if necessary

test('renders "404 - Page Not Found" text', () => {
  const { getByText } = render(<NotFoundPage />);
  const heading = getByText(/404 - Page Not Found/i); // Case-insensitive match
  expect(heading).toBeDefined(); // Ensure the element exists
});