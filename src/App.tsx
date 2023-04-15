import React, { FC, useState } from "react";

import Todo from "./components/Todo";




const App: FC = () => {
  const [task, setTask] = useState("");
  const [taskList, setTasksList] = useState<string[]>([]);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    setTask(e.target.value);
  }

  const addTask = () => {
    setTasksList([...taskList, task]);
    setTask("");
  };

  return (
    <div className="mx-auto flex h-screen max-w-screen-lg flex-col items-center justify-start px-5">
      <h1 className="my-5 text-center font-[Roboto-Slab] text-3xl font-bold text-[#e0def4]">
        ToDo List
      </h1>
      <div className="mt-5 flex items-center space-x-1">
        <input
          type="text"
          className="mx-auto mr-3 w-[77%] p-1 "
          placeholder="Add a new task"
          value={task}
          onChange={handleInput}
        />
        <button
          onClick={addTask}
          className="rounded font-serif bg-[#ebbcba] px-4 py-1 font-bold text-[#31748f] shadow-md shadow-[#31748f]"
        >
          Add
        </button>
      </div>

      <Todo tasklist={taskList} />




    </div>
  );
};

export default App;
