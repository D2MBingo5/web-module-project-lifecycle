import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: [],
      username: ''
    }
  }

render(){
  return (
    <div className="App">
      <h1>Github User Information</h1>
      <form>
        <input />
        <button>Fetch User</button>
      </form>
      <div id='gitUser'>

      </div>
    </div>
  );
}
  
}

export default App;
