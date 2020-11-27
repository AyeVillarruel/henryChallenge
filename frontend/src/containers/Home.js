import React from 'react'

import  Catalogo  from '../components/catalogo/catalogo'
import Search from '../components/search/Search'
import Filtro from '../components/filter/filter'
import NavBar from '../components/navBar/NavBar'
import style from '../components/styles/home.module.css'



function Home (){
    return(
        <div className={style.container}>
            <div  className={style.navContainer}>
                <div>
                    <NavBar/>
                </div>
                <div className={style.searchContainer}>
                    <div className={style.search}>
                    <Search/>     
                    </div>
                   
               
                <div className={style.filtro}>
                  <Filtro/>  
                </div>
                 </div>
                
            </div>
            <Catalogo/>
        </div>

        
    )
}

export default Home