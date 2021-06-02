import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';

import { HTML } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const Model = () => {
  const  {nodes}  = useLoader(GLTFLoader, "/home.glb");
  const myhome = useRef();
  
  
  
  return  
 
};


    

  




export default Model;