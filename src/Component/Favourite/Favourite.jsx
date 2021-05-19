import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import "../../CSS/Favourite.css";

function Favourite() {
  const { watchlist } = useContext(GlobalContext);
  console.log(watchlist);
  return (
    <div className="favourite-page">
      <div className="container">
        <div className="text-center">
          <h1>Favourite</h1>
        </div>

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

                <MovieCard item={item} key={item.id} type="watchlist" />
              </div>
            ))}
          </div>
        ) : (
          <h2 className=" text-center no-movies">
            No movies in your list! Add some!
          </h2>
        )}
      </div>
    </div>
  );
}

export default Favourite;
