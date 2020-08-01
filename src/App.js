import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import Contactus from "./components/Contactus/Contactus";
import Admin from "./components/Admin/Admin";
import { Route, Switch, Redirect } from "react-router-dom";
import Logout from "./containers/Auth/Logout/Logout";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import Mobile from "./containers/Recharge/Mobile/MobileRecharge";

const asyncAuth = asyncComponent(() => {
  return import("./containers/Auth/Auth");
});
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/contactus" exact component={Contactus}></Route>
            <Route path="/mobile" exact component={Mobile}></Route>
            <Route path="/admin" component={Admin}></Route>
            <Route path="/logout" exact component={Logout}></Route>
            <Route path="/auth" exact component={asyncAuth}></Route>
            <Route path="/" exact component={Home}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
