import "./App.css";
import Banner from "./components/Banner/Banner";
import { Switch, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";
import FollowersPage from "./pages/FollowersPage/FollowersPage";
import { useTranslation } from "react-i18next";
import changeLanguage from "./Utils/changeLanguage";

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = () => {
    changeLanguage(i18n.language === "ar" ? "en" : "ar", i18n);
  };

  return (
    <div
      className="App"
      data-testid={"learn react"}
      dir={i18n.language === "ar" && "rtl"}
    >
      <Banner />
      <button
        style={{
          padding: "5px 20px",
          background: "none",
          border: "1px solid #fff",
          position: "absolute",
          color: "#fff",
          top: 30,
          margin: "0 30px",
          fontSize: 25,
        }}
        onClick={handleChangeLanguage}
      >
        {t("language")}
      </button>
      <Switch>
        <Route strict exact path="/" component={TodoPage} />
        <Route strict exact path="/followers" component={FollowersPage} />
      </Switch>
    </div>
  );
}

export default App;
