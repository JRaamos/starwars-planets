import React, { useContext, useEffect, useState } from 'react';
import UseContext from '../context/UseContext';

function FormsTable() {
  const { filterPlanets,
    activeFilter,
    setActiveFilter,
    // filter,
    // setFilter
  } = useContext(UseContext);
  const [filterName, setFilterName] = useState('');

  const [filterComparison, setFilterComparison] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  );

  const [condition, setCondition] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);

  const [ordenacao, setOrdenacao] = useState(
    {
      column: 'population',
      sort: 'ASC',
    },
  );

  useEffect(() => {
    setFilterComparison({
      ...filterComparison,
      column: condition[0],
    });
  }, [activeFilter]);

  // const filterOrdenacao = () => {
  // const filterOrdenacaoNumber = filter.sort((a, b) => {
  // if (ordenacao.sort === 'ASC') {
  // return Number(a[ordenacao.column]) - Number(b[ordenacao.column]);
  // }
  // return Number(b[ordenacao.column]) - Number(a[ordenacao.column]);
  // });
  // setFilter(filterOrdenacaoNumber);
  // };
  return (
    <div>
      <form>
        <input
          placeholder="Digite o nome do planeta"
          data-testid="name-filter"
          type="text"
          value={ filterName }
          onChange={ ({ target }) => {
            setFilterName(target.value);
            filterPlanets(target.value);
          } }
        />
        <label>
          <select
            data-testid="column-filter"
            name="column"
            value={ filterComparison.column }
            onChange={ ({ target }) => setFilterComparison({
              ...filterComparison, column: target.value }) }
          >
            {
              condition.map((item) => (
                <option
                  key={ item }
                  value={ item }
                >
                  { item }
                </option>
              ))
            }
          </select>
        </label>
        <label>
          <select
            data-testid="comparison-filter"
            name="comparison"
            value={ filterComparison.comparison }
            onChange={ ({ target }) => setFilterComparison({
              ...filterComparison,
              comparison: target.value }) }
          >
            { ['maior que', 'menor que', 'igual a'].map((item) => (
              <option
                key={ item }
                value={ item }
              >
                { item }
              </option>
            ))}
          </select>
        </label>
        <label>
          <input
            data-testid="value-filter"
            type="number"
            value={ filterComparison.value }
            name="value"
            onChange={ ({ target }) => setFilterComparison({
              ...filterComparison, value: target.value }) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => {
            setActiveFilter([...activeFilter, filterComparison]);
            setCondition(condition.filter((item) => item !== filterComparison.column));
            setFilterComparison({ ...filterComparison, value: 0 });
          } }
        >
          Filtrar
        </button>
        <button
          type="button"
          data-testid="button-remove-filters"
          onClick={ () => {
            setCondition(['population', 'orbital_period', 'diameter',
              'rotation_period', 'surface_water']);
            setActiveFilter([]);
            setFilterName('');
          } }
        >
          Limpar
        </button>
        <span>
          { activeFilter.map((item) => (
            <div
              key={ item.column }
              data-testid="filter"
            >
              {`${item.column} ${item.comparison} ${item.value}`}
              <button
                type="button"
                onClick={ () => {
                  setCondition([...condition, item.column]);
                  setActiveFilter(
                    activeFilter.filter((filters) => filters.column !== item.column),
                  );
                } }
              >
                x
              </button>
            </div>
          ))}
        </span>
        <section>
          <label>
            <select
              onChange={ ({ target }) => setOrdenacao({
                ...ordenacao, column: target.value }) }
              data-testid="column-sort"
            >
              {
                ['population', 'orbital_period', 'diameter',
                  'rotation_period', 'surface_water']
                  .map((column) => (
                    <option
                      key={ column }
                      value={ column }
                    >
                      { column }
                    </option>
                  ))
              }
            </select>
          </label>
          <label>
            ascendente
            <input
              data-testid="column-sort-input-asc"
              type="radio"
              name="sort"
              value="ASC"
              checked={ ordenacao.sort === 'ASC' }
            //  onChange={ ({ target }) => setOrdenacao({
              //  ...ordenacao, sort: target.value }) }
            />
          </label>
          <label>
            descendente
            <input
              data-testid="column-sort-input-desc"
              type="radio"
              name="sort"
              value="DESC"
              checked={ ordenacao.sort === 'DESC' }
              onChange={ ({ target }) => setOrdenacao({
                ...ordenacao, sort: target.value }) }
            />
          </label>
          <button
            data-testid="column-sort-button"
            type="button"
          >
            ordena
          </button>
        </section>
      </form>
    </div>
  );
}

export default FormsTable;
