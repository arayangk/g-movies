import { Link } from "react-router-dom";
import moment from 'moment';
import { Animate } from "react-simple-animate";
import ReactPaginate from 'react-paginate';
import Loader from "react-js-loader";

const MovieCardWithPaging = ({movieList,genre,loading,setMovieID,totalpages}) => {

    const handlePageClick = (event) => {
        setMovieID(event.selected+1)
        console.log(
          `page number ${event.selected}`
        );
       };
    return (
        <>
        <div id="contenedor">
    <div className="module">
        <div className="content left full">
        <Animate play={true} duration={1} delay={0.3} start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <h1 className="heading-archive">{genre} Movies</h1>
        

        <div id="archive-content" className="animation-2 items full">
          {loading ? <Loader type="spinner-default" bgColor={"#8c53b5"} color={'#8c53b5'} size={100} /> : movieList.map((value, index)=> {

return(
    <div key={index}>
    <article id="post-25379" className="item movies">
<div className="poster">
{" "}
<img
src={`https://image.tmdb.org/t/p/w500${value.poster_path}`} alt={value.title}
/>
<div className="rating"><span className="fas fa-star" /> {value.vote_average}</div>
<div className="mepo">
{" "}
<span className="quality">{value.original_language}</span>
</div>{" "}
<Link to={`/movie/${value.id}`}>
<div className="see play4" />
</Link>
</div>
<div className="data">
<h3>
<Link to={`/movie/${value.id}`}>
{value.title}
</Link>
</h3>{" "}
<span>{moment(value.release_date).format('DD MMM, YYYY')}</span>
</div>
</article>
</div>
)
}) }

 
  
  
</div>
</Animate>
<ReactPaginate
        pageClassName='inactive'
        containerClassName='pagination'
        activeClassName='current'
        pageLinkClassName='inactive'
        nextLinkClassName='inactive'
        previousLinkClassName='inactive'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalpages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />

</div></div></div>
        </>
    )
};

export default MovieCardWithPaging;