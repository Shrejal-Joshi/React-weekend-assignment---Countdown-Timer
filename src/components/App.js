import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const[timeCount, setTimeCount] = useState(0);

  const handleKeyDown = (event, inputTime)=>
  {
    if(event.keyCode !== 13)
    {
      return;
    }
    inputTime = Math.floor(inputTime);
    if(inputTime < 0)
    {
      inputTime = 0;
    }
    setTimeCount(inputTime);
  }
  useEffect (() =>
  {
    let index = null;
    if(timeCount >0)
    {
      index = setInterval(() =>setTimeCount (timeCount -1), 1000);
    }
    return () => clearInterval(index);
  })

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={(event) => (handleKeyDown(event, event.target.value))} /> sec.
        </h1>
        
      </div>
      <div id="current-time">{timeCount}</div>
    </div>
  )
}


export default App;
