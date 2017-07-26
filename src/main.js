import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

import '../src/style/_main.scss';

class App extends React.Component {

  constructor (props) {
    super(props);
    //setup initial state
    //when the state is changed, the component re-renders
    this.state = {
      content: '',
    }
//this allows us to use a specific context
//invoke handleClick with "this" context when React creates an instance of the component. so, the instance will have state and .handleClick functionality for ITS OWN CONTEXT
//!!!define handleClick to use the correct context
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log(this)
    this.setState({
      content: cowsay.say({
        text: faker.lorem.words(10),
        f: 'tux'
      }),
    })
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <h1> Generate Cowsay Lorem </h1>
        <button onClick={ this.handleClick }> click me! </button>
        <pre> { this.state.content } </pre>
      </div>
    )
  }
}

//create a place to put the app
const container = document.createElement('div')
document.body.appendChild(container);
ReactDom.render(<App />, container);
