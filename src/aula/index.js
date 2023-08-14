import './index.scss'

import Cabecalho from '../componets/cabecalho/index'
import Aluno from '../jovem/jovem'

export default function Secoes() {

  return (
    <section className='pagina-secoes'>
      <Cabecalho />

      <main>
        <h1> Aula - Componentes </h1>

        <div className='lista-alunos'>

          <Aluno tema="dark" nome="Bruno" curso="Técnico em Informática" num={8} conhecimentos={['HTML', 'CSS']} />
          <Aluno tema="light" nome="Helen" curso="Técnico em Informática" num={14} conhecimentos={['HTML', 'CSS', 'JS']} />
          <Aluno tema="dark" nome="Joana" curso="Técnico em CV" num={16} conhecimentos={['FIGMA', 'UI', 'UX']} />
          <Aluno tema="light" nome="Luiz" curso="Técnico em ADM" num={20} conhecimentos={['RH', 'Financeiro']} />
          
        </div>

      </main>
      

    </section>
  )
}