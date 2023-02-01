import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Hello world</h1>
      <form className="form-inputs">
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Age:</label>
          <input type="text" />
        </div>
        <div>
          <label>Country:</label>
          <input type="text" />
        </div>
        <div>
          <label>Wage (year):</label>
          <input type="text" />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default App;
