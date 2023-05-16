import React from "react";
import { Card } from "react-bootstrap";

class WeatherDay extends React.Component{
  render(){
    console.log(this.props);
    return(
      <>
      <Card id="weather" style={{ width: '21rem', display: 'grid'}}>
      <p> {this.props.day.date}</p>
      <p> {this.props.day.description}</p>
      <p> The max temp is {this.props.day.highTemp}</p>
      <img alt="icon" src={`https://cdn.weatherbit.io/static/img/icons/${this.props.day.icon}.png`}/>
      </Card>
      </>
    )
  }
}

export default WeatherDay;
// https://cdn.weatherbit.io/static/img/icons/${this.props.icon}.png