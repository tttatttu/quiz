import React, {Component} from 'react';
import classes from './QuizCreator.module.css';
import Button from "../../components/UI/Button/Button";
import {createControl} from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Select from "../../components/UI/Select/Select";

function createOptionControl(number) {
  return createControl({
    label: `Варивнт ${number}`,
    errorMessage: 'Значение не может быть пустым',
    id: number
  }, {required: true})
}

function createFormControls() {
  return {
    question: createControl({
      label: 'Введите вопрос',
      errorMessage: 'Вопрос не может быть пустым'
    }, {required: true}),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  }
}

export default class QuizCreator extends Component {

  state = {
    quiz: [],
    rightAnswerId: 1,
    formControls: createFormControls()
  }

  submitHandler = event => {
    event.preventDefault();
  }

  addQuestionHandler = () => {

  }

  createQuestionHandler = () => {

  }

  onChangeHandler = (value, controlName) => {

  }

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Auxiliary key={controlName + index}>
          <Input
            type={control.type}
            value={control.value}
            valid={control.valid}
            label={control.label}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.onChangeHandler(event.target.value, controlName)}
          />
          {index === 0 ? <hr/> : null}
        </Auxiliary>
      )
    })
  }

  selectChangeHandler = event => {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderInputs()}
            <Select label='Выберите правильный ответ'
                    value={this.state.rightAnswerId}
                    onChange={this.selectChangeHandler}
                    options={[
                      {text: 1, value: 1},
                      {text: 2, value: 2},
                      {text: 3, value: 3},
                      {text: 4, value: 4}
                    ]}/>
            <Button
              type='primary'
              onClick={this.addQuestionHandler}
            >Добавить вопрос</Button>
            <Button
              type='success'
              onClick={this.createQuestionHandler}
            >Создать тест</Button>
          </form>
        </div>
      </div>
    )
  }
}
