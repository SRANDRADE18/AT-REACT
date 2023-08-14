import { Link } from 'react-router-dom';
import './app3.scss';
import { useState } from 'react';
import Cabecalho from '../componets/cabecalho/index.js'

export default function ListaTarefa() {

  const [n1, setN1]= useState(0);
  const [n2, setN2]= useState(0);
  const [n3, setN3]= useState(0);

const [media, setMedia]=useState(10);

const [situacao, setSituacao]=useState('<----->');



function calcular() {
  let m = (n1+n2+n3)/3;

  setMedia(m);
  if (m >= 5){
    setSituacao('aprovado')
  }

  else if (m >= 3){
    setSituacao('recuperação')
  }
  else if (m >= 0){
    setSituacao('reprovado')
  }
  else{
    setSituacao('invalido')
  }

}

  return (
    <div className="pagina-lista-tarefa">
      
    <Cabecalho/>

      <div className='container'>
        <h1> notas </h1>
        <div>
          Adicionar notas <input type='number' value={n1} onChange={ e => setN1(e.target.value) } />
        </div>
        <div>
          Adicionar notas <input type='number' value={n2} onChange={e => setN2(e.target.value)} />
        </div>
        <div>
          Adicionar notas <input type='number' value={n3} onChange={e => setN3(e.target.value) } />
        </div>

        <div>
          <button onClick={calcular}> Calcular </button>
        </div>
                <div className='resultado'> {media} </div>
                <div className='resultado'> {situacao} </div>
            
        </div>  
        <Link className='voltar' to='/home'> Voltar para Menu </Link>
      </div>
  )

}

