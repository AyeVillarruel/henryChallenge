import React from 'react'
import style from '../components/styles/inicio.module.css'
import Nav from '../components/navBar/NavBar'
import {Link} from 'react-router-dom'


function Inicio(){
    return(
        <div  className={style.container}>
            <Nav/>
         
        <div className={style.info}>
            <h5><b>HOLMES</b></h5>
            <p className={`${style.animate__animated} ${style.animate__backInDown}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt .
              Ut enim ad minim veniam, laboris nisi ut 
              aliquip ex ea commodo consequat. n voluptate.
               Excepteur sint occaecat sunt in culpa qui officia ."</p>
            <Link to="/home"><button>Entrar</button> </Link>
        </div> 
        </div>
        

    )
}
export default Inicio