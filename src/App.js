import React from 'react';
import "./App.css";

import Home from "./pages/Home";
import Deshboard from "./pages/Deshboard";
import SignUp from "./pages/SignUp";
import  Category from  "./pages/Category";
import CategoryListing from  "./pages/CategoryListing";
import CategoryProfile from "./pages/CategoryProfile";
import UserProfile from  "./pages/UserProfile";
import User from  "./pages/User";
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
          <Route exact path="/category/listing/:id" component={CategoryListing} />
          <Route exact path="/category/:id" component={CategoryProfile} />
          <Route exact path="/userprofile/:id" component={UserProfile} />
          <Route exact path="/user/" component={User} />
          <Route component={Error} />
        </Switch>
      </>
  );
}
