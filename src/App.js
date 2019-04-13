import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoAdd />
        <TodoList />
      </div>
    );
  }
}

export default App;
