import React from "react";
import Counter from "./components/Counter";
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Webpack Tutorial</h1>
        <Counter />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;