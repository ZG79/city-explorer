import React from "react";
import { Card } from "react-bootstrap";
import '../map.css'; 

class MovieOne extends React.Component{
  render(){
    return(
      <>
      <Card id="movie" style={{ width: '20rem', display: 'grid'}}>
      <p> Title: {this.props.clip.name}</p> 
      <p> Overview: {this.props.clip.overview}</p>
      <p> Popularity: {this.props.clip.popularity}</p>
      <p> Release Date: {this.props.clip.release_date}</p>
      </Card>
      </>
    )
  }
}

export default MovieOne;