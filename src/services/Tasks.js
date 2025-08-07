import axios from "axios";
import { toast } from "react-toastify";

// Use Vercel API URL in production, localhost in development
const API_BASE_URL = import.meta.env.PROD
  ? "https://https://my-to-do-wheat.vercel.app/api"
  : "http://localhost:3000";

export const TasksApi = {
  createTask: async (name, description, priority, dueDate, userId) => {
    try {
      const taskData = {
        name,
        description,
        priority,
        dueDate,
        userId,
        status: "pending",
      };
      const response = await axios.post(`${API_BASE_URL}/tasks`, taskData);
      toast.success("Task created successfully!");
      return response.data;
    } catch (error) {
      console.error("Error creating task:", error);
      toast.error(
        "Failed to create task. Please check if the server is running."
      );
      throw error;
    }
  },

  fetchTask: async (userId, taskName = "") => {
    try {
      let url = `${API_BASE_URL}/tasks?userId=${userId}`;
      if (taskName && taskName.trim()) {
        url += `&name_like=${encodeURIComponent(taskName.trim())}`;
      }
      url += "&_sort=dueDate&_order=asc";

      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      toast.error(
        "Failed to fetch tasks. Please check if the server is running."
      );

      throw error;
    }
  },

  updateTask: async (id, updatedTask) => {
    try {
      const { data } = await axios.put(
        `${API_BASE_URL}/tasks/${id}`,
        updatedTask
      );
      toast.success("Task updated successfully!");
      return data;
    } catch (error) {
      console.error("Error updating task:", error);
      toast.error(
        "Failed to update task. Please check if the server is running."
      );
    }
  },

  deleteTask: async (id) => {
    try {
      const { data } = await axios.delete(`${API_BASE_URL}/tasks/${id}`);
      toast.success("Task deleted successfully!");
      return data;
    } catch (error) {
      console.error("Error deleting task:", error);
      toast.error(
        "Failed to delete task. Please check if the server is running."
      );
    }
  },
};
