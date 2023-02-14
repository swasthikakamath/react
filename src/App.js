
import './App.css';
import Image from "./assets/cat.jpg";
import Demo from './components/Demo';

function App() {
  var x = 20;
  var text;
  if(x === 20) {
    text = "Equal"; 
  } else {
    text = "Not Equal"
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>{50 / 5}</h2>
      <img src={Image} alt="pic" width="500px"/>
      <h2>{text}</h2>
      <h3>{x >= 10 ? "greater than or equal to 10": "not equal to 10"}</h3>
      <Demo para={text}/>
    </div>
  );
}

export default App;
