import { Link } from "react-router-dom";

const Border =  ({name, name_left,genre,id}) =>{

    return(<>
        {id==''?<header>
            <h2>{name}</h2>
            
            <span> <Link to={`/movielist/${genre}/1`} className="see-all">{name_left}</Link></span>
          </header>:<header>
            <h2>{name}</h2>
            
            <span> <Link to={`/movielist/${genre}/${id}/1`} className="see-all">{name_left}</Link></span>
          </header>}
        
          </>
    )
};

export default Border;