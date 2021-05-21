import "./App.css";
import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

//UTIL IMPORTS
import { AuthContext } from "./context/useAuthContext";
import { useAuthHook } from "./hooks/useAuthHook";

//SECTION IMPORTS
import Header from "./components/partials/Header";
import Loading from "./components/loading/Loading";
import Footer from "./components/partials/Footer";

//PAGES IMPORT
import LoginPage from "./pages/LoginPage";
import MainAdminPage from "./pages/MainAdminPage";

function App() {
  const { token, login, logout, userId } = useAuthHook();

  const routes = (
    <Switch>
      <Route exact path="/">
        <MainAdminPage />
      </Route>
      <Route exact path="/home">
        <MainAdminPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/signup">
        <LoginPage />
      </Route>
    </Switch>
  );
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        login: login,
        logout: logout,
        userId: userId,
      }}
    >
      <div className="App">
        <Header />
        <Suspense fallback={<Loading />}>{routes}</Suspense>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
