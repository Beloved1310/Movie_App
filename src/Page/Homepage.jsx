import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Homepagee from '../Component/Homepage/Homepagee'
import Home from '../Component/Homepage/Home'


import Realeases from '../Component/NewReales/Realeases';
import Movie from '../Component/MovieList/Movie';
import Upcoming from '../Component/MovieList/Upcoming';
import Nowplaying from '../Component/MovieList/Nowplaying';
import Oneimage from '../Component/OneImage/Oneimage';
import MovieList from '../Component/MovieList/MovieList';
import Footer from '../Component/Footer/Footer';
import SearchBox from '../Component/Footer/SearchBox';



const img1 = "https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg";
const img2 = "https://image.tmdb.org/t/p/original/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg";
const img3 = "https://image.tmdb.org/t/p/original/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg";
const title = "Mortal Kombat";
const title2 = "Godzilla vs. Kong";
const title3 = "Vanquish";
const text = `Washed-up MMA fighter Cole Young, unaware of his 
heritage, and hunted by Emperor Shang Tsung's best
 warrior, Sub-Zero, seeks out and trains with Earth's
  greatest champions as he prepares to stand against
   the enemies of Outworld in a high stakes battle for 
   the universe.`;

  


function Homepage() {
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


        <div>
            <div>
          {items.map(item => (
              <div className = "row">
                  <div className = "column">

                
                </div>
                </div>
          ))}
        </div>


            {/* <Homepagee/> */}
            <Home img1={img1} img2={img2} img3={img3} title={title} title2={title2} title3= {title3}text={text}/>

            
            <div className='container-fluid '>
            <div className = 'row'>
            
            
            </div>
            </div>
            <MovieList/>
            <Oneimage/>
           <Realeases/>
           
           <Footer/>
        </div>
    );
}

export default Homepage;
