import './jovem.scss';


export default function Aluno(props) {
  
  return (
    <div className='comp-aluno'>
      <main className={props.tema}>
        <h1> {props.num} {props.nome} </h1>
        <b> Curso: </b> {props.curso}
        <div>
          <b> Conhecimentos:</b>
          <ul>
            {props.conhecimentos.map(item => <li> {item} </li>)}
          </ul>
          </div>
      </main>
    </div>
  )
}