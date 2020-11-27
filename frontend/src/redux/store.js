import {createStore, combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


import productosReducer from './productosDuck'



const reducer = combineReducers({
    productosRoot:productosReducer
    
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;





export default function generateStore(){
    
    const store= createStore(reducer,composeEnhancers(applyMiddleware(thunk)))
    return store
};

