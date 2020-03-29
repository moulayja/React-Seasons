import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  state =  {
    lat: null,
    long: null,
    errorMessage: ''
  }

render(){

  window.navigator.geolocation.getCurrentPosition(
    position => {this.setState({ lat :position.coords.latitude, long: position.coords.longitude})},
    err => {this.setState({ errorMessage: 'You have an error Jamal Farah'})}
)
  
      if (this.state.lat){
        return <h2>Latitude: {this.state.lat}</h2>
      }

      if(!this.state.lat){
        return <h2>Error: {this.state.errorMessage}</h2>
      }

        return <h2>Loading</h2>
  


}
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

