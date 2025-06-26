// src/Context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setUserName(localStorage.getItem("userName"));
    }
  }, []);

  const login = (name) => {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", name);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
