import React from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      displayInfo:false,
      city:'',
      location: {}
    }
  }

  handleInput = (e) =>{
    this.setState({city: e.target.value}
      , ()=>console.log(this.state.city));
  }

  handleExplore = async (e) =>{
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_KEY}&q=${this.state.city}&format=json`
    const response = await axios.get(url);
    console.log(response.data[0]);
    this.setState({displayInfo:true});
  }
  
  render (){
    return (
      <>
      <Form onSubmit={this.handleExplore}>
        <Form.Group>
          <Form.Label>Enter a city name</Form.Label>
          <Form.Control type='text' onChange={this.handleInput}></Form.Control>
        </Form.Group>
          <Button onClick={this.handleExplore}>Explore!</Button>
      </Form>
      {this.state.displayInfo &&
      <h2>The city is: {this.state.location.display_name}
      </h2>
      }
      </>
    )
  }

}

export default App;

