import React from "react";
import "./App.css";
import Menubar from "./components/menus";
import Specials from "./components/Our specials/specials";

function App() {
  return (
    <div className="App">
      <div className="app">
        <Menubar />
        <Specials />
      </div>
    </div>
  );
}

export default App;
