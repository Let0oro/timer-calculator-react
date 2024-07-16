const History = ({ value }) => {
  return (
    <div>
      <b>History:</b>
      <p>
        <i>Last result: </i>
      </p>
      {!!value?.length ? (
        <span>{value[0]}</span>
      ) : (
        <span>None calculated yet</span>
      )}
      <p>
        <b>Last results: </b>
      </p>
      <ul style={{maxHeight: '300px', overflow: 'hidden'}}>
        {value
          .sort((a, b) => a-b)
          .map((res, i) => (
            <li key={i}>{res}</li>
          ))}
      </ul>
    </div>
  );
};

export default History;
