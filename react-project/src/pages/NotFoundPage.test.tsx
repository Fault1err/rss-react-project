import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage'; 

test('renders "404 - Page Not Found" text', () => {
  const { getByText } = render(<NotFoundPage />);
  const heading = getByText(/404 - Page Not Found/i); 
  expect(heading).toBeDefined(); 
});