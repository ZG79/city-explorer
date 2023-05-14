import React from "react";
import "./map.css";
import Card from "react-bootstrap/Card";
import WeatherDay from "./nestedComponent/WeatherDay";

class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.cityWeather && (
          <>
          <h1 id="heady">
            {this.props.cityName}
          </h1>
            {this.props.cityWeather.map((element, idx) => (
           <div key={idx} style={{ display:'inline-block'}}>
                <WeatherDay day={element} />
              </div>
            ))}
          </>
        )}
      </>
    );
  }
}
export default Weather;
