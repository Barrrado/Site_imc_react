import React from 'react';
import '../components/obesomorb.css'

function ObesoMorb({ imc }) {
  return (
    <>
    <div className="morbpeso__container">
      <h2 className='h2__morbpeso'>Obesidade Morbida</h2>
      <div className='grid__morbpeso'>
    <p className='p__morbpeso'>  E uma condição em que o peso corporal de uma pessoa esta Muito cima 
      que é considerado saudável para a sua idade, sexo e altura. </p>
      <ul>
        <li className='li__morbpeso'> IMC entre 35 e 39,9.</li>
        <li  className='li__morbpeso'>Risco elevado de doenças crônicas.
        </li>
        <li  className='li__morbpeso'>  Requer acompanhamento médico e tratamento.</li>
      </ul>
      </div>
    <h1 className="morb__peso">
      {imc.toFixed(2)}
    </h1>
    </div>
    <div>

    </div>
    </>
  );
}

export default ObesoMorb;