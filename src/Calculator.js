import React, { useState } from 'react';

const Caluclator = () => {
    const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [mode, setMode] = useState('dark');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '⌫') {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const darkmode = () => {
    setMode(mode === 'light' ? 'dark':'dark' );
  };
  const lightmode = () => {
    setMode(mode === 'dark' ? 'light' : 'light');
  };
    return (  
    <div className={`calculator ${mode}`}>
    <div className="display">
    <div className="buttons">
      <div className="top-buttons">
        <button className='mode-buttons' onClick={lightmode}>
        <img width="25" height="25" src="https://img.icons8.com/ios/50/sun--v1.png" alt="sun--v1"/>
        </button>
        <button onClick={darkmode} className='mode-buttons'>
        <img width="25" height="25" src="https://img.icons8.com/sf-black-filled/64/moon-symbol.png" alt="moon-symbol"/>
        </button>
      </div>
      </div>
      <div className="input">{input}</div>
      <div className="result">{result}</div>
    
    
      </div>
      <div className="button-grid">
        {['7', '8', '9', '⌫', '4', '5', '6', '/', '1', '2', '3', '*', '0', '.', '+', '-','C','='].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    
  </div> );
}
 
export default Caluclator;