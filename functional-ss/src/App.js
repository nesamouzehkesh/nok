import React from 'react';
import Counter from './components/Counter';
import './App.css';

const incrementCount = (state) => ({ count: state.count + 1 })

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  clickHandler = () => {

    // this.setState({count: this.state.count + 3})
    // this.setState({count: this.state.count + 2})
    // this.setState({count: this.state.count + 1})

    // this.setState((state) => ({count: state.count + 1}))
    // this.setState((state) => ({count: state.count + 1}))
    // this.setState((state) => ({count: state.count + 1}))

    this.setState(incrementCount)
    this.setState(incrementCount)
  }

  render() {
    return (
      <React.Fragment>
        <div className="App-header" >
          Functional setState!
        </div>
        <Counter clickHandler={this.clickHandler} count={this.state.count}/>
      </React.Fragment>
    );
  }
  
}

export default App;
