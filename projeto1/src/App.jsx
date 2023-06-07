import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const handleAlturaChange = (event) => {
    setAltura(event.target.value);
  };

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado.toFixed(2));

    if (imcCalculado < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imcCalculado >= 18.5 && imcCalculado < 25) {
      setClassificacao('Peso normal');
    } else if (imcCalculado >= 25 && imcCalculado < 30) {
      setClassificacao('Sobrepeso');
    } else if (imcCalculado >= 30 && imcCalculado < 40) {
      setClassificacao('Obesidade');
    } else {
      setClassificacao('Obesidade Grave');
    }

    setAltura('');
    setPeso('');
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label htmlFor="altura">Altura (cm):</label>
        <input
          type="text"
          id="altura"
          value={altura}
          onChange={handleAlturaChange}
        />
      </div>
      <div>
        <label htmlFor="peso">Peso (kg):</label>
        <input
          type="text"
          id="peso"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      {imc && (
        <div>
          <p className={classificacao === 'Abaixo do peso' || classificacao === 'Peso normal' ? 'green' : 'red'}>
            Seu IMC é: {imc}
          </p>
          <p className={classificacao === 'Abaixo do peso' || classificacao === 'Peso normal' ? 'green' : 'red'}>
            Classificação: {classificacao}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
