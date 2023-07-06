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
      setPlanets(planetsFilter);
      setFilter(planetsFilter);
      localStorage.setItem('planets', JSON.stringify(planetsFilter));
    };
    fetchPlanets();
  }, []);

  const filterPlanets = (name) => {
    const filterPlanetsName = planets.filter((planet) => planet.name
      .toLowerCase().includes(name.toLowerCase()));
    setFilter(filterPlanetsName);
    return filterPlanetsName;
  };

  return (
    <UseContext.Provider value={ { planets, filter, filterPlanets } }>
      {children}
    </UseContext.Provider>
  );
}

PlanetProvider.propTypes = PropTypes.shape({}).isRequired;

export default PlanetProvider;
