import React, { useState } from 'react';
import { Square } from './public/Square';


export default function Board() {
  const [square, setSquare] = useState(Array(9).fill(null));
  let [count, setCount] = useState(0);

  function handelClick(i){
    let nextSquare = square.slice();
    if(count % 2 === 0){
      nextSquare[i] = 'X'
      count += 1;
      setCount(count);

    }
    else{
      nextSquare[i] = 'O'
      count += 1;
      setCount(count);
    }
    setSquare(nextSquare)
  }
  return (
    <div>
      <div className="board-row">
        <Square value = {square[0]} onSquareClick = {() => handelClick(0)}/>
        <Square value = {square[1]} onSquareClick = {() => handelClick(1)}/>
        <Square value = {square[2]} onSquareClick = {() => handelClick(2)}/>
      </div>
      <div className="board-row">
        <Square value = {square[3]} onSquareClick = {() => handelClick(3)}/>
        <Square value = {square[4]} onSquareClick = {() => handelClick(4)}/>
        <Square value = {square[5]} onSquareClick = {() => handelClick(5)}/>
      </div>
      <div className="board-row">
        <Square value = {square[6]} onSquareClick = {() => handelClick(6)}/>
        <Square value = {square[7]} onSquareClick = {() => handelClick(7)}/>
        <Square value = {square[8]} onSquareClick = {() => handelClick(8)}/>
      </div> 
    </div>
    
  );
}
