import React from "react";
import FollowersList from "../FollowersList/FollowersList";
import Header from "../Header/Header";
import "./Followers.css";
import { useTranslation } from "react-i18next";

export default function Followers() {
  const { t } = useTranslation();

  return (
    <div className="followers">
      <Header title={t("Followers")} />
      <FollowersList />
    </div>
  );
}
