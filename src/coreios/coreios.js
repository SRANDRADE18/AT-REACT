import { Link } from 'react-router-dom';
import './coreios.scss';
import axios from 'axios';
import { useState } from 'react';
import Cabecalho from '../componets/cabecalho/index'

export default function ListaTarefa() {
  const [cep, setCEP] = useState('');
  const [info, setInfo] = useState([]);
  
 async function buscar(e) {
    let url='https://viacep.com.br/ws/'+ cep +'/json/';

    let resposta = await axios.get(url);

    setInfo(resposta.data.logradouro + ',bairro,'+resposta.data.bairro)
  }

 
  
  return (
    <div className="pagina-lista-cep">
    <Cabecalho/>
      <div className='container'>
        <h1> Lista de item </h1>
        <div>
          Adicionar CEP: <input type='text' value={cep} onChange={e => setCEP(e.target.value)} />
        </div>

        <div>
         <button onClick={buscar}> buscar </button>
        </div>

          <ul>
            {info}
          </ul>

        </div>  
        <Link className='voltar' to='/home'> Voltar para Menu </Link>
      </div>
  )

}

