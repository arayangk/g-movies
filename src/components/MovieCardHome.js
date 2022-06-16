import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Link, } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "react-js-loader";
import { FreeMode } from "swiper";
import "swiper/css/free-mode";



// Import Swiper styles
import "swiper/css";
import { Breakpoints } from './Breakpoints';

const Card = ({value}) => {
  

  return(
    <div id="">
<div className="owl-item" style={{width: '160px'}}>
  <article id="post-25309" className="item movies">
    <div className="poster">
      <img src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt={value.title} />
      <div className="rating"><span className="fas fa-star" /> {value.vote_average}</div>
      <div className="mepo"> <span className="quality">{value.original_language}</span></div>
      <Link to={`/movie/${value.id}`}>
        <div className="see play4" />
      </Link>
    </div>
    <div className="data">
      <h3><a href="https://demo.ews.pe/dooplay/movies/the-bad-guys/">{value.title}</a></h3>
      <span>{moment(value.release_date).format('DD MMM, YYYY')}</span>
    </div>
  </article>
  </div>
  </div>
  )
}

const MovieCardHome = ({baseUrl, type, api_key}) => {


    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    

    useEffect(() => {
      setLoading(true)
      axios.get(`${baseUrl}${type}?api_key=${api_key}&page=1`)
           .then((res)=>{
               setMovie(res.data.results)
               setLoading(false);
           })
           .catch((err)=>{
               console.log(err)
           })
    }, [baseUrl])
    

  
    

    return(<>
        <div id="genre_action" className="list_genres items owl-carousel owl-theme" style={{opacity: 1, display: 'block'}}>
  <div className="owl-wrapper-outer">
    {loading ? <div className="item">
                <Loader type="spinner-default" bgColor={"#8c53b5"} color={'#8c53b5'} size={100} />
            </div>: <Swiper
        slidesPerView={9}
        spaceBetween={30}
        breakpoints={Breakpoints}
        freeMode={true}
        
        modules={[FreeMode]}
        className="mySwiper"
      >

        {movie.map((value, index) => (
              <SwiperSlide key={index}>
                <Card value={value} />
              </SwiperSlide>
            ))}
          </Swiper>}
  
  
        
  </div>
</div> 
        

</>)
};

export default MovieCardHome;