import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import LoadingGif from './Ball-1s-200px.gif'

function Loading(){
    const loading = useSelector(store => store.productosRoot.loading)
    if(!loading) return null;
    return(
        <div>
            <div>
                <img  src={LoadingGif}/>
            </div>
        </div>

    )
}

export default Loading;