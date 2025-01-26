export default function OperationBtn({ task, deleteTask, editTask }) {
  const btns = [
    {
      id: 1,
      title: "🖋️",
      operation: "edit",
    },
    {
      id: 2,
      title: "❌",
      operation: "delete",
    },
  ];
  const handleClick = (operation) => {
    if (operation === "delete") {
      deleteTask(task.id);
    } else if (operation === "edit") {
      editTask();
    }
  };
  const btnsList = btns.map((btn) => (
    <button
      key={btn.id}
      onClick={() => handleClick(btn.operation)}
      className="operation-btn !p-2 !m-1"
    >
      {btn.title}
    </button>
  ));
  return <div className="operation-btn">{btnsList}</div>;
}
