import React from 'react';
import '../components/abaixopeso.css'

function AbaixoPeso({ imc }) {
  return (
    <>
    <div className="abaixopeso__container">
      <h2 className='h2__abaixopeso'>Desnutrição</h2>
      <div className='grid__abaixopeso'>
    <p className='p__abaixopeso'>  E uma condição em que o peso corporal de uma pessoa está muito abaixo 
      do que é considerado saudável para a sua idade, sexo e altura. </p>
      <ul>
        <li className='li__abaixopeso'> 

        IMC abaixo de 18,5.
        </li>
        <li  className='li__abaixopeso'>
        Pode indicar desnutrição ou outros problemas de saúde.
        </li>
        <li  className='li__abaixopeso'> 

        Requer atenção médica e nutricional.
        </li>
      </ul>
      </div>
    <h1 className="abaixo__peso">
      {imc.toFixed(2)}
    </h1>
    </div>
    <div>

    </div>
    </>
  );
}

export default AbaixoPeso;