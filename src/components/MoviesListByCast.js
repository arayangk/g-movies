import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCardWithPaging from "./MovieCardWithPaging";

const MovieListByCast = () => {


    const {castid,castname,page} = useParams();
    const api_key ='4bc2cade9fe707e58b1a3664331023cd';

    const [castList, setCastList] = useState([])
    const [castLists, setCastLists] = useState({})
    const [movieID, setMovieID] = useState(parseInt(page))
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        setLoading(true)
          axios.get(`
          https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${movieID}&with_people=${castid}&with_watch_monetization_types=flatrate`)
          .then((res)=>{
            
             
             setCastLists(res.data)
             setCastList(res.data.results)
             setLoading(false)
             
          })
          .catch((err) => {
           console.log(err.message);
          })
      }, [castid,movieID,page])
  

    return (
        <>
        <MovieCardWithPaging movieList={castList} genre={castname} loading={loading} setMovieID={setMovieID} totalpages={castLists.total_pages}  />
        
        
        </>
    )
};

export default MovieListByCast;