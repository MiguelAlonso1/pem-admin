import "./App.css";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainAdminPage from "./pages/MainAdminPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainAdminPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
