import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import HomeMenu from './components/HomeMenu';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchResult from './components/search/SearchResult';
import MoviesListByGenre from './components/MoviesListByGenre';
import MovieListByCast from "./components/MoviesListByCast";
import { useState,useEffect } from 'react';
import './assets/css/gs-movie.css';
import MovieDiscoverList from "./components/MovieDiscoverList";





function ErrorPath() {
  let location = useLocation();

  return (<div id="contenedor"><div className="module"><div className="content left full">
      <h1 className="heading-archive">
      <font color={'#FF0000'}>
      Error! Path
  </font> <code>'{location.pathname}'</code>
      </h1></div></div></div>
    
  );
}

function App() {
  
  
   
return (
    <div className="home blog"><div id="dt_contenedor">
    <BrowserRouter>
    
    
    <Header/>
    
    
    <Routes>
      <Route path="/" element={<HomeMenu />} />
      <Route path="*" element={<ErrorPath />} />
      <Route path="/movie/:id" element={<MovieDetails/>}/>
      <Route path="/movielist/:genre/:id/:page" element={<MoviesListByGenre/>}/>
      <Route path="/searchresult/:query/:page" element={<SearchResult/>}/>
      <Route path="/cast/:castid/:castname/:page" element={<MovieListByCast/>}/>
      <Route path="/movielist/:genre/:page" element={<MovieDiscoverList/>}/>
      
    </Routes>
  
  </BrowserRouter>
  <Footer/>
  
  </div>
  </div>
    
  );
}

export default App;
