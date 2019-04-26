import React, {Component} from 'react';
import './App.css';

class App extends Component{  
  state = { users:[] };

  componentDidMount(){
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState( {users}));
  }
  render(){
  return (
    <div className="App">
      {this.state.users.map (
        user => <li key={user.name}>{user.address}</li>
      )}
      
    </div>
  );
}
}

export default App;
