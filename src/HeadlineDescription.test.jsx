import { render, screen } from '@testing-library/react';
import HeadlineDescription from './HeadlineDescription'; 

describe('Headline Description Tests', () => { test('renders Description content', () => {
  render(<HeadlineDescription />);
  const description = screen.getByText(/This is the description/i);
  expect(description).toBeInTheDocument();
}); })

