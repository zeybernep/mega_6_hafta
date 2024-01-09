import React, { useState } from 'react';
import './App.css';

function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToCelsius = () => {
    const celsiusValue = parseFloat(fahrenheit) !== NaN ? (parseFloat(fahrenheit) - 32) * (5 / 9) : '';
    setCelsius(celsiusValue);
  };

  const convertToFahrenheit = () => {
    const fahrenheitValue = parseFloat(celsius) !== NaN ? (parseFloat(celsius) * 9 / 5) + 32 : '';
    setFahrenheit(fahrenheitValue);
  };

  return (
    <div className="app">
       <header className="header">
        <h2>Üretken Akademi</h2>
      </header>
      <h1>Sıcaklık Birimi Dönüştürücü</h1>
      <div className="converter">
        <label>Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
        <button onClick={convertToFahrenheit}>&#8594;</button>
      </div>
      <div className="converter">
        <label>Fahrenheit:</label>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(e.target.value)}
        />
        <button onClick={convertToCelsius}>&#8594;</button>
        
      </div>
      <div className="footer">
        Zeynep Berra Koç
       </div>
    </div>
  );
}

export default App;