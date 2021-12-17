import React from "react";
import FollowersList from "../FollowersList/FollowersList";
import Header from "../Header/Header";
import "./Followers.css";
import useLocales from "../../Utils/hooks/useLocales";

export default function Followers() {
 const {  translate } = useLocales();
 
  return (
    <div className="followers">
      <Header title={translate("Followers")} />
      <FollowersList />
    </div>
  );
}
