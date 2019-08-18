import React from 'react';

const Button = ({ children, theme }) => {
  return (
    <button style={{ color: theme, marginTop: '20px', width: '300px', height: '50px', fontSize: '25px'}} >
      {children}
    </button>
  )
}

export default Button;