import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"

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
    <Route path="/">
      <Header/>
      <Home update={updateForm} form={formData}/>
    </Route>
  );
};
export default App;
