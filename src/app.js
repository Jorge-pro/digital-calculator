import React from 'react';
import Calculator from './containers/calculator';
import './app.css';

export function App() {
  return (
    <div className="Screen">
      <div className={'divSuperior'} />
      <Calculator />
      <div className={'divInferior'} />
    </div>
  );
}
