import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';

import Home from './pages/Home';
import Question from './pages/Question';
import Thanks from './pages/Thanks';

import Nav from './components/Nav';
import Footer from './components/Footer';

import questions from './constants/questions';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      currentQuestion: 0,
      quiz: {},
    };
  }

  initQuiz() {
    this.setState({
      page: 1,
      currentQuestion: 0,
      quiz: {},
    });
  }

  answer(question, answer) {
    const { quiz } = this.state;
    quiz[question] = answer;
    this.setState({ quiz });
  }

  goToQuestion(question) {
    this.setState({ currentQuestion: question });
  }

  nextQuestion() {
    this.goToQuestion(this.state.currentQuestion + 1);
  }

  goToPage(page) {
    this.setState({ page });
  }

  submit() {
    //TODO Save in db
    this.goToPage(2);
  }

  renderPage() {
    const { page, currentQuestion, quiz } = this.state;
    const isLastQuestion = currentQuestion === questions.length - 1;

    return {
      0: <Home page={page} clickHandler={::this.initQuiz} />,
      1: <Question
          current={currentQuestion}
          quiz={quiz}
          handlePagination={::this.goToQuestion}
          handleSelect={::this.answer}
          handleConfirm={isLastQuestion ? ::this.submit : ::this.nextQuestion}
         />,
      2: <Thanks clickHandler={() => this.goToPage(0)} />
    }[this.state.page];

  }

  render() {
    const { page } = this.state;
    const classes = classNames('watermark', { opaque: !(page % 2) });
    return (
      <div className="App">
        <img src="images/watermark.png" className={classes} />
        <img src="images/background.jpg" className="background" />
        <Nav showHomeButton={!!(page % 2)} />
        <div className="container">{this.renderPage()}</div>
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
