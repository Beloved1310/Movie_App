import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function Favourite() {
 const {watchlist} = useContext(GlobalContext);
 console.log(watchlist)
    return (
        <div>
          <h1>Favourite Movies</h1> 
         {watchlist.map((item) =>(
           <h1>{item.id}</h1>
         ))}
        </div>
    )
}

export default Favourite
