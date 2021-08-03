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

  componentDidMount() {
    axios.get(`https://api.github.com/users/D2MBingo5`)
      .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          userInfo: res.data
        })
      })
      .catch(err => console.log(err))
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
        <h2>{this.state.userInfo.login} | {this.state.userInfo.name}</h2>
        <img width={200} src={this.state.userInfo.avatar_url} alt='user avatar'/>
        <p>{this.state.userInfo.bio}</p>
        <p>{this.state.userInfo.location}</p>
      </div>
    </div>
  );
}
  
}

export default App;
