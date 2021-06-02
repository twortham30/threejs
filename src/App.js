import React, {   useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import ReactDOM from 'react-dom';
import './App.css';


import House from './components/house';
import Box from './components/Threedhouse';
//import Model from './components/newhouse';

import Model from './components/Home2';
import Lights from './components/light';

import Multifam from "./components/Multifam";




function App() {



  return (
    <div className="App">







<div class="container">
<div class="row">
<div class="col-sm">
<Canvas colorManagement shadowMap camera={{position: [2,2,6], fov: 100}} >
      
    <Lights/>
      <Suspense fallback={null}>
        <Model   position={[0, 0, 0]}/>
      
      </Suspense>
    </Canvas>
    </div>
    <div class="col-sm">
<Canvas colorManagement shadowMap camera={{position: [2,2,8], fov: 60}} >
      
    <Lights/>
      <Suspense fallback={null}>
        <Multifam  position={[0, 0, 0]}/>
      
      </Suspense>
    </Canvas>
    </div>
    </div>
  </div>


  










    </div>

    
  );

 

};

export default App;
