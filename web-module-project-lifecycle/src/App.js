import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: [],
      userFollowers: [],
      username: '' // stretch
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
    axios.get(`https://api.github.com/users/D2MBingo5/followers`)
      .then(res => {
        console.log(res.data)
        this.setState({
          ...this.state,
          userFollowers: res.data
        })
      })
      .catch(err => console.log(err))
  }

render(){
  return (
    <div className="App">
      <h1>Github User Information</h1>
      {/* <form>
        <input />
        <button>Fetch User</button>
      </form> */}
      <div id='gitUser'>
        <h2>{this.state.userInfo.login} | {this.state.userInfo.name}</h2>
        <img width={200} src={this.state.userInfo.avatar_url} alt='user avatar'/>
        <p>{this.state.userInfo.bio}</p>
        <p>{this.state.userInfo.location}</p>
      </div>
      <div id='gitFollowers'>Followers:
        {
          this.state.userFollowers.map(flwr => {
            return(
              <div>
               <img width={50} src={flwr.avatar_url} alt='follower profile' /> 
               <span>{flwr.login}</span>
              </div>              
            )
          })
        }
      </div>
    </div>
  );
}
  
}

export default App;
