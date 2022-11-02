import React from "react";

function Li(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
      value={props.text}
    >
      {props.text}
    </li>
  );
}

export default Li;
