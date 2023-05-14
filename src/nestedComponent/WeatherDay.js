import React from "react";
import { Card } from "react-bootstrap";
import '../map.css'; 

class WeatherDay extends React.Component{
  render(){
    return(
      <>
      <Card id="weather" style={{ width: '20rem', display: 'grid'}}>
      <p> {this.props.day.date}</p>
      <p> {this.props.day.description}</p>
      <p> The max temp is {this.props.day.highTemp}</p>
      </Card>
      </>
    )
  }
}

export default WeatherDay;