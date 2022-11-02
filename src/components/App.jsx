import React, { useState } from "react";
import Li from "./todolist";
import InputField from "./inputArea";
function App() {
  
  const [items, setItems] = useState([]);

  function deleteItem(id) {
    setItems((previous) => {
      return previous.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function addItem(inputText) {
    setItems((prevItems) => {
      if (inputText) {
        return [...prevItems, inputText];
      } else {
        return [...prevItems];
      }
    });
    
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputField
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
