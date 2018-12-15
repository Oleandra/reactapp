import React, { Component } from 'react';
import Title from './Title'

//Stateful Component
class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'My first react app'
		}
	}
  render() {
    return (
     <Title title={ this.state.title }/>
    );
  }
}

export default App;
