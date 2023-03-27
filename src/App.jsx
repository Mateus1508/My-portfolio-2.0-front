import React from 'react';
import AppRoutes from './Routes';
import Header from './components/Header';
import { GlobalStyles } from './GlobalStyles';
import dark from './Theme/dark';
import light from './Theme/light';
import { ThemeProvider } from 'styled-components';

const App = () => {
    const [theme, setTheme] = React.useState(light);
    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? dark : light);
    };
    return ( 
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header toggleTheme={toggleTheme}/>
            <AppRoutes />
      </ThemeProvider>
     );
}
 
export default App;