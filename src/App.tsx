import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ObjFileLoader from './Components/ObjFileLoader';
import { Initialize } from './Components/RendererModule';
import SidePanel from './Components/SidePanel';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  let start = false;
  useEffect(() => {
    if(!start) {
      Initialize();
      start = true;
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}> 
      <canvas id="gfx-main" width="1920" height="800"></canvas>
      <SidePanel></SidePanel>
    </ThemeProvider>
  );
}

export default App;
