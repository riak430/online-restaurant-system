import React from "react";
import "./special.css";

function Specials() {
  return (
    <div className="container">
      <h1>Our Specials</h1>
      <div className="arrow"></div>
      <div className="boxs">
        <div className="box">
          <h2>Lorem imsum dolor</h2>
          <img src="https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?cs=srgb&dl=pexels-terje-sollie-299348.jpg&fm=jpg"></img>
          <p>Lorem ipsum dolor set amet</p>
        </div>
      </div>
      <div className="boxs">
        <div className="box">
          <h2>Lorem imsum dolor</h2>
          <img src="https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?cs=srgb&dl=pexels-terje-sollie-299348.jpg&fm=jpg"></img>
          <p>Lorem ipsum dolor set amet</p>
        </div>
      </div>
      {/* <div className="boxs">
        <div className="box">
          <h2>Lorem imsum dolor</h2>
          <img src="https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?cs=srgb&dl=pexels-terje-sollie-299348.jpg&fm=jpg"></img>
          <p>Lorem ipsum dolor set amet</p>
        </div>
      </div> */}
    </div>
  );
}

export default Specials;
