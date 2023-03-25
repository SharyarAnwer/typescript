import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Button from './components/Button';

function App() {

  const personName = {
    firstName : "HTML",
    lastName : "CSS"
  }

  const [name, setName] = useState("")
  return (
    <div className="App">
      {/* <Greet name='JavaScript' contactNumber={123456}/> */}

      {/* <Greet name='JavaScript' contactNumber={123456} details = {personName}/> */}

      {/* <Button handleClick={() => {
        console.log("The button was clicked")
      }} /> */}

      <Button value={name} handleChange = {(event) => {
        console.log(event.target.value)
        setName(event.target.value)
      }} />

    </div>
  );
}

export default App;
