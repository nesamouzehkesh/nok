import React from 'react';
import ThemedButtonContainer from './ThemedButtonContainer';

class Toolbar extends React.Component {
  render() {
    console.log('1. Toolbar rendered');
    return (
      <ThemedButtonContainer>
        The Legend of Zelda!
      </ThemedButtonContainer>
    )
  }
}

export default Toolbar;