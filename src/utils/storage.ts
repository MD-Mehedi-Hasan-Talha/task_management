/**
 * Utility for managing localStorage for authentication.
 */

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const storage = {
  /**
   * Get the authentication token from localStorage.
   */
  getToken: (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
  },

  /**
   * Set the authentication token in localStorage.
   */
  setToken: (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
  },

  /**
   * Remove the authentication token from localStorage.
   */
  removeToken: (): void => {
    localStorage.removeItem(TOKEN_KEY);
  },

  /**
   * Get the serialized user data from localStorage.
   */
  getUser: <T>(): T | null => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  /**
   * Set the serialized user data in localStorage.
   */
  setUser: (user: any): void => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  /**
   * Remove the serialized user data from localStorage.
   */
  removeUser: (): void => {
    localStorage.removeItem(USER_KEY);
  },

  /**
   * Clear all authentication-related data from storage.
   */
  clearAuth: (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};
