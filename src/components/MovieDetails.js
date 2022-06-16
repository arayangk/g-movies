import { Link, useParams, } from "react-router-dom";
import { Animate } from "react-simple-animate";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import moment from 'moment';
import Border from "./Border";
import MovieCardHome from "./MovieCardHome";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css/free-mode";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Images =  ({value,movieDetails}) => {

  return (
    <div id="index" className="owl-item" style={{ width: "284px" }}>
            <div className="g-item">
              <a
                href={`http://image.tmdb.org/t/p/original${value.file_path}`}
                title={movieDetails.title}
              >
                <img
                  src={`http://image.tmdb.org/t/p/w300${value.file_path}`}
                  alt={movieDetails.title}
                />
              </a>
            </div>
          </div>
  )

}

const MovieDetails = () => {

  
const Breakpoints = {
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 50,
  },

  360: {
    slidesPerView: 1,
    spaceBetween: 50,
  },
  411: {
    slidesPerView: 1.5,
    spaceBetween: 30,
  },
  320: {
    slidesPerView: 1,
    spaceBetween: 50,
  },
  375: {
    slidesPerView: 1,
    spaceBetween: 50,
  },
  414: {
    slidesPerView: 1.5,
    spaceBetween: 30,
  },
};

  const {id} = useParams();
  const api_key ='4bc2cade9fe707e58b1a3664331023cd';
  

  const [movieDetails, setMovieDetails] = useState({})
  const [genre, setGenre] = useState([])
  const [poster, setPoster] = useState([])
  const [trailer, setTrailer] = useState([])
  const [tab, setTab] = useState(false)
  const [cast, setCast] = useState([])
  const casts = cast.slice(0,10)

  
 useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&append_to_response=videos`)
         .then((res)=>{
           setMovieDetails(res.data)
           setGenre(res.data.genres)
           setTrailer(res.data.videos.results[0])
           

         })
         .catch((err) => {
          console.log(err.message);
         })

         axios.get(`
         https://api.themoviedb.org/3/movie/${id}/images?api_key=${api_key}`)
         .then((res)=>{
           
            setPoster(res.data.backdrops)
         })
         .catch((err) => {
          console.log(err.message);
         })

         axios.get(`
         https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
         .then((res)=>{
           
           setCast(res.data.cast)
            
         })
         .catch((err) => {
          console.log(err.message);
         })
  }, [id])

  

  

  
  

    return(
        <>
        <div id="contenedor">
        <div className="module">
        <div className="content left full">

        <Animate play={true} duration={1} delay={0.3} start={{ opacity: 0 }} end={{ opacity: 1 }}><div id="fakeplayer" className="fakeplayer regular">
{trailer==null? <h1>Trailor Not Available for This Movie</h1> :<LiteYouTubeEmbed 
        id={trailer.key}
        title={movieDetails.title}/>}
</div></Animate>




<Animate play={true} duration={1} delay={0.3} start={{ opacity: 0 }} end={{ opacity: 1 }}>
<div className="sheader">
  <div className="poster">
    {" "}
    <img
      itemProp="image"
      src={`http://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
      alt={movieDetails.title}
    />
  </div>
  <div className="data">
    <h1>{movieDetails.title}</h1>
    <div className="extra">
      {" "}
      <span className="tagline">{movieDetails.tagline}</span>
      <span className="date" itemProp="dateCreated">
      {moment(movieDetails.release_date).format('DD MMM, YYYY')}
      </span>
      <span className="country">{movieDetails.original_language}</span>
      <span itemProp="duration" className="runtime">
        {movieDetails.runtime} Min.
      </span>
      
    </div>
    
      <div>
        
        <div
         className="starstruck-wrap"
        >
          <div className="dt_rating_data">
            
            <section className="nope starstruck-rating-wrap" style={{marginLeft: '0px'}}>
              {" "}
              <i className="fas fa-star fa-2x"></i>
            </section>
            
              {" "}
              <span className="dt_rating_vgs">
                {movieDetails.vote_average}
              </span>{" "}
              
            
          
        </div>
      </div>
    </div>
    <div className="sgeneros">

      {genre.map((value, index) => {
        return(
          <div key={index}>
          {" "}
          <Link to={`/movielist/${value.name}/${value.id}/1`} style={{ borderLeft: "solid 1px #eceff5", fontSize: 13, float: "left", padding: "0 10px", fontWeight: 500 }}>
            {value.name}
          </Link>
          </div>
        )

      })}
      
      
    </div>
  </div>
</div></Animate>

<Animate play={true} duration={1} delay={0.3} start={{ opacity: 0 }} end={{ opacity: 1 }}>
<div className="single_tabs">
  <ul id="section" className="smenu idTabs">
    <li>
    <div onClick={()=>setTab(false)}>
      <a id="main_ali" href="#info" className={tab===true ? '':"selected"}>
        Info
      </a></div>
    </li>
    <li>
      <div onClick={()=>setTab(true)}>
      <a href="#cast" className={tab===true ? 'selected':""}>Cast</a></div>
    </li>
    
    {/* <li><div onClick={()=>setTab(!tab)}><a  href="#trailer" className={tab===true ? 'selected':""}>Trailer</a></div></li> */}

  </ul>
</div>

<div id="" className="sbox"  style={tab===true?{display: 'none'}:{}}>
  <h2>Synopsis</h2>
  <div itemProp="description" className="wp-content">
    <p>
      {movieDetails.overview}
    </p>
    <div
      id="dt_galery"
      className="galeria owl-carousel owl-theme"
      style={{ opacity: 1, display: "block" }}
    >
      <div className="owl-wrapper-outer">
      <Swiper
        slidesPerView={5}
        spaceBetween={190}
        breakpoints={Breakpoints}
        freeMode={true}
        
        modules={[FreeMode]}
        className="mySwiper"
      >
        
          {poster.map((value , index) => {
            

            return(
              <SwiperSlide key={index}>
                <Images value={value} movieDetails={movieDetails} />
              </SwiperSlide>
            )
          })}
          </Swiper>
          
        
      </div>
      <div className="owl-controls clickable">
        <div className="owl-pagination">
          <div className="owl-page active">
            <span className />
          </div>
          
        </div>
      </div>
    </div>
  </div>
  <div className="custom_fields">
    {" "}
    <b className="variante">Original title</b>{" "}
    <span className="valor">{movieDetails.original_title}</span>
  </div>
  <div className="custom_fields">
    {" "}
    <b className="variante">IMDb Rating</b>{" "}
    <span className="valor">
      {" "}
      <b id="repimdb">
        <strong>{movieDetails.vote_average}</strong> {movieDetails.vote_count} votes
      </b>{" "}
    </span>
  </div>
  <div className="custom_fields">
    {" "}
    
  </div>
</div>

<div id="" className="sbox fixidtab" style={tab===true?{display: 'block'}:{display: 'none'}}>
  
  <h2>Cast</h2>
  <div className="persons">
    {casts.map((value, index) => {

      return(
<div  key={index}
      className="person"
      itemProp="actor"
      itemScope
      itemType="http://schema.org/Person"
    >
      <meta itemProp="name" content={value.name} />
      <div className="img">
        <a>
          <img
            alt={value.name}
            src={`http://image.tmdb.org/t/p/w92${value.profile_path}`}
          />
        </a>
      </div>
      <div className="data">
        <div className="name">
          <Link to={`/cast/${value.id}/${value.name}/1`}>
            {value.name}
          </Link>
        </div>
        <div className="caracter">{value.character}</div>
      </div>
    </div>
      )
    })}
    
    
  </div>
</div></Animate>

{/* <div id="trailer" className="sbox fixidtab" style={tab===true?{display: 'block'}:{display: 'none'}}>
  <h2>Video trailer</h2>
  <div className="videobox">
    <div className="embed">
      {" "}
      <iframe
        className="rptss"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=0&autohide=1`}
        frameBorder={0}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  </div>
</div> */}

<Animate play={true} duration={1} delay={0.3} start={{ opacity: 0 }} end={{ opacity: 1 }}>
<Border name={'Similar Movies'} name_left={'swipe >'}/>
<MovieCardHome baseUrl={`https://api.themoviedb.org/3/movie/${id}/`} type={'similar'} api_key={'4bc2cade9fe707e58b1a3664331023cd'}/></Animate>
</div>
  </div></div>





</>
    )
};

export default MovieDetails;