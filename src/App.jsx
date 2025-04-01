import { useState, useEffect, useRef } from 'react';
import '../src/main.css'
import Sobrepeso from './components/sobrepeso';
import Abaixopeso from './components/abaixopeso';
import Obeso from './components/obeso';
import PesoIdeal from './components/pesonormal';
import Obesidade from './components/obesomorb';
import Footer from './components/footer';

function App() {
 const [Peso1 , setPeso] = useState(0);
 const [Altura , setAltura] = useState(0);
 const [IMC , setIMC] = useState('');
  const [showResult, setShowResult] = useState(false);


 const CalculaIMC = () => {
  let peso = parseFloat(Peso1);
  let altura = parseFloat(Altura);
  if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
  try {
    let imc = (peso / (altura * altura)*10000);
    let resultComponent;
    if (imc < 18.5) {
      resultComponent = <Abaixopeso imc={imc} />;
    } else if (imc >= 18.5 && imc < 25) {
      resultComponent = <PesoIdeal imc={imc} />;
    } else if (imc >= 25 && imc < 30) {
      resultComponent = <Sobrepeso imc={imc} />;
    } else if (imc >= 30 && imc < 35) {
      resultComponent = <Obeso imc={imc} />;
    } else if (imc >= 35) {
      resultComponent = <Obesidade imc={imc} />;
    }

    setIMC(resultComponent);
    setShowResult(true);
  } catch (error) {
    setIMC("ERRO AO CALCULAR IMC");
    setShowResult(true);
  }
    }else  {
    alert("Preencha os campos corretamente")
    }

  };


  return (
    <>
  
    <div className="conta">
        <div className='grid__imc'>
        <div>
        <h1>BODY MASS INDEX CALCULATOR</h1>
        <p>Better insderstand your weight in relation to your height using our bodu mass INDEX
          (BM) calculator. While BMI is not the sole determienta of heathly weight, 
          it offers a valuable staring point to evluate your overall heathly and well-being</p>
        </div>
        <div >
          <h2>Enter Your Detais Below</h2>
          <form action="" onSubmit={e => e.preventDefault(e)} >
            <div className='conteiner'>
            <div className='box' > 
              <span className='placeholder'>cm</span>
              <input type="number" id="altura" onKeyUp={e => setAltura(parseFloat(e.target.value))} name="" required />
              <span className='label__number' > Altura</span>
            </div>
            <div className='box'>
            <span className='placeholder'>kg</span>
                <input type="number" id="peso" onKeyUp={e => setPeso(parseFloat(e.target.value))} name="" required />
                <span className='label__number'>Peso</span>
            </div>
            </div>
          <button type="submit" onClick={CalculaIMC}>Calcular IMC</button>
          </form>
        </div>
        </div>
        <div className={`conta imc-result ${showResult ? 'show' : ''}`}
        >
            {IMC}
          </div>
        </div>
      <Footer/>
    </>
 )
}
export default App
