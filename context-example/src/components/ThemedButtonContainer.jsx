import React from 'react';
import ThemedButton from './ThemedButton';

class ThemedButtonContainer extends React.Component {
  render() {
    console.log('2. Themed-Button-container rendered');
    return (
      <ThemedButton>
        {this.props.children}
      </ThemedButton>
    )
  }
}

export default ThemedButtonContainer;