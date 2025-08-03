import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const saveUser = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const clearAuth = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.info("You have been logged out successfully");
  };

  return (
    <AuthContext.Provider value={{ user, saveUser, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
