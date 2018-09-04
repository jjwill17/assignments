import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getTodos} from './redux';

class App extends Component {

  componentDidMount(){
    this.props.getTodos()
  }

  render() {
    const mappedTodos = this.props.todos.map(todo => {
      return <div>
              <h1>{todo.title}</h1>
            </div>
    })
    return (
      <div>
        {mappedTodos}
      </div>
    );
  }
}

export default connect(state => state, {getTodos})(App);
