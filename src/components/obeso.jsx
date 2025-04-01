import React from 'react';
import '../components/obeso.css'

function obeso({ imc }) {
  return (
    <>
    <div className="obesopeso__container">
      <h2 className='h2__obesopeso'>OBESIDADE</h2>
      <div className='grid__obesopeso'>
    <p className='p__sobrepeso'>  E uma condição em que o peso corporal de uma pessoa bem acima  
      que é considerado saudável para a sua idade, sexo e altura. </p>
      <ul>
        <li className='li__obesopeso'> IMC acima de 30..</li>
        <li  className='li__obesopeso'>Aumenta significativamente o risco de doenças crônicas.
        </li>
        <li  className='li__obesopeso'>  Requer acompanhamento médico e mudanças no estilo de vida.</li>
      </ul>
      </div>
    <h1 className="obeso__peso">
      {imc.toFixed(2)}
    </h1>
    </div>
    <div>

    </div>
    </>
  );
}

export default obeso;