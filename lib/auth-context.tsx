"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user has session on mount
    const hasSession = localStorage.getItem("auth-session") === "true";
    setIsAuthenticated(hasSession);
  }, []);

  const setAuthenticated = (value: boolean) => {
    setIsAuthenticated(value);
    if (value) {
      localStorage.setItem("auth-session", "true");
    } else {
      localStorage.removeItem("auth-session");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
