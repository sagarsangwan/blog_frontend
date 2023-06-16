import './App.css';
// import Name from './components/Name';
import Example from './components/Example';
import Example2 from './components/Example2';
// import Form from './components/Form';
// import MyFragment from './components/MyFragment';
import ComponentsA from './components/ComponentsA';
import React from 'react';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook'

export const MyContext = React.createContext()



function App() {


  return (
    <div className="container text-center">
      <MyContext.Provider value={'hi, this is a value from app.js to component a that is in ComponentsB'}>
        {/* <ComponentsA /> */}
        {/* <Counter /> */}
        <CounterHook />
      </MyContext.Provider>


    </div>
  );
}

export default App;
