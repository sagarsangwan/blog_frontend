import React from 'react';
// import './App.css';
import MyFunction from './components/myfunction';

function App() {
  function ButtonClicked() {
    alert("hi, guyz");
  }
  return (
    <div className="App container">
      <MyFunction name="sagar" clicked={ButtonClicked} />
    </div>
  );
}

export default App;
