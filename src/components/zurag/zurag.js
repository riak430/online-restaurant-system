import React from "react";

function Image(props) {
  return (
    <div className="imagee">
      <img src={props.src} alt="" />
    </div>
  );
}

export default Image;
