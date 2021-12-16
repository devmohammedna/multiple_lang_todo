import React from "react";
import "./TodoFooter.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function TodoFooter({ numberOfIncompleteTasks }) {
  const { t } = useTranslation();

  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} {t("left")}
      </p>
      <Link to="/followers">{t("Followers")}</Link>
    </div>
  );
}

export default TodoFooter;
