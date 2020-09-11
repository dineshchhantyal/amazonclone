import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import ScrollToTop from "./Scroll";
import AOS from "aos";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51HPvSHG08e3iedCbzXeJwsIb5swAQGsNFMrKreH5uKCm8sfq2OdGWHBXn34e2boudESHSoRfkWkjCr8n7EyoxXsc00l3fmYQsW');

function App() {
  const [, dispatch] = useStateValue();

  AOS.init();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Switch>
          <Route path="/Orders">
          <Header />
              <Orders />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
              <Payment />
              </Elements>
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/" exact>
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
