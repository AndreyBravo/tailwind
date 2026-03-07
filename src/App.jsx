import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container relative mx-auto ">
      <h1 className="text-3xl text-orange-50 text-center mt-22 font-bold">
        Hello
      </h1>

      <button className="block mx-auto bg-amber-300 hover:bg-amber-400 transition-colors ease-in-out duration-300 rounded-2xl font-bold text-3xl text-blue-500 mt-12 p-5 ">
        PRESS
      </button>

      <div className="text-3xl pl-1 w-24 h-32 font-bold bg-blue-200 my-10 mx-20 text-amber-950">
        Width
      </div>

      <div className="flex justify-between">
        <div
          className="bg-amber-900 w-20 h-10 
        "
        />
        <div
          className="bg-amber-900 w-20 h-10
        "
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div
          className="bg-amber-500  h-10
        "
        />
        <div
          className="bg-amber-500  h-10
        "
        />
      </div>

      <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center">
        <div className="bg-white rounded-2xl text-black text-center w-1/2 ">
          <h1 className="text-xl font-semibold">Model</h1>
          <p>dsfsfsddddddddddddds</p>
        </div>
      </div>
    </div>
  );
}
