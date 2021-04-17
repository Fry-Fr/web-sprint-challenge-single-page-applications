import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"

const App = () => {
  return (
    <Route path="/">
      <Header/>
      <Home/>
    </Route>
  );
};
export default App;
