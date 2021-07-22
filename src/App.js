import './App.css';
import {Route, Switch} from 'react-router-dom';
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import Auth from './containers/Auth/Auth';
import Layout from './hoc/Layout/Layout';

function App() {
  
    return (
      <Layout>
        {/*<Quiz />*/}
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/quiz-creator" component={QuizCreator} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/" exact component={QuizList} />
        </Switch>
      </Layout>
    );
  
  
}

export default App;
