import React, {Component} from "react";
import classes from './Auth.module.css';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const Auth  = () => {

  const state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {}
    }
  }

  const loginHandler = () => {

  };

  const registerHandler =() => {

  }

  const submitHandler = (e) => {
    e.preventDefault()
  }


  return (
    <div className={classes.Auth}>
      <div>
        <h1>Авторизация</h1>

        <form onSubmit={submitHandler} className={classes.AuthForm}>
          <Input label='Email'/>
          <Input label='Password' errorMessage='Test'/>


          <Button type='success' onClick={loginHandler}>Войти</Button>
          <Button type='primary' onClick={registerHandler}>Зарегистрироваться</Button>
        </form>
      </div>
    </div>
  );

};

export default Auth;
