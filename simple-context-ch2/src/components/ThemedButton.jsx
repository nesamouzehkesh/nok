import React from 'react';
import { ThemeContext } from './ThemeContext';
import Button from './Button';

class ThemedButton extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log('3. Themed-Button rendered');
    return (
      <Button theme={this.context.theme} toggleTheme={this.context.toggleTheme}>
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