import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Product from "./components/Product/Product";
import ProductItemPage from "./components/Product/ProductItemPage";
import SignUp from "./components/SignUp/SignUp";
import Users from "./components/Users/Users";
import { useDispatch } from "react-redux";
import { loginActions } from "./store";

const App = () => {
  const dispatch = useDispatch();
  if (localStorage.getItem("isLogin")) {
    dispatch(loginActions.login());
  }
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/product/:id">
          <ProductItemPage />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
