import "./App.css";
import { useState } from "react";
import axios, * as others from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  function displayInfo() {
    console.log(name, age, country, position, wage);
  }
  function addEmployee() {
    axios
      .post("http://localhost:3001/create", {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage,
      })
      .then(() => {
        console.log("HELL YEAH");
      });
  }

  return (
    <div className="App">
      <h1> Hello world</h1>
      <form className="form-inputs">
        <div>
          <label>Name:</label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            type="text"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Wage (year):</label>
          <input
            type="text"
            onChange={(event) => {
              setWage(event.target.value);
            }}
          />
        </div>
        <button type="button" onClick={(displayInfo, addEmployee)}>
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default App;
