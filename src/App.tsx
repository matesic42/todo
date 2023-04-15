import React, { FC, useState } from "react";

const App: FC = () => {
  return (
    <div className="mx-auto flex h-screen max-w-screen-lg flex-col items-center justify-start px-5">
      <h1 className="my-5 border-b text-center font-[Roboto-Slab] text-3xl font-bold text-[#e0def4]">
        ToDo List
      </h1>
      <div className="mt-5 flex  items-center space-x-1">
        <input
          type="text"
          className="mx-auto mr-3 w-[77%] p-1 shadow-sm shadow-[#ebbcba] "
          placeholder="Add a new task"
        />
        <button className="rounded bg-[#ebbcba] px-4 py-1 font-bold text-[#31748f] shadow-md shadow-[#31748f]">
          Add
        </button>
      </div>
    </div>
  );
};

export default App;
