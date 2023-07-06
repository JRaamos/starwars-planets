// import PopulateTable from './PopulateTable';

import { useContext } from 'react';
import PopulateTable from './PopulateTable';
import UseContext from '../context/UseContext';

function Table() {
  const { filterPlanets } = useContext(UseContext);

  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ ({ target }) => filterPlanets(target.value) }
      />
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> rotation_period </th>
            <th> orbital_period </th>
            <th> diameter </th>
            <th> climate </th>
            <th>gravity </th>
            <th> terrain </th>
            <th> surface_water </th>
            <th> population </th>
            <th> films </th>
            <th> created </th>
            <th> edited </th>
            <th> url </th>
          </tr>
        </thead>
        <tbody>
          <PopulateTable />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
