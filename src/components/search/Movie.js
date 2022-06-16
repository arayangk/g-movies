import React from "react";
import { truncStr } from "./utils";
import { Link, } from "react-router-dom";
import moment from 'moment';

const MovieCard = props => {
  const { title, poster_path, vote_average, release_date, id } = props.item;
  

  return (
    <>
      <div onClick={()=>props.setdisplay(false)}>
        
<ul >
    <li>
    <Link to={`/movie/${id}`}
        className="clearfix"
      >
        <div className="poster">
          <img src={`http://image.tmdb.org/t/p/w185${poster_path}`} alt={truncStr(title, 19)} />
        </div>
        <div className="title">
        {truncStr(title, 19)}<span className="release">| {moment(release_date).format('DD MMM, YYYY')}</span>
        </div>
        <div className="imdb">
          <span className="fas fa-star" /> {vote_average}
        </div>
      </Link>
    </li>
    </ul>
    </div>
    </>
    
    
  );
};

export default MovieCard;
