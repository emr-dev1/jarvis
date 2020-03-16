import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        gray: '#BAC1B8',
        flame: '#EC4E20',
        cadetBlue: '#58A4B0',
        deepGreenCyanTurquoise: '0C7C59',
        gunmetal: '#2B303A',
    }
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

export default Theme;
