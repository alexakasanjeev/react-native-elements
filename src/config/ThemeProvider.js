import React, { useState } from 'react';
import PropTypes from 'prop-types';
import deepmerge from 'deepmerge';

import colors from './colors';

const ThemeContext = React.createContext();

const ThemeProvider = ({ theme: propTheme, children }) => {
  const [theme, setTheme] = useState(deepmerge({ colors }, propTheme));

  const updateTheme = updates => setTheme(deepmerge(theme, updates));

  return (
    <ThemeContext.Provider
      value={{
        theme,
        updateTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
};

ThemeProvider.defaultProps = {
  theme: {},
};

export default ThemeProvider;

export const ThemeConsumer = ThemeContext.Consumer;
