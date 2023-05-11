import React from "react";
import './map.css';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component{
  render(){
    return(
        <Card style={{ width: '18rem' }}>
           <Card.Body>
       {this.props.cityWeather && 
         <Card.Text>
            {this.props.cityWeather.map((element,idx)=> (
             <div key={idx}>
              <p> {element.date}</p>
              <p> {element.description}</p>
              <p> The max temp is {element.highTemp}</p>
              </div>
            ))}

          </Card.Text>
        }
        </Card.Body>
      </Card>
    )
  }
}
export default Weather;