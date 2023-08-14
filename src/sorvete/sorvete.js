import { Link } from 'react-router-dom';
import './sorvete.scss';
import { useState } from 'react';

////////////////////
export default function Sorveteria() {
  const [tarefa, setTarefa] = useState('');
  const [sorvete, setsorvete] = useState([]);
  const [preco, setpreco] = useState('');
  const [precos, setprecos] = useState([]);
  const [totalPreco, setTotalPreco] = useState(0);
  ////////////////

  function alterarsorvete(e) {
    setTarefa(e.target.value);
  
  }

  ///////////////////

  function alterarpreco(e) {
    setpreco(e.target.value);
  }

////////////////////

  function adicionar() {
    sorvete.push(tarefa);
    setsorvete([...sorvete]);
    setTarefa('');
    precos.push(preco);
    setprecos([...precos]);
    setpreco('');

    calcularTotalPrecos();
  }  
  
 ///////////////////

 function calcularTotalPrecos() {
  const sum = precos.reduce((acc, curr) => acc + parseFloat(curr), 0);
  setTotalPreco(sum);
}

 //////////////////
  return (

    <div className="pagina-lista-tarefa">

        <header className='cabecalho'>
         <img className='usuario' src='https://cdn.discordapp.com/attachments/1108043024094744706/1137028564189991024/image.png' alt='' />
        </header>

      <div className='container01'>

         <h1> Sorveteria </h1>
        
          <div className='adicionar'>
            <div className='add2'>
            <h2> Novo Item </h2>

            <div className='input'>
            <input type='text' value={tarefa} onChange={alterarsorvete} />
            <input type='text' value={preco} onChange={alterarpreco}/>
            <button onClick={adicionar}> Adicionar </button>
            </div>
      
            </div>

            <div className='calculos'>

             <h2> Lista de Compras</h2>
             <h3> Total: R$ {totalPreco} </h3>

            </div>

            <div className='lista'>

              <ul>
                  <div className='test01'>
                  {sorvete.map(item1  =>   <li> {item1} </li>)}  
                  </div> 
                
                 <div className='test'>
                  {precos.map(item2  =>   <li> {item2} </li>)}            
                 </div> 
              
             </ul>     
             </div>

          </div>
        
        </div>  
        <Link className='voltar' to='/home'> Voltar para Menu </Link>
      </div>

  )

}

