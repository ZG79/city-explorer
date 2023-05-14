import React from "react";

class MovieOne extends React.Component{
  render(){
    return(
      <>
      <p> Overview: {this.props.clip.overview}</p>
      <p> Popularity: {this.props.clip.popularity}</p>
      <p> Release Date: {this.props.clip.release_date}</p>
      </>
    )
  }
}

export default MovieOne;