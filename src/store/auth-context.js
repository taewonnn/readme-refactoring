import React, { useState } from 'react';

const AuthContext = React.createContext({
  accountName: '',
  token: '',
  isLoggedIn: false,
  // eslint-disable-next-line no-unused-vars
  login: (token, accountName) => {},
  logout: () => {},
});

export function AuthContextProvider({ children }) {
  const initialToken = localStorage.getItem('token');
  const initialAccountName = localStorage.getItem('accountName');
  const [token, setToken] = useState(initialToken);
  const [accountName, setAccountName] = useState(initialAccountName);

  const userIsLoggedIn = !!token;

  const loginHandler = (userToken, userAccountName) => {
    setAccountName(userAccountName);
    setToken(userToken);
    localStorage.setItem('accountName', userAccountName);
    localStorage.setItem('token', userToken);
  };

  const logoutHandler = () => {
    localStorage.removeItem('accountName');
    localStorage.removeItem('token');
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    accountName,
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export default AuthContext;
