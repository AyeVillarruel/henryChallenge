import React,{useEffect, useState} from 'react'
import Card from '../card/Card'
import {useSelector, useDispatch} from 'react-redux'
import { Grid } from '@material-ui/core';
import {anterioresProductosAccion, siguientesProductosAccion, ordenarAccion} from '../../redux/productosDuck'
import style from '../styles/catalogo.module.css'
 const Catalogo = () =>{
     const dispatch = useDispatch()
     
    const productos = useSelector(store => store.productosRoot.productos)
    const condicion = useSelector(store => store.productosRoot.condicion)
    const orden = useSelector(store => store.productosRoot.orden)

    const [filtrado,setFiltrado] = useState([])
    const[misProductos, setMisProductos]=useState([])
    
    const queFiltro = (filtro)=> {
       
       
        if(!filtro){
           
            setFiltrado(productos)
        }else{
            let nuevo = productos.filter(producto => producto.condition == filtro)
            setFiltrado(nuevo)  
        }
    }

    const menorAMayorPrecio = ()=> {

      productos.sort((a,b) => a.price - b.price)
        

       dispatch(ordenarAccion(productos)) 
         
        
    }
    const mayorAMenorPrecio = ()=> {

     productos.sort((a,b) => b.price - a.price)
            console.log(productos)
          dispatch(ordenarAccion(productos)) 
          
        
    }

    const misNuevosProductos=(prod)=>{
        setMisProductos(prod)
            return productos
    }
 
 

    useEffect(()=>{
        /* setFiltrado(productos) */
        queFiltro(condicion)
        misNuevosProductos(productos)
       
     

    },[condicion,productos])

    const vacio= (!condicion)
    const desordenado=(!misProductos)

    console.log('este es el que quiero',productos)
    return(

        <div className={style.principal}>
            <Grid container spacing={9} justify='center' > 
            { 
            vacio? misProductos.map(producto=>{
                return(
                
                    <Card
                    id={producto.id}
                    img={producto.thumbnail}
                    title={producto.title}
                    price={producto.price}
                    coin={producto.currency_id}
                    condition={producto.condition}
                    stock={producto.available_quantity}
                    />
                )

            }):
             

            
               filtrado.map(producto=>{
                   
                    return (
                          <Card
               id={producto.id}
               img={producto.thumbnail}
               title={producto.title}
               price={producto.price}
               coin={producto.currency_id}
               condition={producto.condition}
               stock={producto.available_quantity}
               />
                    )
                })
               
            }
            <div className={style.paginar}>
                <button className={style.anterior} onClick={() => dispatch(anterioresProductosAccion())}>anterior</button>
                <button className={style.siguiente} onClick={() => dispatch(siguientesProductosAccion())}>Siguiente</button>
            </div> 
            
           <div className={style.ordenar}>
                 <button  className={style.menor} onClick={() => menorAMayorPrecio()}>menor precio</button>
                 <button className={style.mayor} onClick={() => mayorAMenorPrecio()}>mayor precio</button>
            </div> 
            

        </Grid>

        </div>
    )

   

    } 
   
 
export default Catalogo