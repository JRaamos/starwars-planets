import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { mockApi } from './mock';

describe('I am your test', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockApi)
  })
  it('renders a heading', () => {
  render(<App />);

  const inputName = screen.getByTestId('name-filter');
  const inputColumn = screen.getByTestId('column-filter');
  const inputComparison = screen.getByTestId('comparison-filter');
  const inputValue = screen.getByTestId('value-filter');
  const buttonFilter = screen.getByTestId('button-filter');
  const table = screen.getByTestId('planets');
  
  expect(table).toBeInTheDocument();
  expect(inputName).toBeInTheDocument();
  expect(inputColumn).toBeInTheDocument();  
  expect(inputComparison).toBeInTheDocument();
  expect(inputValue).toBeInTheDocument();
  expect(buttonFilter).toBeInTheDocument();

  userEvent.type(inputName, 'Alderaan');
  userEvent.selectOptions(inputColumn, 'population');
  userEvent.selectOptions(inputComparison, 'maior que');
  userEvent.type(inputValue, '1000000');
  userEvent.click(buttonFilter);

  });
});
