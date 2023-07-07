import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { mockApi } from './mock';

describe('I am your test', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockApi)
  })

  it('renders a heading', async () => {
    render(<App />);
    await waitFor(()=> {
    screen.getByText('Alderaan');
    }, { timeout: 3000 })
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

  userEvent.selectOptions(inputColumn, 'population');
  userEvent.selectOptions(inputComparison, 'maior que');
  userEvent.type(inputValue, '1000000');
  userEvent.click(buttonFilter);

  const span = screen.getByTestId('filter');
  expect(span).toBeInTheDocument();

  userEvent.selectOptions(inputColumn, 'orbital_period');
  userEvent.selectOptions(inputComparison, 'menor que');
  userEvent.type(inputValue, '365');
  userEvent.click(buttonFilter);

  userEvent.selectOptions(inputColumn, 'diameter');
  userEvent.selectOptions(inputComparison, 'igual a');
  userEvent.type(inputValue, '402');
  userEvent.click(buttonFilter);
 });

});
