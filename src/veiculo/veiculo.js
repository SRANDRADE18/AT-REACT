import { Link } from 'react-router-dom';
import '../veiculo/veiculo.scss';
import { useState } from 'react';

////////////////////

export default function Veiculo() {
 const [valor,setValor] = useState('');
 const [valores,setValores] = useState([]);
 const [parcela,setParcela] = useState('');
 const [parcelas,setParcelas]= useState([]);
 const [juro,setJuro] = useState('');
 const [juros,setJuros]= useState([]);
 const [totalparcela,setTotalParcela] = useState(0);
 const [totalvalor, setTotalValor] = useState(0);
///////////////////////
 function alterarvalor(e){
  setValor(e.target.value);
 }
 ////////////////////////
 function alterarparcela(e){
  setParcela(e.target.value);
 }
////////////////////////////
function alterarjuros(e){
  setJuro(e.target.value);
 }
 //////////////////////////
 function adicionarvalores(){
  valores.push(valor);
  setValores([...valores])
  setValor('');
  ///////////////
  parcelas.push(parcela);
  setParcelas([...parcelas])
  setParcela('');
  ////////////////////////
  juros.push(juro);
  setJuros([...juros]);
  setJuro('');

  calcularparcelas();
 }
 ////////////////////////
 function calcularparcelas(){
  const vlr = valores.reduce((acc,curr) => acc  + parseFloat(curr),0);
  setTotalValor(vlr);

  const parc = juros.reduce((acc,curr) => acc  + parseFloat(curr),0);
  setTotalParcela(parc);
 }
 ///////////////////////

 return(
  <div className='Veiculo'>

    <div className='veiculo-test'>
       <header>

        <div className='fundo-carro'>
          <img src='https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/04-images/novo-onix-branco-summit.png?imwidth=419'></img>
        </div>
     
       </header>

    <section>

      <div className='meio-test'>

         
       <div className='valor-total'>
         <h1>Valor total</h1>

            <input type='text' value={valor} onChange={alterarvalor}></input>
        </div>
        


        <div className='add-Input'>

          <div className='add-2'>
          <h2>Parcelas</h2>
         <input type='text' value={parcela} onChange={alterarparcela}></input>
          </div>

          <div className='add-2'>

          <h3>Juros Mensal</h3>
          <input type='text' value={juro} onChange={alterarjuros}></input>

          </div>

        </div>

        
        <button onClick={adicionarvalores}>Calcular</button>

       <div className='calculos'>
       <h1>Parcelas:{totalparcela}</h1>
       {valores.map(item1 => <li>{item1}</li>)}
       <h1>Valor Total:{totalvalor}</h1>
       {juros.map(item2 => <li>{item2}</li>)}

      </div>
      
      </div>


    </section>

    </div>

  

  </div>
 )
  }


