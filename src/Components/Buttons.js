import React, { useState } from "react";

export default function Buttons(props) {
  function handleClick() {
    props.calculator(props.number);
  }
  return (
    <div>
      <button className="button" type="button" onClick={handleClick}>
        {props.number}
      </button>
    </div>
  );
}
