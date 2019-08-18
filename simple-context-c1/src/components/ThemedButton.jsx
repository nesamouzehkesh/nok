import React from 'react';
import Button from './Button';
import ThemeContext from './ThemeContext';

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    return (
      <Button theme={this.context}>
        {this.props.children}
      </Button>
    )
  }
}

export default ThemedButton;

// function ThemedButton({children}) {
//   return (
//     <ThemeContext.Consumer>
//     {
//       (theme) => (
//         <Button theme={theme} >
//           {children}
//         </Button>
//       )   
//     }   
//     </ThemeContext.Consumer>
//   )
  
// }