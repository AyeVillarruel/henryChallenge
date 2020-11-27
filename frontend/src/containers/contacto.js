import React from 'react';
import style from '../components/styles/contacto.module.css'
import NavBar from '../components/navBar/NavBar'

function Contacto (){
    return (
        <div className={style.div}>
            <NavBar/>
            <form className={style.formulario}>
                <h2 className={style.titulo}>CONTACTO</h2>
                <input className={style.inputuno} type="text" name="Nombre" placeholder="Nombre" /> 
                <input className={style.inputdos}  type="text" name="Email" placeholder="Email" /> 
                <input className={style.inputtres}  type="text" name="telefono" placeholder="Numero de telefono" /> 
                <textarea className={style.textarea}name="mensaje" placeholder="escribi aca tu mensaje"  ></textarea>
                <input className={style.boton} type="button" value="ENVIAR" id="boton" />
            </form>
        </div>

    )

}
export default Contacto