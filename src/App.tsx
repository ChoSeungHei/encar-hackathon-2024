import React, { useEffect, useRef } from 'react';
import Controller from './Components/Controller/Controller';
import { Initialize } from './Components/RendererModule';


function App() {
  const start = useRef(false);

  useEffect(() => {
    if(!start.current) {
      Initialize();
      start.current = true;
    }
  }, []);


  return (
    <div>
      <Controller/>
      <canvas id="gfx-main" width="1920" height="900" style={{overflow: 'hidden'}}></canvas>
      <button id="test">test</button>
    </div>
  );
}

export default App;
