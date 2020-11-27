import React from 'react'
import style from '../styles/card.module.css'



 function Card ({ img, title, price, coin,  stock,condition}){

    return(
      <div className={style.producto}> 
      <img src={img}/>
      
      <div className={style.informacion}>
         <div>
         <span className={style.stock}>{stock} articulos en Stock</span>
      </div>
          <span className={style.precio}>  ${price} {coin}</span>
          <span className={style.condicion}>{condition}</span>
          <span className={style.titulo}>{title}</span>
         
      </div>
      
     
    
    
      </div>
      
      
         
          
            
            
            
            

      
        
    )
}
export default Card