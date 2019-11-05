import React from 'react';
import "./App.css";

import Home from "./pages/Home";
import Deshboard from "./pages/Deshboard";
import SignUp from "./pages/SignUp";
import  Category from  "./pages/Category";
import CategoryProfile from "./pages/CategoryProfile"
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";



import { Switch, Route } from "react-router-dom";


export default function App() {
  return (
      <>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard/" component={Deshboard} />
            <Route exact path="/dashboard/:id" component={Deshboard} />
          <Route exact path="/signup/" component={SignUp} />
          <Route exact path="/category/" component={Category} />
          <Route exact path="/category/:id" component={CategoryProfile} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </>
  );
}
