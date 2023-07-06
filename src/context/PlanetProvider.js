import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import UseContext from './UseContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const { results } = await response.json();
      const planetsFilter = results.map((planet) => delete planet.residents && planet);
      setPlanets(planetsFilter);
      localStorage.setItem('planets', JSON.stringify(planetsFilter));
    };
    fetchPlanets();
  }, []);

  const context = useMemo(() => ({
    planets,
  }), [planets]);

  return (
    <UseContext.Provider value={ context }>
      {children}
    </UseContext.Provider>
  );
}

PlanetProvider.propTypes = PropTypes.shape({}).isRequired;

export default PlanetProvider;
