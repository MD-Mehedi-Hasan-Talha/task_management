import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { api } from '../services/api';
import { storage } from '../utils/storage';

interface User {
  id: number;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (credentials: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    storage.clearAuth();
  }, []);

  // Restore auth state from storage on mount
  useEffect(() => {
    const storedToken = storage.getToken();
    const storedUser = storage.getUser<User>();

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
    }
    setLoading(false);

    const handleUnauthorized = () => {
      logout();
    };

    window.addEventListener('unauthorized', handleUnauthorized);
    return () => window.removeEventListener('unauthorized', handleUnauthorized);
  }, [logout]);

  const login = useCallback(async (credentials: any) => {
    setLoading(true);
    try {
      const response = await api.post<any>('/api/login', credentials);
      
      const { token, ...userData } = response;
      
      setToken(token);
      setUser(userData);
      
      storage.setToken(token);
      storage.setUser(userData);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
