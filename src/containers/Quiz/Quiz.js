import React, {useState, setState} from "react";
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';


const Quiz = () => {
  let state = {

    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'Какого цвета нет в Российском флаге?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'красного', id: 1},
          {text: 'зеленого', id: 2},
          {text: 'голубого', id: 3},
          {text: 'белого', id: 4}
        ]
      },
      {
        question: 'На какую геометрическую фигуру похожа Земля?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: 'треугольник', id: 1},
          {text: 'параллелограмм', id: 2},
          {text: 'круг', id: 3},
          {text: 'овал', id: 4}
        ]
      }
    ]
  }

  const [count, setCount] = useState(state);


  function onAnswerClickHandler(answerId) {

    if (state.answerState) {
      const key = Object.keys(state.answerState)[0]

      if (state.answerState[key] === 'success') {
        return
      }
    }

    const question = state.quiz[state.activeQuestion];
    // console.log(question);

    if (question.rightAnswerId === answerId) {

      setCount({
        answerState: {[answerId]: 'success'}
      })

      const timeout = window.setTimeout(() => {

        if (isQuizFinished()) {
          console.log('Finished');
        } else {
          setCount({
            activeQuestion: state.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout)
      }, 1000);


    } else {
      setCount({
        answerState: {[answerId]: 'error'}
      })
    }


  }

  function isQuizFinished() {
    return count.activeQuestion + 1 === state.quiz.length
  };

  return (
    <div className={classes.Quiz}>
      <div className={classes.QuizWrapper}>
        <h1>Ответьте на все вопросы</h1>
        <ActiveQuiz
          answers={state.quiz[state.activeQuestion].answers}
          question={state.quiz[state.activeQuestion].question}
          onAnswerClick={onAnswerClickHandler}
          quizLength={state.quiz.length}
          answerNumber={count.activeQuestion + 1}
          state={count.answerState}
        />
      </div>
    </div>
  )
};

export default Quiz;
