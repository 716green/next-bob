const List = () => {
  return (
    <div>
      <h2>List</h2>
      <ul>
        {[1, 2, 3, 4, 5].map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
