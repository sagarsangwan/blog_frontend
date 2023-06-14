import './App.css';
// import Name from './components/Name';
import Example from './components/Example';
import Example2 from './components/Example2';
import Form from './components/Form';
function App() {
  function clicked() {
    alert("button is clicked")
  }
  return (
    <div className="container text-center">
      <Example names={['sagar', 'ruby', 'chinki', 'kaplu']} />
      <Example2 names={['sagar sangwan', 'ruby sangwan', 'chinki sangwan', 'kaplu sangwan']} />
      <Form />

      {/* <Name /> */}
    </div>
  );
}

export default App;
