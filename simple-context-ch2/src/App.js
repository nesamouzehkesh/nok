import React from 'react';
import Toolbar from './components/Toolbar';
import './App.css';
import { ThemeContext, themes } from './components/ThemeContext';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
    }
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };
  render() {
    return (
      <div className="App">
        <ThemeContext.Provider value={this.state}>
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
