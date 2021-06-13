import logo from "./kelogo.png"
import './App.css';
import Form from "./components/Form"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          KE Web App
        </p>
      </header>
      <body className="App-body">
        <div className="App-registration">
          Register Page
          <Form />
        </div>
        </body>
    </div>
  );
} 

export default App;
