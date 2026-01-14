import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-100 to-purple-200">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Counter 😄
        </h1>

        <p className="text-6xl font-extrabold text-indigo-600 my-4">
          {count}
        </p>

        {count === 10 && (
          <p className="text-green-600 font-medium mb-3 animate-bounce">
            🎉 Maximum limit reached!
          </p>
        )}

        <div className="flex justify-between gap-3 mt-4">
          <button
            onClick={decrement}
            disabled={count === 0}
            className="flex-1 py-2 rounded-lg bg-red-500 text-white font-semibold 
                       hover:bg-red-600 transition disabled:opacity-40"
          >
            −
          </button>

          <button
            onClick={() => setCount(0)}
            className="flex-1 py-2 rounded-lg bg-gray-500 text-white font-semibold 
                       hover:bg-gray-600 transition"
          >
            Reset
          </button>

          <button
            onClick={increment}
            disabled={count === 10}
            className="flex-1 py-2 rounded-lg bg-green-500 text-white font-semibold 
                       hover:bg-green-600 transition disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
