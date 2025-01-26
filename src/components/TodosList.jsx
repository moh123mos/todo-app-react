import TodoItem from "./TodoItem";

export default function TodosList({
  todos,
  deleteTask,
  completeTask,
  editTask,
}) {
  // console.log(todos);
  return (
    <ul className="task-list">
      {todos.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          completeTask={completeTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}
