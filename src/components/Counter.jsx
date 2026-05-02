import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 w-full">
      <h1 id="count" className="mb-6 text-5xl">
        {count}
      </h1>
      <div className="flex gap-3">
        <button
          onClick={handleDecrease}
          className="px-4 py-1 h-9 rounded-xl bg-white text-black hover:bg-amber-300 hover:text-black "
        >
          Click -1
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-1 h-9 rounded-xl bg-black text-white hover:bg-amber-300 hover:text-black "
        >
          Reset
        </button>
        <button
          onClick={handleIncrease}
          className="px-4 py-1 h-9 rounded-xl bg-white text-black hover:bg-amber-300 hover:text-black "
        >
          Click +1
        </button>
      </div>
    </div>
  );
}
