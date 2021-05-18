import React, { useState, useEffect } from 'react';
import '../../CSS/Footer.css'
import SearchBox from './SearchBox'
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    const navStyle = {
        color: "white"
    }

    
    useEffect(() => {
        fetchItems();
    }, []);
    
    const [items, setItems] = useState([]);
    const fetchItems = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1');
        const items = await data.json();
        setItems(items.results);
    };
    return (
        <div className = "footerimage">
           <div className="d-flex justify-content-center align-items-center " >
               <div className ="lookingfor">
               <p style={navStyle}>Looking for something else?search our reviews:</p>
               </div>
           <div className ="searchelement">
           <SearchBox movies={items}/>
           </div>
             
             <div className="connect">
                    <h3>Connect Us</h3>
                    <ul className="flex-container">
                   <li className = "flex-item"> <i class="fab fa-github"></i></li> 
                   <li className = "flex-item"> <i class="fab fa-linkedin-in"></i></li>
                   <li className = "flex-item"><i class="fab fa-twitter"></i></li>

                    </ul>
             </div>
             
             </div>
        </div>
    )
}

export default Footer
