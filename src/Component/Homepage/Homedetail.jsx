import React from "react";
import  { useState } from "react";
import  { useEffect } from "react"
import { GlobalContext } from "../../Component/context/GlobalState";
import { useContext } from "react";
import "../../CSS/Homedetail.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Tag from "./Tag";
import Clock from "./Clock";

import Footer from "../Footer/Footer";
import { MOVIE_URL } from "../Constant";

function Homedetail({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
  console.log(watchlist);
  let storedMovie = watchlist.find((o) => o.id === match.id);
  

  const watchlistDisabled = storedMovie ? true : false;

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1`
    );
    const item = await fetchItem.json();
    setItem(item);
    
  };

  return (
    <section className="detailmovie">
      <div className=".container-fluid">
        <div className="col-md-6 col-sm-12 detailimg1">
          <img
            className="img-responsive detailimg"
            key={item.id}
            src={`${MOVIE_URL}${
              item.backdrop_path
            }`}
            alt="movie"
            style={{ width: "207%", height: 700 }}
          ></img>

          <div className="row ">
            <div className="col-lg-6 col-sm">
              <div className="detailprofile-image">
                <button className="detailtagbutton">{item.vote_average}</button>
                <img
                  className="picture img-fluid"
                  src={`${MOVIE_URL}${
                    item.backdrop_path
                  }`}
                  alt="movie"
                ></img>
              </div>
            </div>
            <div className="col-lg-6 col-sm">
              <div className=" fitpage ">
                <h1 className="title_original">{item.original_title}</h1>
               
                <div className="col-8">
                  <div className="detailnav-links">
                    <div>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <Clock />
                    <p className="release_date">{item.release_date}</p>
                    <Tag />
                    <p className="release_date">{item.genre_ids}</p>
                    <div
                      disabled={watchlistDisabled}
                      onClick={() => addMovieToWatchlist(item)}
                    >
                      <i className="fa fa-heart redlove" aria-hidden="true">
                        add to favourite
                      </i>
                    </div>
                    <i className="fa fa-clock-o fa_custom"></i>
                  </div>
                  <div>
                    <p className="detailheading-text">{item.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Homedetail;
