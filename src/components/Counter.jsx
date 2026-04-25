export default function Counter() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 w-full">
      <h1 id="count" className="mb-6 text-5xl">
        0
      </h1>
      <div className="flex gap-3">
        <button
          id="Plus1"
          className="px-4 py-1 h-9 rounded-xl bg-white text-black hover:bg-amber-300 hover:text-black "
        >
          Click +1
        </button>
        <button
          id="Minus1"
          className="px-4 py-1 h-9 rounded-xl bg-white text-black hover:bg-amber-300 hover:text-black "
        >
          Click -1
        </button>
      </div>
    </div>
  );
}
