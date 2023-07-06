import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UseContext from './UseContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const { results } = await response.json();
      const planetsFilter = results.map((planet) => delete planet.residents && planet);
      setFilter(planetsFilter);
      setPlanets(planetsFilter);
    };
    fetchPlanets();
  }, []);

  const filterPlanets = (name) => {
    const filterPlanetsName = planets.filter((planet) => planet.name
      .toLowerCase().includes(name.toLowerCase()));
    setFilter(filterPlanetsName);
  };

  const filterPlanetsNumeric = ({ column, comparison, value }) => {
    const filterPlanetsNumber = filter.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[column]) > Number(value);
      case 'menor que':
        return Number(planet[column]) < Number(value);
      case 'igual a':
        return Number(planet[column]) === Number(value);
      default:
        return planet;
      }
    });
    setFilter(filterPlanetsNumber);
  };

  return (
    <UseContext.Provider value={ { filter, filterPlanets, filterPlanetsNumeric } }>
      {children}
    </UseContext.Provider>
  );
}

PlanetProvider.propTypes = PropTypes.shape({}).isRequired;

export default PlanetProvider;
