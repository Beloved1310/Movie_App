import React from "react";
import  { useState } from "react";
import  { useEffect } from "react"
import "../../CSS/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "./Rating";
import Tag from "./Tag";
import * as ReactBootStrap from 'react-bootstrap'

import { Link } from "react-router-dom";
import { MOVIE_URL } from "../Constant";

function Homie() {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.themoviedb.org/3/movie/460465?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1`
    );
    const item = await fetchItem.json();
    setItem(item);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchItem2();
  }, []);

  const [item2, setItem2] = useState({});

  const fetchItem2 = async () => {
    const fetchItem2 = await fetch(
      `https://api.themoviedb.org/3/movie/399566?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1`
    );
    const item2 = await fetchItem2.json();
    setItem2(item2);
  };

  useEffect(() => {
    fetchItem3();
  }, []);

  const [item3, setItem3] = useState({});

  const fetchItem3 = async () => {
    const fetchItem3 = await fetch(
      `https://api.themoviedb.org/3/movie/804435?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1`
    );
    const item3 = await fetchItem3.json();
    setItem3(item3);
  };

  const [isLoading, setIsLoading] = useState(true);
  

  if (isLoading){
    return <ReactBootStrap.Spinner animation="border" />
  }
  
  return (
    <div className=".container-fluid">
      <div></div>

      <article className="movie">
        <div className="container-">
          <div className="row">
            <div className="col-md-6 col-sm-12 img1">
              <img
                className="profile-image"
                key={item.id}
                src={`${MOVIE_URL}${
                  item.backdrop_path
                }`}
                alt="movie"
                style={{ width: "106%", height: 900 }}
              />

              <div className="heading">
                <button className="tagbutton">{item.vote_average}</button>
                <h2>{item.original_title}</h2>
                <span>
                  <ul className="nav-links">
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <Tag />
                    </li>
                    <li>
                      <i className="fas fa-clock"></i>
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
            <div className="col-md-6 col-sm-12 ">
              <section>
                <img
                  className="profile-image"
                  key={item2.id}
                  src={`${MOVIE_URL}${
                    item2.backdrop_path
                  }`}
                  alt="movie"
                  style={{ width: "106%", height: 450 }}
                />

                <div className="row heading2">
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xx-12">
                    <button className="tagbutton">{item2.vote_average}</button>
                    <h1>{item2.original_title}</h1>
                    <span>
                      <ul className="image-icon">
                        <li>
                          <Rating />
                        </li>
                        <li>
                          <Tag />
                        </li>
                        <li>
                          <i className="fas fa-clock"></i>
                          <span className="homereleasedate">
                            {item2.release_date}
                          </span>{" "}
                        </li>
                      </ul>
                    </span>
                    <Link to={`/home/${item2.id}`}>
                      {" "}
                      <button className="button">Read More</button>{" "}
                    </Link>
                  </div>
                </div>
              </section>
              <section>
                <img
                  className="profile-image"
                  key={item3.id}
                  src={`${MOVIE_URL}${
                    item3.backdrop_path
                  }`}
                  alt="movie"
                  style={{ width: "106%", height: 450 }}
                />
                <div className="row heading2">
                  <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xx-12">
                    <button className="tagbutton">{item3.vote_average}</button>
                    <h1>{item3.original_title}</h1>
                    <span>
                      <ul className="image-icon">
                        <li>
                          <Rating />
                        </li>
                        <li>
                          <Tag />
                        </li>
                        <li>
                          <i className="fas fa-clock"></i>
                          <span className="homereleasedate">
                            {item3.release_date}
                          </span>{" "}
                        </li>
                      </ul>
                    </span>
                    <Link to={`/home/${item3.id}`}>
                      {" "}
                      <button className="button">Read More</button>{" "}
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Homie;
