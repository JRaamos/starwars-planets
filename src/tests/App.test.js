import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { mockApi } from './mock';
import { act } from 'react-dom/test-utils';

describe('I am your test', () => {
  beforeEach(() => {
    global.fetch = jest.fn(mockApi)
  })
  it('testa se a pagina contem uma lista com todos os planetas', async () => {
    render(<App />);
    await waitFor(()=> {
    const planets = screen.getAllByTestId('planet-name');
    expect(planets).toHaveLength(10);
    expect(fetch).toHaveBeenCalledTimes(1);
    })
  })

  it('testa se o filtro de input por name esta funcionando ',async () => {
    render(<App />);
    const inputName = screen.getByTestId('name-filter');
    userEvent.type(inputName, 'Alderaan');
    expect(inputName).toHaveValue('Alderaan');
    await waitFor(()=> {
     const planet = screen.getByText('Alderaan');
      expect(planet).toBeInTheDocument();
      })
  
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
  userEvent.clear(inputValue);
  userEvent.type(inputValue, '1000000');
  userEvent.click(buttonFilter);

  const span = screen.getByTestId('filter');

  expect(span).toBeInTheDocument();
  expect(span).toHaveTextContent('population maior que 1000000');


  userEvent.selectOptions(inputColumn, 'orbital_period');
  userEvent.selectOptions(inputComparison, 'menor que');
  userEvent.clear(inputValue);
  userEvent.type(inputValue, '365');
  userEvent.click(buttonFilter);

  userEvent.selectOptions(inputColumn, 'diameter');
  userEvent.selectOptions(inputComparison, 'igual a');
  userEvent.clear(inputValue);
  userEvent.type(inputValue, '402');
  userEvent.click(buttonFilter);
    
  const div = screen.getAllByTestId('filter');
  div.forEach((item) => {
    expect(item).toBeInTheDocument();
  })
  expect(div).toHaveLength(3);
 });

 it('testa se o botao de limpar filtro individual funciona',  () => {
  render(<App />);
  const inputColumn = screen.getByTestId('column-filter');
  const inputComparison = screen.getByTestId('comparison-filter');
  const inputValue = screen.getByTestId('value-filter');
  const buttonFilter = screen.getByTestId('button-filter');

  userEvent.selectOptions(inputColumn, 'population');
  userEvent.selectOptions(inputComparison, 'maior que');
  userEvent.clear(inputValue);
  userEvent.type(inputValue, '1000000');
  userEvent.click(buttonFilter);
  const span = screen.getByTestId('filter');
  expect(span).toBeInTheDocument();
  expect(span).toHaveTextContent('population maior que 1000000');

  const buttonFilterClear = screen.getByRole('button', { name: /x/i });
  userEvent.click(buttonFilterClear);
  expect(span).not.toBeInTheDocument();

 });

  it('testa se o botao de limpar todos os filtros funciona', async () => {
    render(<App />);
    const inputName = screen.getByTestId('name-filter');
    const inputColumn = screen.getByTestId('column-filter');
    const inputComparison = screen.getByTestId('comparison-filter');
    const inputValue = screen.getByTestId('value-filter');
    const buttonFilter = screen.getByTestId('button-filter');

    userEvent.type(inputName, 'a');
    userEvent.selectOptions(inputColumn, 'population');
    userEvent.selectOptions(inputComparison, 'maior que');
    userEvent.clear(inputValue);
    userEvent.type(inputValue, '1000000');
    userEvent.click(buttonFilter);

    userEvent.selectOptions(inputColumn, 'orbital_period');
    userEvent.selectOptions(inputComparison, 'menor que');
    userEvent.clear(inputValue);
    userEvent.type(inputValue, '365');
    userEvent.click(buttonFilter);

    userEvent.selectOptions(inputColumn, 'diameter');
    userEvent.selectOptions(inputComparison, 'igual a');
    userEvent.clear(inputValue);
    userEvent.type(inputValue, '19720');
    userEvent.click(buttonFilter);

   await waitFor(()=> {
      const planet = screen.getByText('Kamino');
      expect(planet).toBeInTheDocument();
    })
    const buttonRomoveFilter = screen.getByRole('button', { name: /Limpar/i });
    userEvent.click(buttonRomoveFilter);

    await waitFor(()=> {
      const planets = screen.getAllByTestId('planet-name');
      expect(planets).toHaveLength(10);
      })
  })

  it('testa o botao de filtrar por ordenação ascendete', async () => {
    render(<App />);
    const inputColumn = screen.getByTestId('column-sort');
    const inputRadioAsc = screen.getByTestId('column-sort-input-asc');
    const buttonSort = screen.getByTestId('column-sort-button');

    userEvent.selectOptions(inputColumn, 'population');
    userEvent.click(inputRadioAsc);
    userEvent.click(buttonSort);
  })
  it('testa o botao de filtrar por ordenação descendente', async () => {
    render(<App />);
    const inputColumn = screen.getByTestId('column-sort');
    const inputRadioDesc = screen.getByTestId('column-sort-input-desc');
    const buttonSort = screen.getByTestId('column-sort-button');

    userEvent.selectOptions(inputColumn, 'population');
    userEvent.click(inputRadioDesc);
    userEvent.click(buttonSort);
  })
});
