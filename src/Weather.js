import React from "react";
import './map.css';
import Card from 'react-bootstrap/Card';
import WeatherDay from "./nestedComponent/WeatherDay";

class Weather extends React.Component{
  render(){
    return(
        <Card style={{ width: '18rem' }}>
           <Card.Body>
       {this.props.cityWeather && 
         <Card.Text>
            {this.props.cityWeather.map((element,idx)=> (
             <div key={idx}>
            <WeatherDay day={element}/>
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