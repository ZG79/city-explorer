import React from "react";
import './map.css';
import Card from 'react-bootstrap/Card';
import MovieOne from "./nestedComponent/MovieOne";

class Movie extends React.Component{
  render(){
    return(
        <Card style={{ width: '18rem' }}>

       {this.props.movie && 
         <Card.Text>
            {this.props.movie.map((element,idx)=> (
             <div key={idx}>
             <Card.Body> <p> Title: {element.name}</p> </Card.Body>
              <MovieOne clip={element}/>
              </div>
            ))}

          </Card.Text>
        }
      
      </Card>
    )
  }
}
export default Movie;