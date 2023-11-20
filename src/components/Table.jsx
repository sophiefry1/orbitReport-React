const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* 1. iterate over the data and return a table row with 4 data tags in it */}
        {sat.map((data, id) => {
          let status = "active";

          if (data.operational === false) {
           status = "inactive"
          }
          

          return (
            <tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{status}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
