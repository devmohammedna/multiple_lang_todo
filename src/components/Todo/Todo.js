import React, { useState } from "react";
import AddInput from "../AddInput/AddInput";
import Header from "../Header/Header";
import TodoList from "../TodoList/TodoList";
import { useTranslation } from "react-i18next";

import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);
  const { t } = useTranslation();

  return (
    <div className="todo">
      <Header title={t("Todo")} />
      <AddInput setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todo;
