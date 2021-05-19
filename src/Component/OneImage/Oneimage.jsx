import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "../../Component/Homepage/Rating";
import Tag from "../../Component/Homepage/Tag";
import { Link } from "react-router-dom";
import "../../CSS/Oneimage.css";

function Oneimage() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.themoviedb.org/3/movie/615457?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };
  return (
    <article className="movie">
      <div className=".container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12 img1">
            <div className="">
              <img
                className="imageone"
                key={item.id}
                src={`${"https://image.tmdb.org/t/p/original"}${
                  item.backdrop_path
                }`}
                alt="movie"
                style={{ height: 1000 }}
              ></img>
            </div>
            <div className="heading">
              <button className="tagbutton">{item.vote_average}</button>
              <h2>{item.original_title}</h2>
              <span>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Rating />
                  </li>
                  <li className="list-inline-item">
                    <Tag />
                  </li>
                  <li>
                    <i class="fas fa-clock"></i>
                    <span className="homereleasedate">
                      {item.release_date}
                    </span>{" "}
                  </li>
                </ul>
              </span>
              <div className="col-8">
                <p className="heading-text">{item.overview}</p>
                <Link to={`/home/${item.id}`}>
                  <button className="button">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Oneimage;
