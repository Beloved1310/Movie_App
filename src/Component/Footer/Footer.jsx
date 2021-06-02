import React, { useState, useEffect } from "react";
import "../../CSS/Footer.css";
import SearchBox from "./SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Footer() {
  
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=b187ef6c8cea760c0da207949305edb9&language=en-US&page=1"
    );
    const items = await data.json();
    setItems(items.results);
  };
  return (
    <div className="footerimage">
      <div className="container-fluid">
        <div className="text-center lookingfor">
          <p className = "footerStyle">
            Looking for something else? Search our reviews:
          </p>
        </div>
        <div className="d-flex align-items-center ">
          <div className="searchelement">
            <SearchBox movies={items} />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="connect ">
            <div className="text-center">
              <h3>Connect Us</h3>
              <ul className="flex-container">
                <Link
                  to={{ pathname: "https://github.com/Beloved1310/" }}
                  target="_blank"
                >
                  <li className="flex-item">
                    {" "}
                    <i className="fab fa-github"></i>
                  </li>
                </Link>
                <Link
                  to={{
                    pathname: "https://www.linkedin.com/in/adefisayo-adejumo/",
                  }}
                  target="_blank"
                >
                  <li className="flex-item">
                    {" "}
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </Link>
                <Link
                  to={{ pathname: "https://twitter.com/deoluwafisayomi" }}
                  target="_blank"
                >
                  <li className="flex-item">
                    <i className="fab fa-twitter"></i>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;