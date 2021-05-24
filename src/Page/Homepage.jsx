
import "bootstrap/dist/css/bootstrap.min.css";

import Realeases from "../Component/NewReales/Realeases";

import Oneimage from "../Component/OneImage/Oneimage";
import MovieList from "../Component/MovieList/MovieList";
import Footer from "../Component/Footer/Footer";

import Homie from "../Component/Homepage/Homie";

function Homepage() {
  
  
  return (
    <div>
      <Homie />
      <MovieList />
      <Oneimage />
      <Realeases />

      <Footer />
    </div>
  );
}

export default Homepage;
