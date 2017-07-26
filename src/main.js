import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1> hayyyy </h1>
      </div>
    )
  }
}

//create a place to put the app
const container = document.createElement('div')
document.body.appendChild(container);
ReactDom.render(<App />, container);
