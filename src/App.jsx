import { useState, useEffect } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!newTodoText.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: newTodoText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTodoText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteAllTodos = () => {
    if (window.confirm("Are you sure you want to delete all tasks?")) {
      setTodos([]);
    }
  };

  const markAllAsComplete = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 sm:p-10 font-sans flex justify-center items-start">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl border border-gray-200 p-8 space-y-6">
        <Header />
        <div className="flex gap-3">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Add
          </button>
        </div>

        {/* Bulk Action Buttons */}
        {todos.length > 0 && (
          <div className="flex gap-3">
            <button
              onClick={markAllAsComplete}
              className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-green-600 transition flex-1"
            >
              Mark All Complete
            </button>
            <button
              onClick={deleteAllTodos}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-red-600 transition flex-1"
            >
              Delete All
            </button>
          </div>
        )}

        {/* ToDo List */}
        <ToDoList
          todos={todos}
          onDelete={deleteTodo}
          onToggleComplete={toggleComplete}
          onEdit={editTodo}
        />
      </div>
    </div>
  );
}
