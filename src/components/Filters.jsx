export default function Filters({ filters, filterTodos, activeFilter }) {
  const handleActiveFilter = (filterId) => {
    filterTodos(filterId);
  };

  const filtersList = filters.map((filter) => (
    <button
      key={filter.id}
      className={`filter m-3 ${
        activeFilter === filter.id ? "!bg-blue-600" : ""
      }`}
      onClick={() => handleActiveFilter(filter.id)}
    >
      {filter.title}
    </button>
  ));

  return <div className="filters mb-4">{filtersList}</div>;
}
