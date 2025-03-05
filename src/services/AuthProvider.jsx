import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setjwt } from './jwtService'; 

export const AuthContext = createContext({ token: null, setAuthToken: () => {} });

export const AuthProvider = ({ children }) => {
  const [token, setTokenState] = useState(null);

  const setAuthToken = async newToken => {
    setTokenState(newToken);
    await AsyncStorage.setItem('@myapp:tokenjwt', newToken);
    setjwt(newToken);
  };

  useEffect(() => {
    async function loadToken() {
      const storedToken = await AsyncStorage.getItem('@myapp:tokenjwt');
      if (storedToken) {
        setTokenState(storedToken);
        setjwt(storedToken);
      }
    }
    loadToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};
