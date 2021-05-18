import React from "react";
import "../../CSS/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from 'react-bootstrap';

function Homepagee() {
  
  return (
    <section className="homepage">
      <Movie />
      <Movie2/>
    </section>
  );
}
const img1 = "https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg";
const img2 = "https://image.tmdb.org/t/p/original/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg";
const img3 = "https://image.tmdb.org/t/p/original/mYM8x2Atv4MaLulaV0KVJWI1Djv.jpg";
const title = "Mortal Kombat";
const text = `Washed-up MMA fighter Cole Young, unaware of his 
heritage, and hunted by Emperor Shang Tsung's best
 warrior, Sub-Zero, seeks out and trains with Earth's
  greatest champions as he prepares to stand against
   the enemies of Outworld in a high stakes battle for 
   the universe.`;
const Movie = () => {
  return (
    <article className="movie">
      <div className="container-">
        <div className="row">
            <div className = "col-md-6 col-sm-12 img1">
            
            <img className='profile-image' alt='icon' src={img1}  style={{ width: '106%', height: 900 }} />
           <div className = "heading">
             <button className="tagbutton">7.3</button>
           <h2>{title}</h2>

           <span>
             <ul className = "nav-links">

               <li></li>
               <li></li>
             </ul>

        </span>

           <div className = "col-8">
           <p className= "heading-text">{text}</p>
           <button className = "button">Read More</button>
           </div>
           </div>
           
            </div>
            <div className = "col-md-6 col-sm-12 ">
            <section>
            <img className='profile-image' alt='icon' src={img2}  style={{ width: '106%', height: 433 }} />
            <div className="row heading2">
            <div className = "col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xx-12">
            <button className="tagbutton">7.3</button>
            <h1>{title2}</h1>
            <button className= "button">Read More</button> 
            </div>
            </div>
            
            </section>
            <section>
            <img className='profile-image' alt='icon' src={img3}  style={{ width: '106%', height: 433 }} />
            <div className="row heading2">
            <div className = "col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xx-12">
            <button className="tagbutton">7.3</button>
            <h1>{title2}</h1>
            <button className= "button">Read More</button> 
            </div>
            </div>
           </section>
            </div>
            
          
        </div>
      </div>
    </article>
  );
};

const title2 = "Godzilla vs. Kong";


const Movie2 = () => {
    return (
      <Jumbotron>
      <article className="movie2">
        <div className="container">
          <div className="row justify-content-end">
              <div className = "col-md-6 col-sm-12" >
              {/* <img className='profile-image' alt='icon' src={img2}  style={{ width: '140%', height: 700 }} /> */}
            {/* <h1>{title2}</h1> */}
        
            {/* <button>Read More</button> */}
            </div>
          </div>
        </div>
      </article>
      </Jumbotron>
    );
  };
export default Homepagee;
