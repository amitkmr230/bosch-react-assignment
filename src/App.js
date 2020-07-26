import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import AdminPanel from "./components/AdminPanel"
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={AdminPanel} />
      <Route path="/user-profile" exact component={UserProfile} />
    </Switch>
  );
}

export default App;
