import React from 'react'
import style from './Card.module.css'


const Card = ({movie}) => {
  return (
    <div key={movie.id} className={style.card}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Imagen de pelicula" className={style.card_img}/>
    </div>
  )
}

export default Card