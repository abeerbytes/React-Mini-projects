import { useState } from "react";

const Todo = () => {
  const [Input, SetInput] = useState("");
  const [Todos, SetTodos] = useState([]);

  // Add Todos
  const AddTask = () => {
    if (Input === "") return;
    SetTodos([...Todos, Input]);
    SetInput("");
  };

  // Delete Todos
  const DeleteTask = (index) => {
    const NewTodos = Todos.filter((_, i) => i !== index);
    SetTodos(NewTodos);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Todo App
        </h2>
        
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={Input}
            onChange={(e) => SetInput(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            onKeyPress={(e) => e.key === "Enter" && AddTask()}
          />
          <button
            onClick={AddTask}
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2 mb-6">
          {Todos.map((Todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-150"
            >
              <span className="text-gray-700 flex-1">{Todo}</span>
              <button
                onClick={() => DeleteTask(index)}
                className="ml-4 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <p className="text-center text-gray-600 font-medium">
          Total Tasks: <span className="text-indigo-600">{Todos.length}</span>
        </p>
      </div>
    </div>
  );
};

export default Todo;