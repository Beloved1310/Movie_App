import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ type, item }) => {
  const { removeMovieFromWatchlist } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(item.id)}
            style={{
              width: "10%",
              height: 30,
              backgroundColor: "grey",
              borderRadius: "3px",
            }}
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </>
      )}
    </div>
  );
};
