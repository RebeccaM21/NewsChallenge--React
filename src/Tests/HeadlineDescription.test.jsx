import { render, screen } from '@testing-library/react';
import HeadlineDescription from '../Components/HeadlineDescription'; 

describe('Headline Description Tests', () => {
  it.skip('should render the relevant content', () => {
  const testDescription = 'Test Description'; 
  render(<HeadlineDescription />);
  const description = screen.getByText(testDescription);
  expect(description).toBe(testDescription);
});})

