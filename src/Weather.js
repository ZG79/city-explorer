import React from "react";
import './map.css';

class Weather extends React.Component{
  render(){
    return(
      <>
       {this.props.cityWeather && 
         <>
            {this.props.cityWeather.map((element,idx)=> (
             <div key={idx}>
              <p> {element.date}</p>
              <p> {element.description}</p>
              </div>
            ))}

          </>
        }
      </>
    )
  }
}
export default Weather;