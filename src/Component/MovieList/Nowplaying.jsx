import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../CSS/MovieList.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nowplaying() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(5);
  const fetchItems = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1"
    );
    const items = await data.json();
    console.log(items.results);
    setItems(items.results);
  };
  const loadMore = () =>{
    setVisible(visible + 5)
  }
  return (
    <div>

        <div className = "movie-container">
        {items.slice(0,visible).map((item)=> (
            <div className='image-container d-flex justify-content-start m-3'>
          <Link to={`/home/${item.id}`}>
            {" "}
            <img
              key={item.id}
              src={`${"https://image.tmdb.org/t/p/original"}${
                item.backdrop_path
              }`}
              alt="movie"
            ></img>
          </Link>
          </div>
        ))}
         <div className = "container load">
        {visible < items.length &&(
          <button className= "load-btn"onClick = {loadMore}>SHOW MORE<i class="fas fa-arrow-right"></i> </button>
        )}
      </div>
      </div>
    </div>
  );
}

export default Nowplaying;
