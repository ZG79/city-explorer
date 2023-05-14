import React from "react";
import './map.css';
import Card from 'react-bootstrap/Card';
import MovieOne from "./nestedComponent/MovieOne";

class Movie extends React.Component{
  render(){
    return(
        <>

       {this.props.movie && 
         <>
            {this.props.movie.map((element,idx)=> (
             <div key={idx} style={{ display:'inline-block'}}>
          
              {/* <div> Title: {element.name}</div>  */}
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