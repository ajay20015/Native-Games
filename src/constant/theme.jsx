import {DefaultTheme} from '@react-navigation/native';

const light = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2F3C7E',
    secondary: '#CADCFC',
    text: '#000000',
    background: '#f0ebeb',
  },
};

const dark = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#CADCFC',
    secondary: '#2F3C7E',
    text: '#FFFFFF',
    background: '#454545',
  },
};

export default {light, dark};
