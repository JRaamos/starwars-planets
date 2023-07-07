import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UseContext from './UseContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeFilter, setActiveFilter] = useState([]);

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

  useEffect(() => {
    const filterPlanetsNumeric = () => {
      const filterPlanetsNumber = planets.filter((planet) => (
        activeFilter.every(({ column, comparison, value }) => {
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
        })
      ));
      setFilter(filterPlanetsNumber);
    };
    filterPlanetsNumeric();
  }, [activeFilter]);

  return (
    <UseContext.Provider
      value={ { filter,
        filterPlanets,
        activeFilter,
        setActiveFilter } }
    >
      {children}
    </UseContext.Provider>
  );
}

PlanetProvider.propTypes = PropTypes.shape({}).isRequired;

export default PlanetProvider;
