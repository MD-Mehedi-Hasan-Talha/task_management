/**
 * Service for API interactions.
 */

import { storage } from '../utils/storage';

const BASE_URL = 'https://task-api-eight-flax.vercel.app';

interface RequestOptions extends RequestInit {
  body?: any;
}

/**
 * Generic API request wrapper.
 */
async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const token = storage.getToken();
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    ...options,
    headers,
  };

  if (options.body && typeof options.body === 'object') {
    config.body = JSON.stringify(options.body);
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    
    // Handle unauthorized response (e.g., token expired)
    if (response.status === 401) {
      storage.clearAuth();
      window.dispatchEvent(new Event('unauthorized'));
    }

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data as T;
  } catch (error: any) {
    console.error('API Request Error:', error.message);
    throw error;
  }
}

export const api = {
  get: <T>(endpoint: string, options?: RequestOptions) => 
    request<T>(endpoint, { ...options, method: 'GET' }),
  
  post: <T>(endpoint: string, body: any, options?: RequestOptions) => 
    request<T>(endpoint, { ...options, method: 'POST', body }),
  
  put: <T>(endpoint: string, body: any, options?: RequestOptions) => 
    request<T>(endpoint, { ...options, method: 'PUT', body }),
  
  delete: <T>(endpoint: string, options?: RequestOptions) => 
    request<T>(endpoint, { ...options, method: 'DELETE' }),
};
