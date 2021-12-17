import "./App.css";
import Banner from "./components/Banner/Banner";
import { Switch, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";
import FollowersPage from "./pages/FollowersPage/FollowersPage";

import useLocales from "./Utils/hooks/useLocales";
function App() {
    const {   currentLang, translate, onChangeLang } = useLocales();

  return (
    <div
      className="App"
      data-testid={"learn react"}
      dir={currentLang.value === "ar" && "rtl"}
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
        onClick={onChangeLang}
      >
        {translate('language')}
      </button>
      <Switch>
        <Route strict exact path="/" component={TodoPage} />
        <Route strict exact path="/followers" component={FollowersPage} />
      </Switch>
    </div>
  );
}

export default App;
