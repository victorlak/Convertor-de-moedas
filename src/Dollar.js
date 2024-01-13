import React, { useState } from 'react';

function Dollar() {
    const [Entrada, setEntrada] = useState(0);
    const [Exibido, setExibido] = useState(0);
    const [Convertido, setConvertido] = useState(0);
    const changeExibido = (e) => {
        let exibir = e.target.value
        setExibido(exibir)
    }
    const calcularConversao = (e) => {
        let convertido = Exibido * 4.85
        setConvertido(convertido)
    }
    return (
      <div className='BoxMoeda'>
        <h1>Dollar</h1>
        <h2>Entrada:{Exibido}</h2>
        <h2>Em dollar:{Convertido}</h2>
        <input onChange={changeExibido} type="number"></input>
        <button onClick={calcularConversao} >Converter</button>
      </div>
    );
  }
  
  export default Dollar;