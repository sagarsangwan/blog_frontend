import React from 'react';
// import './App.css';
import MyFunction from './components/myfunction';
import Name from './components/Name'

function App() {
  function ButtonClicked() {
    alert("hi, guyz");
  }
  return (
    <div className="App container">
      <MyFunction name="sagar" clicked={ButtonClicked} />
      <section className="mt-5 bg-secondary">
        <Name />
      </section>
    </div>
  );
}

export default App;
