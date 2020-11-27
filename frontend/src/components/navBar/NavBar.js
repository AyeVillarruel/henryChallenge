import React from 'react'
import style from './navbar.module.css';
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core';

function NavBar(){
    return (
        <div className={style.top}>
            <div className={style.NavBarButtons}>
                    <div className={style.LogoConteiner}>
                     <Link to="/"> <p> HOLMES</p> </Link>
                    </div>
                <div>
                    <Link to='/'>
                        <Button className={style.indexHomeButton} aria-controls="simple-menu" aria-haspopup="true">
                            HOME
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link to='/nosotros'>
                        <Button className={style.indexAboutButton} aria-controls="simple-menu" aria-haspopup="true" >
                            ABOUT
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link to='/home'>
                        <Button className={style.indexContactButton} aria-controls="simple-menu" aria-haspopup="true">
                            CATÁLOGO
                        </Button>
                    </Link>
                </div>
               
                <div>
                    <Link to='/contacto'>
                        <Button className={style.indexContactButton} aria-controls="simple-menu" aria-haspopup="true">
                            CONTACTO
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )

}
export default NavBar;