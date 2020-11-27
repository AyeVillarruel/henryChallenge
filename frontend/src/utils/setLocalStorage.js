
export function setLocalStorage(busqueda, respuesta){
  /*   let resultado = {
        busqueda,
        respuesta
    }
 */
    localStorage.setItem(busqueda,JSON.stringify(respuesta))
}

export function readLocalStorage(texto){
   let respuesta= JSON.parse(localStorage.getItem(texto))
   return respuesta
}