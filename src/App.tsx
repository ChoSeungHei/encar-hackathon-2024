import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ObjFileLoader from './Components/ObjFileLoader';
import { Initialize } from './Components/RendererModule';
import { CloseIncon } from './Assets/tab-icons/icons';
import SidePanel from './Components/SidePanel';
import Controller from './Components/Controller/Controller';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const start = useRef(false);
  const [title, setTitle] = useState('Here is the exterior inspection result');

  useEffect(() => {
    if(!start.current) {
      console.log(1111);
      Initialize();
      start.current = true;
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
        <Controller/>
        <canvas id="gfx-main" width="1920" height="900" style={{marginLeft:'230px'}}></canvas>
      </div>
    </ThemeProvider>
  );
}

export default App;
