import React, { useState } from "react";
import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import useLocales from "../../Utils/hooks/useLocales";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const { translate } = useLocales();

  return (
    <div className="todo">
      <Header title={translate("Todo")} />
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todo;
