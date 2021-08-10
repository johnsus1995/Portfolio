import React, { useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import "./todo.scss";

function Todo() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const [error, setError] = useState(false);
  const [focus, setFocus] = useState(false);
  const inputRef = useRef();
  //CHANGE HANDLER
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  //SUBMIT HANDLER
  const storeItem = (e) => {
    e.preventDefault();
    if (input === "") {
      // inputRef.current.focus();
      setFocus(true);
      setError(true);
    } else {
      setItem([...item, input]);
      setInput("");
      setError(false);
    }
  };
  // const clickHandler = () => {};
  // onClick={clickHandler}
  let todo = false;
  if (todo === true) {
    return <Redirect to="/" />;
  }
  //Delete Item fn
  const deleteItem = (index) => {
    // const newItem = item;
    item.splice(index, 1);
    setItem([...item]);
  };
  //reset All
  const resetAll = () => {
    item.length = 0;
    console.log(item);
  };
  //check

  return (
    <div className="todo-container">
      <h1>Todo App</h1>

      <form className="input-section" onSubmit={storeItem}>
        <input
          // ref={inputRef}
          autoFocus={focus}
          className="input-field"
          name="addTodo"
          placeholder="Enter item.."
          onChange={handleChange}
          value={input}
        ></input>
        <button>Add</button>
        <ul>
          {item.map((elmt, index) => (
            <li key={index}>
              {" "}
              {elmt}{" "}
              <div>
                <i className="far fa-edit my-edit"></i>
                <i
                  onClick={() => deleteItem(index)}
                  className="fas fa-trash-alt"
                ></i>
              </div>
            </li>
          ))}
          {error && <p className="error">Oops!</p>}
          {/* <button onClick={() => resetAll()}>Reset</button> */}
        </ul>
      </form>
    </div>
  );
}

export default Todo;
