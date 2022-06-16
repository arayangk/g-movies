import gmovies from "../assets/img/gmovies.svg"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { searchmovie } from "./search/utils";
import Movies from "./search/Movies";
import DarkMode from "./DarkMode";


const Header =  () =>{
  const [search, setSearch] = useState(false);
  const [display, setDisplay] = useState(true);
  const [menu, setMenu] = useState(false);
  const [input, setInput] = useState('');
  const [details, setDetails] = useState({
    movies: null,
    loading: false,
    value: ""
  })
  const [mode, setMode] = useState(false)

  const searchs = async val => {
    setDetails({ loading: true });
    const results = await searchmovie(
      `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
    );
    const movies = results;

    setDetails({ movies, loading: false });
  };


 
const onChangeHandler = async e => {
  setInput(e.target.value);
  searchs(e.target.value);
};



const renderMovie = {
  get renderMovies() {
  
  
   const movies = <Movies list={details.movies} setDisplay={setDisplay}/>;
  

  return movies;
}}

    return(
        <>
        <div id="#top-page"  >
  <header id="header" className="main" style={{opacity: 1}}>
    <div className="hbox">
      <div className="fix-hidden">
        <div className="logo"> <Link to="/"><img src={gmovies} alt="gmovies" /></Link></div>
        <div className="head-main-nav">
          <div className="menu-header-container">
            <ul id="main_header" className="main-header">
              <li id="menu-item-2056" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2056"><a><i className="fas fa-film" />  Movies</a></li>
              <li id="menu-item-2057" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2057"><a><i className="fas fa-tv" /> TV Shows</a></li>
              <li id="menu-item-1988" className="genres menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1988">
                <a><i className="fas fa-folder-open" /> Genres</a>
                <ul className="sub-menu">
                  <li id="menu-item-1989" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1989"><Link to={`/movielist/Action/28/1`}>Action</Link></li>
                  <li id="menu-item-1990" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1990"><Link to={`/movielist/Adventure/12/1`}>Adventure</Link></li>
                  <li id="menu-item-1991" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1991"><Link to={`/movielist/Animation/16/1`}>Animation</Link></li>
                  <li id="menu-item-1992" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1992"><Link to={`/movielist/Comedy/35/1`}>Comedy</Link></li>
                  <li id="menu-item-1993" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1993"><Link to={`/movielist/Crime/80/1`}>Crime</Link></li>
                  <li id="menu-item-1994" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1994"><Link to={`/movielist/Documentary/99/1`}>Documentary</Link></li>
                  <li id="menu-item-1995" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1995"><Link to={`/movielist/Drama/18/1`}>Drama</Link></li>
                  <li id="menu-item-1996" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1996"><Link to={`/movielist/Family/10751/1`}>Family</Link></li>
                  <li id="menu-item-1997" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1997"><Link to={`/movielist/Fantasy/14/1`}>Fantasy</Link></li>
                  <li id="menu-item-1998" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1998"><Link to={`/movielist/History/36/1`}>History</Link></li>
                  <li id="menu-item-1999" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1999"><Link to={`/movielist/Horror/27/1`}>Horror</Link></li>
                  <li id="menu-item-2000" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2000"><Link to={`/movielist/Music/10402/1`}>Music</Link></li>
                  
                  <li id="menu-item-2002" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2002"><Link to={`/movielist/Mystery/9648/1`}>Mystery</Link></li>
                  
                  <li id="menu-item-2004" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2004"><Link to={`/movielist/Romance/10749/1`}>Romance</Link></li>
                  <li id="menu-item-2005" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2005"><Link to={`/movielist/ScienceFiction/878/1`}>Science Fiction</Link></li>
                  <li id="menu-item-2006" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2006"><Link to={`/movielist/TvMovie/10770/1`}>TV Movie</Link></li>
                  <li id="menu-item-2007" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2007"><Link to={`/movielist/Thriller/53/1`}>Thriller</Link></li>
                  <li id="menu-item-2008" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2008"><Link to={`/movielist/War/10752/1`}>War</Link></li>
                  <li id="menu-item-2009" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2009"><Link to={`/movielist/Western/37/1`}>Western</Link></li>
                </ul>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="headitems register_active" >
          <div id="advc-menu" className="search" onClick={()=>setDisplay(true)} >
            <form method="get" id="searchform" action={`/searchresult/${input}/1`}> <input type="text" placeholder="Search..." value={input ?? ""}
          onChange={onChangeHandler} /> 
          
          <button className="search-button" type="submit"><span className="fas fa-search" /></button></form>
          </div>
          <div className="dtuser"> <a className="clicklogin"> 
          <div onClick={()=>setMode(!mode)}>
          <DarkMode mode={mode}/></div>
          </a></div>
        </div>
      </div>
      <div className="live-search ltr" style={display===true?{}:{display: 'none'}}>{renderMovie.renderMovies}</div>
    </div>
  </header>
  <div className="fixheadresp">
    <header className="responsive">
      <div className="nav" onClick={()=>setMenu(!menu)}><a className='aresp nav-resp'><i className={menu===true?'fal fa-times-circle':"fas fa-align-left"} /></a></div>
      <div className="search" onClick={()=>setSearch(!search)}><a onClick={()=>setDisplay(false)} className='aresp search-resp'><i className={search===true?'fal fa-times-circle':"fas fa-search"} /></a></div>
      <div className="logo"> <Link to ="/"><img src={gmovies} alt="G-movies" /></Link></div>
    </header >

    <div className="search_responsive">
      <form onClick={()=>setDisplay(true)} method="get" id="form-search-resp"  className={search===true?"form-resp-ab formblock":'form-resp-ab'} action={`/searchresult/${input}/1`}> <input type="text"  placeholder="Search..." value={input}
          onChange={onChangeHandler} /> <button type="submit" className="search-button"><span className="fas fa-search" /></button></form>
      <div className="live-search"  style={display===true?{}:{display: 'none'}}>{renderMovie.renderMovies}</div>
    </div>
    
    <div id="arch-menu" className={menu===true?"menuresp sidblock":'menuresp'}>
      <div className="menu">
        
        
        <div className="menu-header-container">
          <ul id="main_header" className="resp">
          <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2055"><a onClick={()=>setMode(!mode)}><center><DarkMode mode={mode}/></center></a></li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2056"><a><i className="fas fa-film" /> Movies</a></li>
            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2057"><a><i className="fas fa-tv" /> TV Shows</a></li>
            <li className="genres menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1988">
              <a><i className="fas fa-folder-open" /> Genres</a>
              <ul className="sub-menu" onClick={()=>setMenu(false)}>
              <li id="menu-item-1989" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1989"><Link to={`/movielist/Action/28/1`}>Action</Link></li>
                  <li id="menu-item-1990" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1990"><Link to={`/movielist/Adventure/12/1`}>Adventure</Link></li>
                  <li id="menu-item-1991" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1991"><Link to={`/movielist/Animation/16/1`}>Animation</Link></li>
                  <li id="menu-item-1992" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1992"><Link to={`/movielist/Comedy/35/1`}>Comedy</Link></li>
                  <li id="menu-item-1993" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1993"><Link to={`/movielist/Crime/80/1`}>Crime</Link></li>
                  <li id="menu-item-1994" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1994"><Link to={`/movielist/Documentary/99/1`}>Documentary</Link></li>
                  <li id="menu-item-1995" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1995"><Link to={`/movielist/Drama/18/1`}>Drama</Link></li>
                  <li id="menu-item-1996" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1996"><Link to={`/movielist/Family/10751/1`}>Family</Link></li>
                  <li id="menu-item-1997" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1997"><Link to={`/movielist/Fantasy/14/1`}>Fantasy</Link></li>
                  <li id="menu-item-1998" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1998"><Link to={`/movielist/History/36/1`}>History</Link></li>
                  <li id="menu-item-1999" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-1999"><Link to={`/movielist/Horror/27/1`}>Horror</Link></li>
                  <li id="menu-item-2000" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2000"><Link to={`/movielist/Music/10402/1`}>Music</Link></li>
                  
                  <li id="menu-item-2002" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2002"><Link to={`/movielist/Mystery/9648/1`}>Mystery</Link></li>
                  
                  <li id="menu-item-2004" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2004"><Link to={`/movielist/Romance/10749/1`}>Romance</Link></li>
                  <li id="menu-item-2005" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2005"><Link to={`/movielist/ScienceFiction/878/1`}>Science Fiction</Link></li>
                  <li id="menu-item-2006" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2006"><Link to={`/movielist/TvMovie/10770/1`}>TV Movie</Link></li>
                  <li id="menu-item-2007" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2007"><Link to={`/movielist/Thriller/53/1`}>Thriller</Link></li>
                  <li id="menu-item-2008" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2008"><Link to={`/movielist/War/10752/1`}>War</Link></li>
                  <li id="menu-item-2009" className="menu-item menu-item-type-taxonomy menu-item-object-genres menu-item-2009"><Link to={`/movielist/Western/37/1`}>Western</Link></li>
              </ul>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="contenedor">
</div>

</>
    )
};

export default Header;