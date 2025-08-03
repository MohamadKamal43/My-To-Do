import React, { useState } from "react";
import { TasksApi } from "../services/Tasks";
import { Edit, Trash2, Check, X, Calendar, AlertCircle } from "lucide-react";

export default function Task({
  id,
  name,
  description,
  priority,
  dueDate,
  status,
  userId,
  onUpdate,
  onDelete,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    name,
    description,
    priority,
    dueDate,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleStatus = async () => {
    setIsLoading(true);
    try {
      const newStatus = status === "completed" ? "pending" : "completed";
      const updatedTask = {
        name,
        description,
        priority,
        dueDate,
        userId,
        status: newStatus,
      };
      await TasksApi.updateTask(id, updatedTask);
      onUpdate();
    } catch (error) {
      console.error("Failed to update task status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await TasksApi.deleteTask(id);
      onDelete();
    } catch (error) {
      console.error("Failed to delete task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveEdit = async () => {
    setIsLoading(true);
    try {
      const updatedTask = {
        ...editedTask,
        userId,
        status,
      };
      await TasksApi.updateTask(id, updatedTask);
      setIsEditing(false);
      onUpdate();
    } catch (error) {
      console.error("Failed to update task:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedTask({ name, description, priority, dueDate });
    setIsEditing(false);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "high":
        return "🔴";
      case "medium":
        return "🟡";
      case "low":
        return "🟢";
      default:
        return "⚪";
    }
  };

  const isOverdue = new Date(dueDate) < new Date() && status === "pending";

  return (
    <div
      className={`p-6 rounded-lg shadow-md mb-4 w-full transition-all duration-200 border-l-4 ${
        status === "completed"
          ? "bg-green-50 border-l-green-500 opacity-75"
          : isOverdue
          ? "bg-red-50 border-l-red-500"
          : "bg-white border-l-blue-500"
      }`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleStatus}
            disabled={isLoading}
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
              status === "completed"
                ? "bg-green-500 border-green-500 text-white"
                : "border-gray-300 hover:border-green-500"
            }`}>
            {status === "completed" && <Check size={14} />}
          </button>

          <div
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(
              priority
            )}`}>
            {getPriorityIcon(priority)} {priority}
          </div>

          {isOverdue && (
            <div className="flex items-center gap-1 text-red-600">
              <AlertCircle size={16} />
              <span className="text-xs font-semibold">OVERDUE</span>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          {!isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                title="Edit task">
                <Edit size={16} />
              </button>
              <button
                onClick={handleDelete}
                disabled={isLoading}
                className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                title="Delete task">
                <Trash2 size={16} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleSaveEdit}
                disabled={isLoading}
                className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                title="Save changes">
                <Check size={16} />
              </button>
              <button
                onClick={handleCancelEdit}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                title="Cancel editing">
                <X size={16} />
              </button>
            </>
          )}
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-4">
          <input
            type="text"
            value={editedTask.name}
            onChange={(e) =>
              setEditedTask({ ...editedTask, name: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Task name"
          />
          <textarea
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="3"
            placeholder="Task description"
          />
          <div className="flex gap-4">
            <select
              value={editedTask.priority}
              onChange={(e) =>
                setEditedTask({ ...editedTask, priority: e.target.value })
              }
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="low">🟢 Low</option>
              <option value="medium">🟡 Medium</option>
              <option value="high">🔴 High</option>
            </select>
            <input
              type="date"
              value={editedTask.dueDate}
              onChange={(e) =>
                setEditedTask({ ...editedTask, dueDate: e.target.value })
              }
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ) : (
        <div>
          <h3
            className={`text-xl font-bold mb-2 ${
              status === "completed"
                ? "line-through text-gray-500"
                : "text-gray-800"
            }`}>
            {name}
          </h3>
          <p
            className={`text-gray-600 mb-3 ${
              status === "completed" ? "line-through" : ""
            }`}>
            {description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>Due: {new Date(dueDate).toLocaleDateString()}</span>
            </div>
            <div
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                status === "completed"
                  ? "bg-green-100 text-green-800"
                  : "bg-blue-100 text-blue-800"
              }`}>
              {status}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
