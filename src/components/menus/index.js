import React from "react";
import "./style.css";

function Menubar() {
  return (
    <div className="menu">
      <a href="#">Specials</a>
      <a href="#">About</a>
      <a href="#">Menu</a>
      <a href="#">Chef</a>
      <a href="#">Contact</a>
      <div className="gusto">
        <h1>Gusto</h1>
      </div>
      <div className="phone">
        <p>Reservations:(887)654-3210</p>
      </div>
    </div>
  );
}

export default Menubar;
