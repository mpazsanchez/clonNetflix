import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from '../Header/Header.module.css'
import image from '../../Assets/Images/imagenprueba8.jpg'


const Header = () => {
  return (
    <div className={style.header_container}>
      <img src={image} alt='imagen' className={style.image_background}/>

      <Navbar />
    </div>
  )
}

export default Header