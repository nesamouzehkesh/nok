import React from 'react';

const Counter = ({clickHandler, count}) => {
  return (
    <div className="counter">
      <p className="number">{count}</p>
      <button className="button" onClick={clickHandler}>+</button>
    </div>
  )
}

export default Counter;