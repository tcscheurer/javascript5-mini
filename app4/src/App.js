import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars() {
    
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
     

    return (
      <div className="App">
        <button onClick={()=>this.getCars()}>Get cars</button>
        {(this.state.cars) ? 
          this.state.cars.map((curr,index)=>{
            return (
              <p key={index}>{JSON.stringify(curr)}</p>
            )
            })
          :
           false
          }
      </div>
    );
  }
}

export default App;


/*
Errors found:
Changed onClick prop of button to call an arrow function, using lexical binding to maintain context of this
Conditional render on the state
*/