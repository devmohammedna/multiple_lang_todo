import React from "react";
import "./TodoFooter.css";
import { Link } from "react-router-dom";
import useLocales from "../../Utils/hooks/useLocales";

function TodoFooter({ numberOfIncompleteTasks }) {
 const { translate } = useLocales();
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} {translate("left")}
      </p>
      <Link to="/followers">{translate("Followers")}</Link>
    </div>
  );
}

export default TodoFooter;
