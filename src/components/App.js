import React, { useState, useEffect } from 'react'
import '../styles/App.css';
const App = () => {
  //code here
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick() {
    // Update the name in the paragraph tag
    document.getElementById("add").innerHTML = name;
  }

  return (
    <div id="main">
      <input id='input' onChange={handleChange}></input>
      <button id='button' onClick={handleClick}>Click</button>
      <p id='text'> Hello my name is <span id='add'>____</span> and I study at Newton School</p>
    </div>
  )
}


export default App;
