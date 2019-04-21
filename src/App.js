import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from "socket.io-client";

const socket = io('http://192.168.1.8:8080');


class App extends Component {
state = {
  amountOfClicked : 0,
  light : 1
}

componentDidMount () {

  socket.on("light", (data) =>{
    if(this.state.amountOfClicked > 10){
      socket.emit("yellowLamp", "");
    }
    socket.emit("light",Number(this.state.light))
    this.setState(state => {
      return {
        light : state.light === 0 ? 1 : 0,
        amountOfClicked : state.amountOfClicked +1
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
          <div>Klickat på knapp {this.state.amountOfClicked} antal ggr. </div>
      </div>
    );
  }
}

export default App;
