import { Link } from 'react-router-dom';
import './App.scss';
import { useState } from 'react';

export default function ListaTarefa() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  const [monstra,setmonstra] = useState(false)
  
  function alterarTarefa(e) {
    setTarefa(e.target.value);
  }

  function adicionar() {
    tarefas.push(tarefa);
    setTarefas([...tarefas]);
    setTarefa('');
  }

  function Monstra (){
    setmonstra(true)
  }
  function Monstran (){
    setmonstra(false)
  }
  
  return (
    <div className="pagina-lista-tarefa">
    
      <div className='container'>

      
       <h1>
       &nbsp;<i className='fa fa-chevron-down' onClick={Monstran}></i>
        <i className='fa fa-chevron-up' onClick={Monstra}></i>

        </h1>
        {monstra == true &&
        
        <>
        
         <h1> Lista de item </h1>
         <div>
          Adicionar item: <input type='text' value={tarefa} onChange={alterarTarefa} />
         </div>

         <div>
         <button onClick={adicionar}> Adicionar </button>
         </div>

          <ul>
            {tarefas.map(item  =>   <li> {item} </li>)}
          </ul>
        
        </>
       
        
        }

        </div>  

        <Link className='voltar' to='/home'> Voltar para Menu </Link>
      </div>
  )

}

