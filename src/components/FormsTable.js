import React, { useContext, useEffect, useState } from 'react';
import UseContext from '../context/UseContext';

function FormsTable() {
  const { filterPlanets,
    activeFilter, setActiveFilter } = useContext(UseContext);

  const [filterComparison, setFilterComparison] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: 0,
    },
  );
  const [condition, setCondition] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);

  useEffect(() => {
    setFilterComparison({
      ...filterComparison,
      column: condition[0],
    });
  }, [activeFilter]);
  return (
    <div>
      <form>
        <input
          placeholder="Digite o nome do planeta"
          data-testid="name-filter"
          type="text"
          onChange={ ({ target }) => filterPlanets(target.value) }
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
          } }
        >
          Limpar
        </button>
      </form>
      <span>
        { activeFilter.map((item) => (
          <div
            key={ item.column }
            data-testid="filter"
          >
            {' '}
            { item.column }
            {' '}
            { item.comparison }
            {' '}
            { item.value }
            {' '}
            <button
              type="button"
              onClick={ () => {
                setCondition([...condition, item.column]);
                setActiveFilter(
                  activeFilter.filter((filter) => filter.column !== item.column),
                );
              } }
            >
              x
            </button>
          </div>
        ))}
      </span>
    </div>
  );
}

export default FormsTable;
