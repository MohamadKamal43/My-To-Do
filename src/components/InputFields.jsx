import React from "react";

export default function InputFields({
  label,
  errors,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-lg text-gray-700">{label}</label>
      <input
        {...props}
        className={`border border-blue-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
          errors ? "border-red-500 focus:ring-red-500" : ""
        } ${className}`}
      />
      {errors && (
        <span className="text-red-600 text-sm font-medium">{errors}</span>
      )}
    </div>
  );
}
