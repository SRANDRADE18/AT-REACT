import './marvel.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import marevel from './image 14.png'
import MM from './Rectangle 68.png'
import axios from 'axios';

export default function Marvel(){

    const[heroi,setHeroi] = useState('Nome do personagem')
    const[hero,setHero] = useState([])

    async function buscarHero(){
        let url='';

        if(heroi == '' || heroi == 'Nome do Personagem'){
            url='https://gateway.marvel.com/v1/public/characters?apikey=4e4a4011925b8c2d2d62815f41616eef&ts=1&hash=77164d0ddd543eb7d8161f99785e79a1'
        }
        else if (heroi != ''){
            url='https://gateway.marvel.com/v1/public/characters?apikey=4e4a4011925b8c2d2d62815f41616eef&ts=1&hash=77164d0ddd543eb7d8161f99785e79a1'
        }
        let a = await axios.get(url)

        setHero(a.data.data.results)
    }

    const[cont,setCont]=useState(0)
 
    async function Proximo (){
        let url='';

        if(heroi == '' || heroi == 'Nome do Personagem'){
            url='https://gateway.marvel.com/v1/public/characters?apikey=4e4a4011925b8c2d2d62815f41616eef&ts=1&hash=77164d0ddd543eb7d8161f99785e79a1'
        }
        else if (heroi != ''){
            url='https://gateway.marvel.com/v1/public/characters?apikey=4e4a4011925b8c2d2d62815f41616eef&ts=1&hash=77164d0ddd543eb7d8161f99785e79a1'
        }
        let a = await axios.get(url)

        setHero(a.data.data.results)
    }
   
    return (
        <div className='marevel-Pagina'>

            <header>
            <img src={marevel}/>

            <div className='Menu-lista'>
                <p>home</p>
                <p>Personagem</p>
                <p>Quadrinhos</p>
                <p>Eventos</p>
                <p>Contato</p>
                <img src={MM}/>
            </div>

            </header>
            
            <section>
                <p>Personagens da MARVEL</p>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada. Pellentesque est eros, aliquam non malesuada et, molestie ut purus.</h1>

                <input type='text' value={heroi} onChange={e=> setHeroi(e.target.value)}></input>
                <button onClick={buscarHero}>hero</button>
            </section>

            <div className='Cards'>
                {hero.map(item=>
                    <img src={item.thumbnail.path + '.' + item.thumbnail.extension}/>
                    
                
                    )}
            </div>
            
        </div>
      )
    


}