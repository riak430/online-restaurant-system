import React from "react";
import "./App.css";
import Menubar from "./components/menus";

function App() {
  return (
    <div className="App">
      <Menubar />

      <div>Main section</div>
      <div>Footer section</div>
    </div>
  );
}

export default App;
