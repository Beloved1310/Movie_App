import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ item, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <MovieControls type={type} item={item} />
    </div>
  );
};
