// hooks/useAuth.ts
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: string;
  name: string;
  email: string;
  // Add any other user-related properties
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');
    const userData = Cookies.get('user');
    if (accessToken && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing user data:', error);
        // Handle the error, e.g., remove the invalid data from cookies
        Cookies.remove('user');
        setUser(null);
      }
    }
  }, []);

  function isLoggedIn(): boolean {
    return !!user;
  }

  function logout(): void {
    Cookies.remove('accessToken');
    Cookies.remove('user');
    setUser(null);
  }

  return { user, isLoggedIn, logout };
}