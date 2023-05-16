import React from "react";
import { Card } from "react-bootstrap";

class MovieOne extends React.Component{
  render(){
    return(
      <>
      <Card id="movie" style={{ width: '50rem', display: 'grid'}}>
      <p> Title: {this.props.clip.name}</p> 
      <p style={{display: 'inline', width: '40rem'}}> Overview: {this.props.clip.overview}</p>
      <p> Popularity: {this.props.clip.popularity}</p>
      <p> Release Date: {this.props.clip.release_date}</p>
      <img alt="Movie Poster" src={`https://image.tmdb.org/t/p/w500/${this.props.clip.poster}`}/>
      </Card>
      </>
      
    )
  }
}

export default MovieOne;