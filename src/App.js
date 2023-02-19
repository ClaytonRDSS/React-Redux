import './App.css';
import React from 'react';


import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Media from './components/Media';
import Sorteio from './components/Sorteio';

function App() {

  return (
    <div className='App'>
      <div className="linha">
        <Intervalo />
      </div>

      <div className="linha">
        <Soma />
        <Media />
        <Sorteio />
      </div>

    </div>
  );
}

export default App;
