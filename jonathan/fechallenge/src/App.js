import "./App.css";
import Form from "./Form.js";

function App() {
  return (
    <div className="main">
      <div className="page-top">
        <img src="kelogo.png" alt="ke logo" className="logo"></img>
        <h1>KE Web App</h1>
      </div>
      <div className="page-bottom">
        <Form />
      </div>
    </div>
  );
}

export default App;
