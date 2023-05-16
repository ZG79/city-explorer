import React from "react";

class WeatherDay extends React.Component{
  render(){
    return(
      <>
      <Card id="weather" style={{ width: '21rem', display: 'grid'}}>
      <p> {this.props.day.date}</p>
      <p> {this.props.day.description}</p>
      <p> The max temp is {this.props.day.highTemp}</p>
      </>
    )
  }
}

export default WeatherDay;