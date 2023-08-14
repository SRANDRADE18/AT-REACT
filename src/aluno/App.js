import { Link } from 'react-router-dom';
import './App.scss';
import { useState } from 'react';
import Cabecalho from '../componets/cabecalho/index'
export default function ListaTarefa() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);
  
  function alterarTarefa(e) {
    setTarefa(e.target.value);
  }

  function adicionar() {
    tarefas.push(tarefa);
    setTarefas([...tarefas]);
    setTarefa('');
  }
  
  return (
    <div className="pagina-lista-tarefa">
    <Cabecalho></Cabecalho>
      <div className='container'>
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

        </div>  
        <Link className='voltar' to='/home'> Voltar para Menu </Link>
      </div>
  )

}

