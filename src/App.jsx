import { useEffect, useState } from "react";
import "./App.css";
import Filters from "./components/Filters";
import TodosList from "./components/TodosList";
import AdditionItem from "./components/additionItem";

function App() {
  let [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [filters] = useState([
    { id: 1, title: "الكل" },
    { id: 2, title: "المكتملة" },
    { id: 3, title: "الغير مكتملة" },
  ]);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [activeFilter, setActiveFilter] = useState(1);

  // Operations on the todos
  const AddTask = (value) => {
    if (!value) return;
    setTodos([...todos, { id: Date.now(), title: value, completed: false }]);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTask = (id, newValue) => {
    if (!newValue) return;
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, title: newValue } : todo;
      })
    );
  };

  const completeTask = (id) => {
    setTodos((t) =>
      t.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  // Operations on the filters
  const filterTodos = (filterId) => {
    setActiveFilter(filterId);
    switch (filterId) {
      case 1:
        setFilteredTodos(todos);
        break;
      case 2:
        setFilteredTodos(todos.filter((todo) => todo.completed));
        break;
      case 3:
        setFilteredTodos(todos.filter((todo) => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  useEffect(() => {
    filterTodos(activeFilter);
  }, [todos, activeFilter]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App max-w-[992px] w-[70%] m-auto">
      <h2 className="text-5xl pb-4 mb-4 border-b-1 border-white">مهامي </h2>
      <Filters
        filters={filters}
        filterTodos={filterTodos}
        activeFilter={activeFilter}
      />
      <TodosList
        todos={filteredTodos}
        deleteTask={deleteTask}
        editTask={editTask}
        completeTask={completeTask}
        add={AddTask}
      />
      <AdditionItem add={AddTask} />
    </div>
  );
}

export default App;
