import React, { useEffect, useRef } from 'react';
import Controller from './Components/Controller/Controller';
import { Initialize } from './Components/RendererModule';


function App() {
  let start = false;
  useEffect(() => {
    if(!start) {
      Initialize();
      start = true;
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
