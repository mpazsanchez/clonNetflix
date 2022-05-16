import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../../Assets/Images/logo1.png'


const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
        <img src={Logo} alt="logo" className={styles.logo} />

        <ul className={styles.navbar_list}>
            <li className={styles.navbar_list_item}>Inicio</li>
            <li className={styles.navbar_list_item}>Series</li>
            <li className={styles.navbar_list_item}>Peliculas</li>
            <li className={styles.navbar_list_item}>Mi lista</li>
        </ul>
    </div>
  )
}


export default Navbar