import React, { Component } from 'react';
import update from 'react-addons-update';

import Quiz from './Quiz';
import quizQuestions from './quizQuestions';
import Denied from './Denied';
import Match from './Match';

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     answersCount: {
       yas: 0,
       nope: 0,
       forreals: 0
     },
     quizTaken: null,
     match: null
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    
    return array;
  };
  
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
      }
  }
  
  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);

    // if (this.state.answersCount.yas >= 8) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  setResults (result) {
    console.log(result);
    // if (result.length === 1) {
    //   this.setState({ result: result[0] });
    // } else {
    //   this.setState({ result: 'Undetermined' });
    // }
    // console.log(this.state.answersCount.yas);

    if (result[0] === "yas" && this.state.answersCount.yas >= 4) {
      this.setState({ match: true });
      this.setState({ quizTaken: true });
    } else {
      this.setState({ match: false });
      this.setState({ quizTaken: true });
    }
  }


  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (

    
      this.state.match ? <Match /> : <Denied />
      // <Result quizResult={this.state.result} />
      // if (this.state.result === true) {
      //   return (<Match />)
      // } else if (this.state.result === false) {
      //   return (<Denied/>)
      // }
    )
  }

  render() {
    return (
      <div>
        User Component
        {this.state.quizTaken ? this.renderResult() : this.renderQuiz()}
      </div>
    )
  }
}

export default User;
