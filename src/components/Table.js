import FormsTable from './FormsTable';
import PopulateTable from './PopulateTable';

function Table() {
  return (
    <div>
      <FormsTable />
      <table
        data-testid="planets"
      >
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
