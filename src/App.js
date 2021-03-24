import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from './Login';
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IRyZeJKiTznTmqg5XPqV3Sii8wsOl2GPeBk0j4co3orlClpLGnmjKOh7rdnYfQxzE7ZtQzR0qkjBHuZ0kca85kQ00qc0yCBPg"
);


function App() {

   const [{}, dispatch] = useStateValue();

   useEffect(() => {
  // will only run once when the app component loads...

     auth.onAuthStateChanged((authUser) => {
       console.log("THE USER IS >>> ", authUser);

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
    <div>
     <Router>
        <Switch>
        <Route path="/Login">
            <Login />
          </Route>
        <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
