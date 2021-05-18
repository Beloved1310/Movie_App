import React, { useState } from 'react';
import Movie from './Movie';
import Nowplaying from './Nowplaying';
import Upcoming from './Upcoming';
import '../../CSS/MovieHeading.css'

function MovieHeading() {
    const [active, setActive] = useState("FirstCard");

    return (
        <div>
         
          <div className="d-flex justify-content-center align-items-center" >
            <h1> Hightlights Today</h1>
           
            </div>
           
            <div className="d-flex justify-content-center align-items-center" >
            <h4>Be sure not to miss these reveiws today</h4>
            </div>
        <nav>
            <div className = "buttonheading">
        <div className="d-flex justify-content-end ">
            <button className = "buttonheading1" onClick={()=> setActive("FirstCard")}>Popular</button>
            <button className = "buttonheading2" onClick={()=> setActive("SecondCard")}>Upcoming</button>
            <button className = "buttonheading3" onClick={()=> setActive("ThirdCard")}>Now playing</button>
            </div>
            </div>
            </nav>
                <div>
            {active === "FirstCard" &&  <Movie/>}
            {active === "SecondCard" && <Upcoming/>}
            {active === "ThirdCard" && <Nowplaying />}
            </div>
        </div>
    )
}

export default MovieHeading
