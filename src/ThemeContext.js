import React, { createContext, useContext, useState } from 'react';
import theme from './theme';

const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;