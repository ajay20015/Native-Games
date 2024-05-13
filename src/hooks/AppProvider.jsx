import React, {createContext, useContext, useEffect, useState} from 'react';
import {Appearance, StyleSheet, Text, View, useColorScheme} from 'react-native';

export const StoreContext = createContext();

const AppProvider = ({children}) => {
  const [theme, setTheme] = useState('light');

  const defaultTheme = useColorScheme();

  useEffect(() => {
    setTheme(defaultTheme);
    Appearance.addChangeListener(theme => {
      setTheme(theme.colorScheme);
    });
  }, []);

  return (
    <StoreContext.Provider value={{theme}}>{children}</StoreContext.Provider>
  );
};

export default AppProvider;

const styles = StyleSheet.create({});
