import { useState } from "react";
import OperationBtn from "./OperationBtn";
function TodoItem({ task, deleteTask, completeTask, editTask }) {
  const [value, setValue] = useState(task.title);
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(!edit);
    if (edit) {
      editTask(task.id, value);
    }
  };
  return (
    <div className="todo-item flex justify-between items-center mb-4">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => completeTask(task.id)}
        className="w-5 h-5"
      />
      {!edit ? (
        <h2 className={task.completed ? "text-gray-400 line-through" : ""}>
          {task.title}
        </h2>
      ) : (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="addition-input flex-1 mx-4 border-1 border-white rounded-md p-1 me-2"
        />
      )}
      <OperationBtn deleteTask={deleteTask} editTask={handleEdit} task={task} />
    </div>
  );
}

export default TodoItem;
