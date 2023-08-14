import { Link } from 'react-router-dom';
import './app2.scss';
import Cabecalho from '../componets/cabecalho/index.js'

export default function ListaTarefa() {
 
  return (
    <div className="pagina-lista-tarefa">

     
      
      <div className='container'>
       
      
        <div>
         <Link className='voltar' to='/lista'> Voltar para Menu </Link>
        </div>
        <div>
         <Link className='voltar' to='/media'> Voltar para media </Link>
        </div>
        <div>
         <Link className='voltar' to='/home'> Voltar para home </Link>
        </div>
        <div>
         <Link className='voltar' to='/Coreios'> Voltar para Coreios </Link>
        </div>
        <div>
         <Link className='voltar' to='/Jovem'> Voltar para Jovem </Link>
        </div>
        <div>
         <Link className='voltar' to='/sorvete'> Voltar para sorvete </Link>
        </div>
        <div>
         <Link className='voltar' to='/Veiculo'> Voltar para veiculo </Link>
        </div>
        <div>
         <Link className='voltar' to='/Pokemon'> Voltar para Pokemon </Link>
        </div>
        <div>
         <Link className='voltar' to='/Marvel'> Voltar para Marvel </Link>
        </div>
        </div>  
       
          
      </div>
  )

}

