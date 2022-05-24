import React from 'react'
import { CardGroup } from 'react-bootstrap'
import Card from '../Card/Card'
import style from '../Main/Main.module.css'


const Main = ({movie}) => {
  return (
    <div className={style.main_container}>
        <h4 className={style.subtitle}>Las peliculas mas populares en Argentina hoy</h4>
    </div>
  )
}

export default Main