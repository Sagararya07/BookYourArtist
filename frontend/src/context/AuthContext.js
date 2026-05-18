import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('bya_token'));
  const [username, setUsername] = useState(localStorage.getItem('bya_user'));

  const login = (tok, user) => {
    localStorage.setItem('bya_token', tok);
    localStorage.setItem('bya_user', user);
    setToken(tok);
    setUsername(user);
  };

  const logout = () => {
    localStorage.removeItem('bya_token');
    localStorage.removeItem('bya_user');
    setToken(null);
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ token, username, login, logout, isAdmin: !!token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
