import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import "../../CSS/Favourite.css";

function Favourite() {
  const { watchlist } = useContext(GlobalContext);
  console.log(watchlist);
  return (
    <div className="favouritepage">
      <div className="container">
        <div className="text-center">
        <h1 class="text-white bg-dark">Favourite</h1>
         
        </div>
        <div class="text-center">
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((item) => (
              <div className="">
                <div className="">
                  <img
                    className="img-fluid"
                    key={item.id}
                    src={`${"https://image.tmdb.org/t/p/original"}${
                      item.backdrop_path
                    }`}
                    alt="movie"
                    style={{ width: "40%" }}
                  />
                </div>
                <h3 className= "text-white  p-4 m-0">{item.original_title}</h3>
                <MovieCard item={item} key={item.id} type="watchlist" />
              </div>
            ))}
            
          </div>
        ) : (
          
          <h2 className=" text-center text-white bg-dark">
            No movies in your list! Add some!
          </h2>
        )}
        </div>
      </div>
    </div>
  );
}

export default Favourite;
