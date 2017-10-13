import React, { Component } from 'react';
class App extends Component {
  constructor(props){
    super();
    this.state = {joke: "aa"}
  }
  componentDidMount(){
    const facade = this.props.facade;
    //facade.getJokeViaCallback(this.jokeUpdater);
    facade.setObserver(this.jokeUpdater);
    //facade.getJokeAndNotify();
    facade.getJokeContiniuesly(2000)   
  }
  componentWillUnmount() {
    this.props.facade.facade.stopIntervalFetching();
  }
  jokeUpdater = (data) =>{
    this.setState({joke: data});
  }

  render() {
    return (
      <div className="App">
        {this.state.joke}
      </div>
    );
  }
}


export default App;
