import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import InputFields from "../components/InputFields";
import * as yup from "yup";
import { AuthContext } from "../contexts/AuthContext";
import { TasksApi } from "../services/Tasks.js";

export default function AddTaskForm({ onTaskAdded }) {
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      await TasksApi.createTask(
        values.name,
        values.description,
        values.priority,
        values.dueDate,
        user.id
      );
      resetForm();
      onTaskAdded();
    } catch (error) {
      console.error("Error creating task:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Task name must be at least 3 characters")
      .required("Task name is required"),
    description: yup
      .string()
      .min(10, "Description must be at least 10 characters")
      .required("Description is required"),
    priority: yup
      .string()
      .oneOf(["low", "medium", "high"], "Please select a valid priority")
      .required("Priority is required"),
    dueDate: yup
      .date()
      .min(new Date(), "Due date cannot be in the past")
      .required("Due date is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      priority: "medium",
      dueDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 w-full max-w-4xl">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">
        Welcome back, {user.name}!
      </h1>
      <h3 className="text-lg font-semibold mb-6 text-gray-600">Add New Task</h3>

      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <InputFields
            label="Task Name"
            placeholder="Enter task name"
            {...formik.getFieldProps("name")}
            errors={formik.touched.name && formik.errors.name}
          />
        </div>

        <div className="lg:col-span-1">
          <InputFields
            label="Task Description"
            placeholder="Enter task description"
            {...formik.getFieldProps("description")}
            errors={formik.touched.description && formik.errors.description}
          />
        </div>

        <div className="lg:col-span-1">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-lg text-gray-700">Priority</label>
            <select
              {...formik.getFieldProps("priority")}
              className="border border-blue-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="low">🟢 Low</option>
              <option value="medium">🟡 Medium</option>
              <option value="high">🔴 High</option>
            </select>
            {formik.touched.priority && formik.errors.priority && (
              <span className="text-red-600 text-sm">
                {formik.errors.priority}
              </span>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <InputFields
            label="Due Date"
            type="date"
            {...formik.getFieldProps("dueDate")}
            errors={formik.touched.dueDate && formik.errors.dueDate}
          />
        </div>

        <div className="lg:col-span-4 flex justify-center mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-xl transition duration-200 flex items-center gap-2">
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating...
              </>
            ) : (
              <>➕ Create Task</>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
