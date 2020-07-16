import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import AdminPanel from "./components/AdminPanel"

function App() {
  return (
    <Switch>
      <Route path="/" exact component={AdminPanel} />
    </Switch>
  );
}

export default App;
