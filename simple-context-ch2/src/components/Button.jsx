import React from 'react';

function Button({theme, children, toggleTheme}) {
  console.log('4. Button rendered');
  return (
    <button style={{ color: theme, marginTop: '20px', width: '300px', height: '50px', fontSize: '25px'}} onClick={toggleTheme}>
      {children}
    </button>
  );
}

export default Button;