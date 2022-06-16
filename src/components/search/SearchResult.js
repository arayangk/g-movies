import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCardWithPaging from "../MovieCardWithPaging";

const SearchResult = () => {
    const {query,page} = useParams();
    const api_key ='4bc2cade9fe707e58b1a3664331023cd';
    const querys= `Search Result for "${query}"`

    const [searchList, setSearchList] = useState([])
    const [searchLists, setSearchLists] = useState({})
    const [movieID, setMovieID] = useState(parseInt(page))
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true)
        axios.get(`
        https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${movieID}`)
        .then((res)=>{
          
           
           setSearchLists(res.data)
           setSearchList(res.data.results)
           setLoading(false)
        })
        .catch((err) => {
         console.log(err.message);
        })
    }, [query,movieID,page])


    return (
        <>
        <MovieCardWithPaging movieList={searchList} genre={querys} loading={loading} setMovieID={setMovieID} totalpages={searchLists.total_pages}  />
        
        </>
    )
};

export default SearchResult;