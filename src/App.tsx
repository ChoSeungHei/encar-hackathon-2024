import React, { useEffect, useRef, useState, CSSProperties } from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Initialize } from './Components/RendererModule';
import { CloseIncon } from './Assets/tab-icons/icons';
import SidePanel from './Components/SidePanel';
import Controller from './Components/Controller/Controller';
import BeatLoader from "react-spinners/BeatLoader";

const override: CSSProperties = {
  display: "block",
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-40%, 0)'
};

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
        <BeatLoader id="beat" color="#FF2E00" loading={true} cssOverride={override}/>
        <canvas id="gfx-main" width="1920" height="1035" style={{marginLeft:'230px'}}></canvas>
      </div>
    </ThemeProvider>
  );
}

export default App;
