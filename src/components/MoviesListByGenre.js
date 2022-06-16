import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCardWithPaging from "./MovieCardWithPaging";

const MoviesListByGenre = () => {

    const {id,page,genre} = useParams();
    const api_key ='4bc2cade9fe707e58b1a3664331023cd';

    const [movieList, setMovieList] = useState([])
    const [movieLists, setMovieLists] = useState({})
    const [movieID, setMovieID] = useState(parseInt(page))
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
        axios.get(`
        https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${movieID}&with_genres=${id}&with_watch_monetization_types=flatrate`)
        .then((res)=>{
           setMovieLists(res.data)
           setMovieList(res.data.results)
           setLoading(false)
        })
        .catch((err) => {
         console.log(err.message);
        })
    }, [page,movieID,id])

    

    return (<>
    <MovieCardWithPaging movieList={movieList} genre={genre} loading={loading} setMovieID={setMovieID} totalpages={500}  />
        
        </> )
};

export default MoviesListByGenre;