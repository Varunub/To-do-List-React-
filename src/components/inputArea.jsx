import React from "react";

function inputArea(props) {
  return (
    <div className="form">
      <input onChange={props.onchange} type="text" value={props.text} />
      <button onClick={props.onclick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default inputArea;
