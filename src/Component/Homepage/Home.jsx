import React from "react";
import "../../CSS/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rating from "./Rating";
import Tag from "./Tag";
import Clock from "./Clock";


function Home({ title, title2, title3, img1, img2, img3, text }) {
  
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
              <li><Rating/>
              </li>
               <li><Tag/></li>
               <li><Clock/></li>
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
            <img className='profile-image' alt='icon' src={img2}  style={{ width: '106%', height: 450 }} />
            <div className="row heading2">
            <div className = "col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xx-12">
            <button className="tagbutton">7.3</button>
            <h1>{title2}</h1>
            <span>
             <ul className = "image-icon">
              <li><Rating/>
              </li>
               <li><Tag/></li>
               <li><Clock/></li>
             </ul>

        </span>
            <button className= "button">Read More</button> 
            </div>
            </div>
            
            </section>
            <section>
            <img className='profile-image' alt='icon' src={img3}  style={{ width: '106%', height: 450 }} />
            <div className="row heading2">
            <div className = "col-xl-2 col-lg-3 col-md-6 col-sm-6 col-xx-12">
            <button className="tagbutton">7.3</button>
            <h1>{title3}</h1>
            <span>
             <ul className = "image-icon">
              <li><Rating/>
              </li>
               <li><Tag/></li>
               <li><Clock/></li>
             </ul>

        </span>
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




export default Home;
