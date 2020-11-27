import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {traerProductosAccion} from '../../redux/productosDuck'
import SearchIcon from '@material-ui/icons/Search';
import style from '../styles/search.module.css'

function Search (props) {


    const [search, setSearch]=useState('')
    const dispatch = useDispatch()

    return(
        <div className={style.contendor}>
            <input  className={style.input}type="text" placeholder='¿Qué estás buscando?' onChange={e => setSearch(e.target.value)} onKeyUp={e=>{if(e.key==="Enter"){dispatch(traerProductosAccion(search))}}}  />
            <button className={style.boton} onClick={()=>{dispatch(traerProductosAccion(search))}} >
                <SearchIcon/>
            </button>
        </div>
    )

}

export default Search;