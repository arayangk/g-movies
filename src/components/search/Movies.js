import React from "react";
import Movie from "./Movie";


const Movies = ({ list, setDisplay, setSearch }) => {
  let cards = ''

  if (list) {

    cards = list.map((m, i) => <Movie key={i} item={m} setdisplay={setDisplay} setsearch={setSearch} />);
  }

  return (
    
      <div>{cards}</div>
    
  );
};

export default Movies;
