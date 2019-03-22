import React, { Component } from 'react';
import './App.css';
import User from './User';
class App extends Component {

  state = {
    user: {}
  }

  getUser = () => {
    const name = this.refs.name.value;
    fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        user: {
          avatar: data.avatar_url,
          nickname: data.login,
          fullName: data.name,
          location: data.location,
          publicRepos: data.public_repos,
          followers: data.followers
        }
      })
    })
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <header className="tc pv4 pv5-ns">
          <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
          <h1 className="f5 f4-ns fw6 mid-gray">Enter a username: </h1>
          <input type="text" ref="name" className="f6 gray"/>
          <button onClick={this.getUser}>Get user details</button>
        </header>

        <User user={user}/>
      </div>
    );
  }
}

export default App;
