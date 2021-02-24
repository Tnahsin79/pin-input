//import logo from './logo.svg';
import './App.css';
import Pin from "./components/Pin";
import SendOtp from "./components/SendOtp";

function App() {
  return (
    <div className="App">
      <h1>PIN INPUT COMPONENT</h1>
      <SendOtp />
      <br></br>
      <Pin />
      <br></br>
      <button type="submit" disabled>SUBMIT</button>
    </div>
  );
}

export default App;
