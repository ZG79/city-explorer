import React from 'react';
import axios from 'axios';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Map from './Map';
import Error from './Error';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      displayInfo:false,
      city:'',
      cityName:'',
      longitude:'',
      lattitude:'',
      location: {},
      errorIn:false
    }
    this.resetStates = this.resetStates.bind(this);
  }

  handleInput = (e) =>{
    this.setState({city: e.target.value}
      , ()=>console.log(this.state.city));
  }

  handleExplore = async (e) =>{
    e.preventDefault();
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`
      const response = await axios.get(url);
      this.setState({
        location: response.data[0],
        displayInfo: true,
        cityName: response.data[0].display_name,
        longitude: response.data[0].lon,
        lattitude:response.data[0].lat
      });
      console.log(response.data[0]);
    } catch (error){
      this.setState({
        errorIn: true
      })
      console.log(this.state.errorIn)
    }
  }

   resetStates = () => {
    this.setState({
      displayInfo: false,
      errorIn: false
    });
  }
  
  render (){
    return (
  <>
      <Form onSubmit={this.handleExplore}>
        <Form.Group className="mb-3">
          <Form.Label>Enter a city name</Form.Label>
          <Form.Control type='text' onChange={this.handleInput}></Form.Control>
        </Form.Group>
        <Button variant="primary" type='submit' onClick={this.resetStates}>Explore!</Button>
      </Form>
          
      {this.state.displayInfo &&
      <>
      <ul id='cities'>{this.state.cityName} 
      <li>The longitude of the city is: {this.state.longitude}</li>
      <li>The lattitude of the city is: {this.state.lattitude}</li>
      </ul>
     <Map lat={this.state.lattitude} lon={this.state.longitude}/>
     
      </>
      }
        {this.state.errorIn  &&
        
        <Error/>
        }
        
      </>
      
    )
  
  }
}


export default Main;