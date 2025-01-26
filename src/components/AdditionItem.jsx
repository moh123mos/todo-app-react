import { useState } from "react";

export default function AdditionItem({ add }) {
  let [item, setItem] = useState();
  const addNewTask = () => {
    add(item);
    setItem("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addNewTask();
      }}
      className="addition-item flex justify-between items-center mb-4"
    >
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        type="text"
        className="addition-input flex-1 border-1 border-white rounded-md p-1 me-2"
      />
      <button type="submit" className="add-btn !p-2">
        إضافة
      </button>
    </form>
  );
}
