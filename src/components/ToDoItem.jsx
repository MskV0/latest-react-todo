import { useState } from "react";

const ToDoItem = ({ todo, onEdit, onToggleComplete, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    onEdit(todo.id, editText.trim());
    setIsEditing(false);
  };

  const isSaveDisabled =
    todo.completed || editText.trim() === todo.text.trim();

  return (
    <div className="flex items-center justify-between gap-4 p-3 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleComplete(todo.id)}
        />

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            disabled={todo.completed}
            className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        ) : (
          <span
            className={`flex-1 break-words ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              disabled={isSaveDisabled}
              className={`px-3 py-1 rounded ${
                isSaveDisabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              Save
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setEditText(todo.text); // reset
              }}
              className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              disabled={todo.completed}
              className={`px-3 py-1 rounded ${
                todo.completed
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600 text-white"
              }`}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ToDoItem;
