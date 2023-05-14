import React from "react";
import './map.css';
import MovieOne from "./nestedComponent/MovieOne";

class Movie extends React.Component{
  render(){
    return(
        <>

       {this.props.movie && 
         <>
            {this.props.movie.map((element,idx)=> (
             <div key={idx} style={{ display:'inline-block'}}>
              <MovieOne clip={element}/>
              </div>
            ))}

          </>
        }
      
      </>
    )
  }
}
export default Movie;