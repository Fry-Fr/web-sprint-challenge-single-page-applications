import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Form from "./Form"

const initialFormData = {
  name:'',
  size:'',
  toppings:[],
  specialInstructions:''
}

const App = () => {
  
  const [ formData, setFormData ] = useState(initialFormData)

  const updateForm = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <>
    <Switch>
      <Route path="/">
        <Header/>
        <Home update={updateForm} form={formData}/>
      </Route>

      <Route path="/pizza?/">
        <Form/>
      </Route>
    </Switch>
    </>
  );
};
export default App;
