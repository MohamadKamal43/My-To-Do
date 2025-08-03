import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="text-center py-12">
      <div className="text-6xl font-bold text-gray-300 mb-4">404</div>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      
      <div className="space-x-4">
        <Link 
          to="/" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded transition-colors"
        >
          Go Home
        </Link>
        <Link 
          to="/login" 
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded transition-colors"
        >
          Login
        </Link>
      </div>
    </div>
  );
}