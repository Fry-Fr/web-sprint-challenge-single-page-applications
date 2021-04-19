import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as yup from "yup"
import schema from "./validation"
import Header from "./Header"
import Home from "./Home"
import Form from "./Form"

const initialFormData = {
  name:'',
  size:'',
  pepps:null,
  jpepps:null,
  gpepps:null,
  bpepps:null,
  specialInstructions:''
}

const App = () => {
  
  const [ formErrors, setFormErrors ] = useState('')
  const [ formData, setFormData ] = useState(initialFormData)
  const [ order, setOrder ] = useState([])
  const [ disabled, setDisabled ] = useState(true)

  const updateForm = (name, value) => {
    yup
    .reach(schema,name)
    .validate(value)
    .then( res => {
      setFormErrors({
        ...formErrors,
        [name]:''
      })
    })
    .catch( err => {
      setFormErrors({
        ...formErrors,
        [name]:err.errors[0]
      })
    })

    if (name === "pepps" || name === "jpepps" || name === "gpepps" || name === "bpepps") {
      setFormData({
        ...formData,
        pepps: false,
        jpepps: false,
        gpepps: false,
        bpepps: false,
        [name]:value
      })
      if (formData.pepps === false || formData.jpepps === false || formData.gpepps === false || formData.bpepps === false) {
        setFormData({
          ...formData,
          [name]:value
        })
      }
    }else{
      setFormData({
        ...formData,
        [name]:value
      })
    }
  }

  if (formData.pepps === false && formData.jpepps === false && formData.gpepps === false && formData.bpepps === false ) {
    setFormData({
      ...formData,
      pepps: null,
      jpepps: null,
      gpepps: null,
      bpepps: null
    })
  }

  const Submit = () => {
    const newForm = {
      name: formData.name,
      size: formData.size,
      pepps: formData.pepps,
      jpepps: formData.jpepps,
      gpepps: formData.gpepps,
      bpepps: formData.bpepps,
      specialInstructions: formData.specialInstructions
    }
    setOrder(
      [...order,
      newForm]
    )
    setFormData(initialFormData)
  }

  useEffect( () => {
    schema.isValid(formData)
    .then( valid => {
      setDisabled(!valid)
    })
  },[formData])

  return (
    <div>
    <Switch>
      <Route exact path="/">
        <Header/>
        <Home order={order}/>
      </Route>

      <Route exact path="/pizza">
        <Header/>
        <div className="App">
        <Form error={formErrors} form={formData} update={updateForm} submit={Submit} disabled={disabled}/>
        </div>
      </Route>
    </Switch>
    </div>
  );
};
export default App;
