import axios from 'axios'
import {setLocalStorage, readLocalStorage} from '../utils/setLocalStorage'


// constantes (estado)

const dataInicial = {
    productos : [ ],
    condicion: "",
    offset: 0,
    palabra:'',
    
}


// types

const OBTENER_PRODUCTOS = 'OBTENER_PRODUCTOS'
const FILTRAR_PRODUCTOS = 'FILTRAR_PRODUCTOS'
const ORDENAR_PRECIO = 'ORDENAR_PRECIO'
const SIGUIENTES_PRODUCTOS = 'SIGUIENTES_PRODUCTOS'
const ANTERIORES_PRODUCTOS = 'ANTERIORES_PRODUCTOS'
const MOSTRAR_LOADING = 'MOSTRAR_LOADING'
const ESCONDER_LOADING = 'ESCONDER_LOADING'

//Reducer 

export default function productosReducer (state = dataInicial, action){
    switch(action.type){
        case OBTENER_PRODUCTOS:
            return {...state, productos:action.payload.productos, palabra:action.payload.palabra}

        case FILTRAR_PRODUCTOS:

            return {...state, condicion:action.payload}

        case ORDENAR_PRECIO:

            return {...state, productos:action.payload}

        case SIGUIENTES_PRODUCTOS:
            return {...state, productos:action.payload.productos, offset:action.payload.offset}

        case ANTERIORES_PRODUCTOS:
            return{...state, productos:action.payload.productos, offset:action.payload.offset}
        

        case MOSTRAR_LOADING:
            return{...state, loading:true}

        case ESCONDER_LOADING:
            return{...state, loading: false}

        case 'TRAER_PRODUCTOS_REDUX':
            return{...state}

            
        default:
            return state
    }
}

//acciones 
export const traerProductosAccion = (text) => async(dispatch,getState)=>{
    const offset=getState().productosRoot.offset
    console.log('holaaa', text)
    
    try{
        
        let respuestaRed= readLocalStorage(text)
        if(respuestaRed){
            dispatch({
                type:OBTENER_PRODUCTOS,
                payload:{
                    productos: respuestaRed,
                    palabra: text,
                   
                }
            })
            
            
        } else {
          
             const res = await axios.get(`http://localhost:4000/api/search/${text}/${offset}`)
          setLocalStorage(text, res.data) 
            dispatch({
            type:OBTENER_PRODUCTOS,
            payload:{
            productos: res.data,
            palabra: text,
           
        
        }  
        }) 
    }
    }catch(error){
        console.log(error)
    }

}


export const filtrarProductosAccion = (filtro) => async(dispatch,getState)=>{
    
    
    try{
        dispatch({
            type:FILTRAR_PRODUCTOS,
            payload:filtro
        })
    }catch(error){
        console.log(error)
    }

}

export const ordenarAccion = (orden) => async(dispatch,getState)=>{
  
    try{
        dispatch({
            type:ORDENAR_PRECIO,
            payload: orden
        })
    }catch(error){
        console.log(error)
    }

}


export const siguientesProductosAccion = () => async (dispatch, getState) => {
    console.log('getstate',getState().productosRoot.offset)
    const offset=getState().productosRoot.offset
    const texto=getState().productosRoot.palabra
    const siguiente = offset + 30
    console.log(siguiente)

    try {
        const res = await axios.get(`http://localhost:4000/api/search/${texto}/${siguiente}`)
        dispatch ({
            type: SIGUIENTES_PRODUCTOS,
            payload: {
                productos: res.data,
                offset: siguiente
            }
        })
    } catch (error) {
        console.log(error)
    }

}
export const anterioresProductosAccion = () => async (dispatch, getState) => {
    console.log('getstate',getState().productosRoot.offset)
    const offset=getState().productosRoot.offset
    const texto=getState().productosRoot.palabra
    const anterior = offset - 30
    console.log(anterior)

    try {
        const res = await axios.get(`http://localhost:4000/api/search/${texto}/${anterior}`)
        dispatch ({
            type: ANTERIORES_PRODUCTOS,
            payload: {
                productos: res.data,
                offset: anterior
            }
        })
    } catch (error) {
        console.log(error)
    }

}

export const mostrarLoading = () => async(dispatch,getState)=>{
    
    try{
        dispatch({
            type: MOSTRAR_LOADING,
            
        })
    }catch(error){
        console.log(error)
    }

}

export const esconderLoading = () => async(dispatch, getState) => {
    try{
        dispatch({
            type: ESCONDER_LOADING,
        })
    } catch(error){
        console.log(error)
    }
}

export const traerProductosRedux = () => async (dispatch) =>{
    try{
        dispatch({
            type:'TRAER_PRODUCTOS_REDUX'
        })

    }catch(error){
        console.log(error)
    }
}
