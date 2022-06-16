import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCardWithPaging from "./MovieCardWithPaging";

const MovieDiscoverList  = () => {
    const {page,genre} = useParams();
    const api_key ='4bc2cade9fe707e58b1a3664331023cd';

    const [movieList, setMovieList] = useState([])
    const [movieLists, setMovieLists] = useState({})
    const [movieID, setMovieID] = useState(parseInt(page))
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
          axios.get(`
          https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&region=IN&sort_by=popularity.desc&with_original_language=hi&page=${movieID}`)
          .then((res)=>{
             setMovieLists(res.data)
             setMovieList(res.data.results)
             setLoading(false)
          })
          .catch((err) => {
           console.log(err.message);
          })
      }, [movieID])

    return(
        <>
        <MovieCardWithPaging movieList={movieList} genre={genre} loading={loading} setMovieID={setMovieID} totalpages={movieLists.total_pages}  />
        </>
    )
};

export default MovieDiscoverList;