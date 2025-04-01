import React from 'react';
import '../components/sobrepeso.css'

function Sobrepeso({ imc }) {
  return (
    <>
    <div className="sobrepeso__container">
      <h2 className='h2__sobrepeso'>SobrePeso</h2>
      <div className='grid__sobrepeso'>
    <p className='p__sobrepeso'>  E uma condição em que o peso corporal de uma pessoa está acima do 
      que é considerado saudável para a sua idade, sexo e altura. </p>
      <ul>
        <li className='li__sobrepeso'> IMC entre 25 e 29,9.</li>
        <li  className='li__sobrepeso'>Aumenta o risco de doenças cardíacas, diabetes e outros problemas de saúde.
        </li>
        <li  className='li__sobrepeso'>  Requer atenção para evitar complicações.</li>
      </ul>
      </div>
    <h1 className="sobre__peso">
      {imc.toFixed(2)}
    </h1>
    </div>
    <div>

    </div>
    </>
  );
}

export default Sobrepeso;