import React, { useContext, useState } from 'react';
import UseContext from '../context/UseContext';

function FormsTable() {
  const [filterComparison, setFilterComparison] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const { filterPlanets, filterPlanetsNumeric } = useContext(UseContext);
  const array = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const arrayDeCondicoes = ['maior que', 'menor que', 'igual a'];

  const handleChanges = ({ target }) => {
    const { name, value } = target;
    setFilterComparison({
      ...filterComparison,
      [name]: value,
    });
  };

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
            onChange={ handleChanges }

          >
            {
              array.map((item) => (
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
            onChange={ handleChanges }
          >
            {arrayDeCondicoes.map((item) => (
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
            onChange={ handleChanges }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => filterPlanetsNumeric(filterComparison) }
        >
          Filtrar

        </button>
      </form>
    </div>
  );
}

export default FormsTable;
