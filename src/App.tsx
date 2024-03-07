import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ObjFileLoader from './Components/ObjFileLoader';
import { Initialize } from './Components/RendererModule';
import { CloseIncon } from './Assets/tab-icons/icons';
import SidePanel from './Components/SidePanel';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [title, setTitle] = useState('Here is the exterior inspection result')

  let start = false;
  useEffect(() => {
    if (!start) {
      Initialize();
      start = true;
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <SidePanel setTitle={setTitle}></SidePanel>
      <div className='wrap'>
        <header className='header'>
          <h1>{title}</h1>
          <span><CloseIncon /></span>
        </header>
        <canvas id="gfx-main" width="1920" height="800"></canvas>
      </div>
    </ThemeProvider>
  );
}

export default App;
