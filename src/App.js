import LoginForm from "./Components/loginform/login";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Home from "./Components/Home/Home";
import { Login_actions } from "./Components/store/store";
import { Route, Switch } from "react-router-dom";
import C1 from "./Components/contenta/ca";
import C2 from "./Components/contentb/cb";
import C3 from "./Components/contentc/cc";
import Nav from "./Components/Nav/Nav";
import Signup from "./Components/Signup/Signup";
const App = () => {
  const login = useSelector((state) => state.Login.login);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("cf_email")) {
      dispatch(Login_actions.login());
    }
  }, [dispatch]);
  return (
    <React.Fragment>
      {!login && <p style={{fontFamily:"sans-serif",position:"relative",left:"45rem",top:"4rem",color:"blue"}}>Don't have any account? Create one.</p>}
      {!login && <div style={{display:"grid",gridTemplateColumns:"550px 550px"}}>
      <LoginForm />
      <Signup/>
      </div>}
      {login && (
        <React.Fragment>
          <Nav/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/content1">
              <C1 />
            </Route>
            <Route path="/content2">
              <C2 />
            </Route>
            <Route path="/content3">
              <C3 />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default App;
