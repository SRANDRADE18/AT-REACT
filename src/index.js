import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Asa from './home/app2';
import Aluno from './aluno/App'
import Media from './media/app3'
import Alua from './aula/index'
import Coreios from './coreios/coreios';
import Jovem from './jovem/jovem'
import Sorvete from './sorvete/sorvete'
import Veiculo from './veiculo/veiculo';
import Pokemon from './pokemon/pokemon';
import Marvel from './Marvel/marvel'
import { BrowserRouter,Routes,Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

    <Routes>
    <Route path='/home' element={<Asa/>}/>
    <Route path='/media' element={<Media/>}/>
    <Route path='/lista' element={<Aluno/>}/>
    <Route path='/alua' element={<Alua/>}/>
    <Route path='/Coreios' element={<Coreios/>}/>
    <Route path='/Jovem' element={<Jovem/>}/>
    <Route path='/Sorvete' element={<Sorvete/>}/>
    <Route path='/Veiculo' element={<Veiculo/>}/>
    <Route path='/pokemon' element={<Pokemon/>}/>
    <Route path='/marvel' element={<Marvel/>}/>
    </Routes>

    </BrowserRouter>
  </React.StrictMode>
);


