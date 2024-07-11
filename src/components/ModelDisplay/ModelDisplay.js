import React, { useRef, useState } from 'react';
import modelConfig from './ModelConfig'
import './ModelDisplay.css';

const ModelDisplay = ({ stream }) => {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(modelConfig)[0]); 
  const [selectedModel, setSelectedModel] = useState(Object.keys(modelConfig[selectedCategory].models)[0]);
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false); 
  const [modelContent, setmodelContent] = useState(null); 
  const canvasRef = useRef(null);
  const ModelComponent = modelConfig[selectedCategory].models[selectedModel];

  return (
    <div className="container">
      <div className="column">
        <div className="video-container">
          {isLoading && <div className="loading-overlay">Cargando modelo...</div>} {/* Overlay de carga */}
          <canvas ref={canvasRef} className="canvas" />
        </div>
        
      </div>
      <div className="column">
        <ModelComponent key={key} stream={stream} canvasRef={canvasRef} isLoading={isLoading} setIsLoading={setIsLoading} modelContent={modelContent} setmodelContent={setmodelContent} /> {/* Pasar modelContent y setmodelContent como props */}
        {/* {modelContent} Utiliza modelContent aquí */}
      </div>
    </div>
  );
};

export default ModelDisplay;
