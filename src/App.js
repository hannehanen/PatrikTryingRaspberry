import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";

const socket = io('http://192.168.1.8:8080');

class App extends Component {

  componentDidMount() {
   
  }

  changeThings = (ev) =>{
    socket.emit("light",Number(1))
  }

  render() {
    return (
      <div className="App">
          <p><input onChange={this.changeThings} type="checkbox" id="light"/>Box..</p>
      </div>
    );
  }
}

export default App;
