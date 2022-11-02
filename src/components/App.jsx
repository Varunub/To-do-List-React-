import React, { useState } from "react";
import Li from "./todolist";
import InputField from "./inputArea";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function deleteItem(id) {
    setItems((previous) => {
      return previous.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      if (inputText) {
        return [...prevItems, inputText];
      } else {
        return [...prevItems];
      }
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputField
        text={inputText}
        onchange={handleChange}
        onclick={addItem}
      ></InputField>
      <div>
        <ul>
          {items.map((Item, index) => (
            <Li id={index} onChecked={deleteItem} text={Item}></Li>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
