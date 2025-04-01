import React from 'react';
import '../components/pesonormal.css'

function PesoNormal({ imc }) {
  return (
    <>
    <div className="normalpeso__container">
      <h2 className='h2__normalpeso'>Peso Normal</h2>
      <div className='grid__normalpeso'>
    <p className='p__normalpeso'>  E uma condição em que o peso corporal de uma pessoa está acima do 
      que é considerado saudável para a sua idade, sexo e altura. </p>
      <ul>
        <li className='li__normalpeso'> IMC entre 25 e 29,9.</li>
        <li  className='li__normalpeso'>Aumenta o risco de doenças cardíacas, diabetes e outros problemas de saúde.
        </li>
        <li  className='li__normalpeso'>  Requer atenção para evitar complicações.</li>
      </ul>
      </div>
    <h1 className="normal__peso">
      {imc.toFixed(2)}
    </h1>
    </div>
    <div>

    </div>
    </>
  );
}

export default PesoNormal;