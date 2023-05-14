import React from "react";
import axios from "axios";
import Map from "./Map";
import Error from "./Error";
import Weather from "./Weather";
import Movie from "./Movie";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false,
      city: "",
      cityName: "",
      lon: "",
      lat: "",
      location: {},
      errorIn: false,
      cityWeather:[],
      movie:[]
    };
    this.resetStates = this.resetStates.bind(this);
  }

    //city is my user input
  handleInput = (e) => {
    this.setState({ city: e.target.value }, () => console.log(this.state.city));
  };

  getWeather = async () => {
    try {
      //connecting the backend to frontend
      let weatherURL = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.lat}&lon=${this.state.lon}&days=5`;
      const weatherResponse = await axios.get(weatherURL);
      console.log(weatherResponse.data);
      //
      this.setState({
        cityWeather: weatherResponse.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };

getMovie = async()=>{
  try{
    let movieURL = `${process.env.REACT_APP_SERVER}/movie?query=${this.state.city}`;
    const movieResponse = await axios.get(movieURL);
    console.log(movieResponse.data);
    this.setState({
      movie: movieResponse.data,
    });
  }catch (error) {
    console.error(error.message);
  }
}


  handleExplore = async (e) => {
    e.preventDefault();
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`;
      const response = await axios.get(url);
      this.setState({
        location: response.data[0],
        displayInfo: true,
        cityName: response.data[0].display_name,
        lon: response.data[0].lon,
        lat: response.data[0].lat,
      });
      this.getWeather();
      this.getMovie();
      console.log(response.data[0]);
    } catch (error) {
      this.setState({
        errorIn: true,
      });
      console.log(this.state.errorIn);
    }
  };

  resetStates = () => {
    this.setState({
      displayInfo: false,
      errorIn: false,
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleExplore}>
          <Form.Group className="mb-3">
            <Form.Label>Enter a city name</Form.Label>
            <Form.Control
              type="text"
              onChange={this.handleInput}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.resetStates}>
            Explore!
          </Button>
        </Form>
        
        {this.state.displayInfo && (
          <>
            <ul id="cities">
              {this.state.cityName}
              <p>The weather forecast for 5 days:</p>
              <Weather cityWeather={this.state.cityWeather}/>
              <hr/><br/>
              <p>The popular movies about the city:</p>
              <Movie movie = {this.state.movie}/>
            </ul>
            <Map lat={this.state.lat} lon={this.state.lon} />
          </>
        )}
        {this.state.errorIn && <Error />}

     
      </>
    );
  }
}

export default Main;
