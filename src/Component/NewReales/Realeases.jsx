import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../CSS/Realease.css";
function Realeases() {
  useEffect(() => {
    FetchItems();
  }, []);

  const [movies, setMovies] = useState([]);
  const [visible, setVisible] = useState(4);
  const FetchItems = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1"
    );
    const movies = await data.json();
    console.log(movies.results);
    setMovies(movies.results);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.themoviedb.org/3/movie/632357?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };

  return (
    <div className="allrealeases">
      <div className=".container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="R-container d-flex justify-content-start m-3">
              <Link to={`/home/${item.id}`}>
                <img
                  key={item.id}
                  src={`${"https://image.tmdb.org/t/p/original"}${
                    item.backdrop_path
                  }`}
                  alt="movie"
                ></img>
              </Link>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 ">
            <div className="r">
              {movies.slice(9, 13).map((movie) => (
                <div className="r-header">
                  <Link to={`/home/${movie.id}`}>
                    {" "}
                    <img
                      key={movie.id}
                      src={`${"https://image.tmdb.org/t/p/original"}${
                        movie.backdrop_path
                      }`}
                      alt="movie"
                    ></img>
                  </Link>
                  <div className="r-info">
                    <h3>{movie.original_title}</h3>
                    <button className="rtagbutton">{movie.vote_average}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

 
}

export default Realeases;
