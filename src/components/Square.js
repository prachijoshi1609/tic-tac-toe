import React from 'react';

function Square(props) {
  // const[state, setState]= useState('')
  return (
    <div>
      <button type="button" className='square' onClick={props.onClick}>{props.value}</button>
{/* <button type="button" className='square' >{props.Boardstate}</button> */}
      
    </div>
    
  )
}

export default Square
