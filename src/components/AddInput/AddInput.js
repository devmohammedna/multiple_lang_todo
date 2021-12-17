import React, { useState } from "react";
import "./AddInput.css";
import { v4 } from "uuid";

import useLocales from "../../Utils/hooks/useLocales";

function AddInput({ setTodos, todos }) {
  const [todo, setTodo] = useState("");

   const {  translate } = useLocales();

  const addTodo = () => {
    let updatedTodos = [
      ...todos,
      {
        id: v4(),
        task: todo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    setTodo("");
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder={translate("Add a new task here...")}
      />
      <button className="add-btn" onClick={addTodo}>
        {translate("Add")}
      </button>
    </div>
  );
}

export default AddInput;
