"use client"
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";

interface UserData {
  [key: string]: any;
}

interface AuthContextType {
  isAuthenticated: boolean;
  userData: UserData | null;
  login: (token: string, userData: UserData) => void;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);


  useEffect(() => {
    const token = localStorage.getItem("token");
    const userDataString = localStorage.getItem("userData");

    if (token && userDataString) {
      setIsAuthenticated(true);
      setUserData(JSON.parse(userDataString));
    }
  }, []);

  const login = (token: string, userData: UserData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userData", JSON.stringify(userData));
    setIsAuthenticated(true);
    setUserData(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setIsAuthenticated(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
