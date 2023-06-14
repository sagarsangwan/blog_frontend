import './App.css';
import Name from './components/Name';
function App() {
  function clicked() {
    alert("button is clicked")
  }
  return (
    <div className="container text-center">
      <Name />
    </div>
  );
}

export default App;
