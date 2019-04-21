import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";

const socket = io('http://192.168.1.8:8080');


class App extends Component {
state = {
  light : 1
}

componentDidMount () {

  socket.on("light", (data) =>{
    socket.emit("light",Number(this.state.light))
    this.setState(state => {
      return {
        light : state.light === 0 ? 1 : 0
      }
    })
  });
}

  changeThings = (ev) =>{
    console.log(ev)
    this.setState(state => {
      return {
        light : state.light === 0 ? 1 : 0
      }
    })
    socket.emit("light",Number(this.state.light))
  }

  render() {
    return (
      <div className="App">
          <p><input onChange={this.changeThings} checked={this.state.light === 1 ? false : true} type="checkbox" id="light"/>Start light</p>
      </div>
    );
  }
}

export default App;
